import { NextRequest, NextResponse } from 'next/server'
import client from "@/db/index"

function isLocalhost(origin: string | null) {
  return origin?.startsWith('http://localhost')
}

function withCors(req: NextRequest, res: NextResponse) {
  const origin = req.headers.get('origin')

  if (isLocalhost(origin)) {
    res.headers.set('Access-Control-Allow-Origin', origin!)
    res.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    res.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  }

  return res
}

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params
    const tempId = parseInt(id, 10)
    console.log("ID:", tempId)

    if (isNaN(tempId)) {
      return withCors(request, NextResponse.json({ error: "Invalid ID parameter" }, { status: 400 }))
    }

    const data = await client.customapi.findMany({
      where: { id: tempId }
    })

    if (!data || data.length === 0) {
      return withCors(request, NextResponse.json({ message: "No data found" }, { status: 404 }))
    }

    const response = data[0].fields
    return withCors(request, NextResponse.json({ response }))
  } catch (err) {
    console.error("Error:", err)
    return withCors(request, NextResponse.json({ error: "Internal server error" }, { status: 500 }))
  }
}

// Handle preflight OPTIONS
export function OPTIONS(request: NextRequest) {
  const res = new NextResponse(null, { status: 204 })
  return withCors(request, res)
}
