import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ mensagem: "GET funcionando info!" });
}

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({
    mensagem: "POST funcionando info!",
    recebido: body,
  });
}
