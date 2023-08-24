import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  // Do whatever you want
  return NextResponse.json({ message: 'Hello World' }, { status: 200 });
}
