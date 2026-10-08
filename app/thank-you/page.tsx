import Link from "next/link";

export const metadata = {
  title: "Thank You | Elvira Nurgalieva",
  description: "Thank you for reaching out to Elvira Nurgalieva.",
};

export default function ThankYouPage() {
  return (
    <main className="thank-you-shell">
      <section className="thank-you-card" aria-labelledby="thank-you-title">
        <p className="section-label">Message received</p>
        <div className="thank-you-mark" aria-hidden="true">✓</div>
        <h1 id="thank-you-title">Thank you!</h1>
        <p>Your message has been sent.</p>
        <div className="thank-you-actions">
          <Link className="button button-primary" href="/">
            Back to portfolio
          </Link>
        </div>
      </section>
    </main>
  );
}
