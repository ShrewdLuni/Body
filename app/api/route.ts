import { headers } from 'next/headers'
 
export async function GET(request: Request) {
  return Response.json({ message: "True", status: 200 })
}