export async function GET() {
  const securityTxt = `Contact: mailto:security@jnx03.xyz
Expires: 2025-12-31T23:59:59.000Z
Preferred-Languages: en
Canonical: https://jnx03.xyz/.well-known/security.txt
Policy: https://jnx03.xyz/security-policy
`

  return new Response(securityTxt, {
    headers: {
      "Content-Type": "text/plain",
    },
  })
}
