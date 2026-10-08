export const contactFormAction = "https://formsubmit.co/nurgalieva.e@gmail.com";

export async function submitContact(
  data: FormData,
  send: typeof fetch = fetch,
) {
  const response = await send(
    "https://formsubmit.co/ajax/nurgalieva.e@gmail.com",
    {
      method: "POST",
      headers: { Accept: "application/json" },
      body: data,
      signal: AbortSignal.timeout(20000),
    },
  );
  const result = await response.json();
  if (!response.ok || (result?.success !== true && result?.success !== "true")) {
    throw new Error("Submission was not confirmed");
  }
}
