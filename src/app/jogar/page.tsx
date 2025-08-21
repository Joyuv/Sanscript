"use client";
import Alerta from "@/app/ui/Alertas";

export default function Page() {
  async function addItem(nome: string, quantidade = 1) {
    await fetch("/api/personagem/inventario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        acao: "add",
        item: { nome: nome, quantidade: quantidade },
      }),
    });
  }
  return (
    <>
      <h1>Página jogar</h1>
      <button onClick={() => addItem("exemplo2")}>me clique</button>
      <Alerta titulo={"Talvez"} tipo={"alerta"}>
        Morte (Possivelmente)
      </Alerta>
      <Alerta titulo={"Certeza"} tipo={"erro"}>
        Morte (Com certeza) (quer dizer, talvez)
      </Alerta>
    </>
  );
}
