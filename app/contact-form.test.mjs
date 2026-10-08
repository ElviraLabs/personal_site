import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import vm from "node:vm";
import * as jsx from "react/jsx-runtime";
import ts from "typescript";

const source = await readFile(new URL("./contact-form.tsx", import.meta.url), "utf8");
const { outputText } = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX },
});

function mount(submitContact) {
  const statuses = [];
  const navigations = [];
  let resets = 0;
  const context = vm.createContext({
    exports: {},
    require(name) {
      if (name === "react/jsx-runtime") return jsx;
      if (name === "react") return {
        useState: () => ["idle", (status) => statuses.push(status)],
        useRef: (current) => ({ current }),
      };
      if (name === "../lib/contact-submit") return { submitContact, contactFormAction: "unused" };
      throw new Error(`Unexpected import: ${name}`);
    },
    FormData: class extends FormData {
      constructor() { super(); this.set("message", "Keep this test message"); }
    },
    window: { location: { assign: (url) => navigations.push(url) } },
  });
  vm.runInContext(outputText, context);
  const form = context.exports.default();
  return {
    submit: () => form.props.onSubmit({ preventDefault() {}, currentTarget: { reset() { resets += 1; } } }),
    statuses, navigations, resets: () => resets,
  };
}

test("navigates only after success and blocks duplicates through navigation", async () => {
  let finish;
  let requests = 0;
  const form = mount(() => { requests += 1; return new Promise((resolve) => { finish = resolve; }); });
  const pending = form.submit();
  await form.submit();
  assert.equal(requests, 1);
  assert.deepEqual(form.navigations, []);
  finish();
  await pending;
  assert.deepEqual(form.navigations, ["/thank-you/"]);
  assert.equal(form.resets(), 1);
  await form.submit();
  assert.equal(requests, 1);
});

test("failure keeps the form, does not navigate or reset, and permits retry", async () => {
  let requests = 0;
  const form = mount(async () => { requests += 1; throw new Error("Network failed"); });
  await form.submit();
  assert.deepEqual(form.navigations, []);
  assert.equal(form.resets(), 0);
  assert.equal(form.statuses.at(-1), "error");
  await form.submit();
  assert.equal(requests, 2);
});
