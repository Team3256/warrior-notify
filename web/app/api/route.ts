import { type NextRequest } from 'next/server'
 
export function GET(request: NextRequest) {
  return Response.json({"status": "healthy"});
}

export function POST(request: NextRequest) {
    return Response.json({"status": "healthy"});
  }