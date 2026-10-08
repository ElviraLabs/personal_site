"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { contactFormAction, submitContact } from "../lib/contact-submit";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const sending = useRef(false);
  const confirmation = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (status === "sent") confirmation.current?.focus();
  }, [status]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending.current) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    sending.current = true;
    setStatus("sending");
    try {
      await submitContact(data);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    } finally {
      sending.current = false;
    }
  }

  if (status === "sent") {
    return (
      <p className="contact-confirmation" role="status" tabIndex={-1} ref={confirmation}>
        Thank you! Your message has been sent.
      </p>
    );
  }

  return (
    <form action={contactFormAction} className="contact-form" method="POST" onSubmit={handleSubmit} aria-busy={status === "sending"}>
      <input name="_next" type="hidden" value="https://elvira-n.com/thank-you/" />
      <input name="_subject" type="hidden" value="New portfolio inquiry" />
      <div aria-hidden="true" className="contact-honeypot">
        <label htmlFor="contact-website">Website</label>
        <input autoComplete="off" id="contact-website" name="_honey" tabIndex={-1} type="text" />
      </div>
      <label className="contact-field">
        <span>Name</span>
        <input name="name" placeholder="Your name" required type="text" readOnly={status === "sending"} />
      </label>
      <label className="contact-field">
        <span>Email</span>
        <input name="email" placeholder="you@example.com" required type="email" readOnly={status === "sending"} />
      </label>
      <label className="contact-field">
        <span>Message</span>
        <textarea name="message" placeholder="Tell me a little about the role or project." required rows={5} readOnly={status === "sending"} />
      </label>
      {status === "error" && (
        <p className="contact-error" role="alert">
          We couldn’t confirm your message was sent. Your text is still here.
          Please try again, or contact me on LinkedIn below.
        </p>
      )}
      <button className="button button-primary contact-submit" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
