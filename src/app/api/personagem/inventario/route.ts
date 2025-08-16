import { NextResponse } from "next/server";

let inventario = [{ nome: "exemplo", quantidade: 1 }];

export async function GET() {
  return NextResponse.json({ mochila: inventario });
}

export async function POST(request: Request) {
  const body = await request.json();
  if (body.acao === "add") {
    const itemExists = inventario.find(
      (item) => item.nome.toLowerCase() === body.item.nome.toLowerCase(),
    );

    if (itemExists) {
      itemExists.quantidade += body.item.quantidade;
    } else {
      inventario.push(body.item);
    }
  } else if (body.acao === "remove") {
    const itemExists = inventario.find(
      (item) => item.nome.toLowerCase() === body.item.nome.toLowerCase(),
    );

    if (itemExists) {
      if (itemExists.quantidade - body.item.quantidade < 0) {
        return NextResponse.json({
          mensagem: "Erro, não é possível retirar essa quantidade",
          recebido: body,
        });
      } else if (itemExists.quantidade - body.item.quantidade === 0) {
        inventario = inventario.filter(
          (i) => i.nome.toLowerCase() !== body.item.nome.toLowerCase(),
        );
      } else {
        itemExists.quantidade -= body.item.quantidade;
      }
    } else {
      return NextResponse.json({
        mensagem: "Erro, item não existe",
        recebido: body,
      });
    }
  }
  return NextResponse.json({
    mensagem: "POST funcionando inventario!",
    recebido: body,
    novoInv: inventario,
  });
}
