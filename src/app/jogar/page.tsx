"use client";

export default function Page() {
  async function addItem(nome, quantidade = 1) {
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
    </>
  );
}
