import { NextResponse } from "next/server";
import { Noise } from "noisejs";

let mapa: string[];

export async function GET() {
  if (mapa) {
    return NextResponse.json({
      mensagem: "Mapa",
      mapa: mapa,
    });
  } else {
    return NextResponse.json({
      mensagem: "Mapa ainda não existe",
      mapa: null,
    });
  }
}

export async function POST(request: Request) {
  const body = await request.json();
  if (mapa) {
    return NextResponse.json({
      mensagem: "Mapa já existe",
    });
  } else {
    mapa = (() => {
      const escala = body.info.escala;
      const ruido = new Noise(body.info.seed);
      const resultado = [];
      for (let y = 0; y < body.info.tamy; y++) {
        let linha = "";
        for (let x = 0; x < body.info.tamx; x++) {
          const v = (ruido.simplex2(x / escala, y / escala) + 1) / 2;
          if (v < 0.25) linha += "~";
          else if (v < 0.45) linha += ".";
          else if (v < 0.65) linha += ",";
          else if (v < 0.85) linha += "^";
          else linha += "M";
        }
        resultado.push(linha);
      }
      return resultado;
    })();
    return NextResponse.json({
      mensagem: "Mapa criado com sucesso",
    });
  }
}
