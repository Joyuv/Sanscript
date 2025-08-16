"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [mochila, setMochila] = useState<any[]>([]);
  async function getMochila() {
    const response = await fetch("/api/personagem/inventario");
    const data = await response.json();
    console.log(data);
    setMochila(data.mochila);
  }

  useEffect(() => {
    getMochila();
  }, []);

  async function removeItem(nome, quantidade = 1) {
    await fetch("/api/personagem/inventario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        acao: "remove",
        item: { nome: nome, quantidade: quantidade },
      }),
    });
    await getMochila();
  }

  return (
    <>
      <p>Página de mochila</p>
      <ul>
        {mochila.map((item) => {
          return (
            <li key={item.nome}>
              {item.nome} - {item.quantidade}
              <button onClick={() => removeItem(item.nome)}>Remover</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
