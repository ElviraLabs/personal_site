import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import ts from "typescript";

const source = await readFile(new URL("./contact-submit.ts", import.meta.url), "utf8");
const { outputText } = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
});
const { submitContact } = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`);

for (const success of [true, "true"]) {
  test(`accepts explicit success ${JSON.stringify(success)}`, async () => {
    const data = new FormData();
    data.set("message", "Test only");
    await submitContact(data, async (url, options) => {
      assert.equal(url, "https://formsubmit.co/ajax/nurgalieva.e@gmail.com");
      assert.equal(options.method, "POST");
      assert.equal(options.headers.Accept, "application/json");
      assert.equal(options.body, data);
      assert.ok(options.signal instanceof AbortSignal);
      return Response.json({ success });
    });
  });
}

for (const payload of [{ success: false }, { success: "false" }, {}, null]) {
  test(`rejects unconfirmed response ${JSON.stringify(payload)}`, async () => {
    await assert.rejects(submitContact(new FormData(), async () => Response.json(payload)));
  });
}

test("rejects HTTP failure even with a success payload", async () => {
  await assert.rejects(submitContact(new FormData(), async () => Response.json({ success: true }, { status: 500 })));
});

test("rejects HTML and leaves the original message intact", async () => {
  const data = new FormData();
  data.set("message", "Preserve this message");
  await assert.rejects(submitContact(data, async () => new Response("<html>Thanks</html>")));
  assert.equal(data.get("message"), "Preserve this message");
});

for (const name of ["TypeError", "TimeoutError"]) {
  test(`propagates ${name} instead of reporting success`, async () => {
    await assert.rejects(submitContact(new FormData(), async () => {
      throw new DOMException("Request failed", name);
    }));
  });
}
