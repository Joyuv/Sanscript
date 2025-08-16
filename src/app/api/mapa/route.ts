import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ mensagem: "GET funcionando mapa!" });
}

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({
    mensagem: "POST funcionando mapa!",
    recebido: body,
  });
}
