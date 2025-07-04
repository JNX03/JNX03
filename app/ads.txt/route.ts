export async function GET() {
  return new Response("google.com, pub-6423546523017297, DIRECT, f08c47fec0942fa0", {
    headers: {
      "Content-Type": "text/plain",
    },
  })
}
