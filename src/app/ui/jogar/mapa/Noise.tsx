import { Noise } from "noisejs";
import { useMemo } from "react";
import "@/app/ui/jogar/mapa/mapa.css";
// Sistema de ruído
// Água = x < 0.3 (~)
// Areia = x < 0.5 (.)
// Grama = x < 0.7 (,)
// Floresta = x < 0.9 (^)
// Montanha = else (M)

export default function Mapa({ tamx, tamy, seed, escala }) {
  const linhas = useMemo(() => {
    const ruido = new Noise(seed);
    const resultado = [];
    for (let y = 0; y < tamy; y++) {
      let linha = "";
      for (let x = 0; x < tamx; x++) {
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
  }, [tamx, tamy, seed, escala]);

  const corTerreno = (char) => {
    switch (char) {
      case "~":
        return "blue"; // água
      case ".":
        return "goldenrod"; // areia
      case ",":
        return "green"; // grama
      case "^":
        return "darkgreen"; // floresta
      case "M":
        return "gray"; // montanha
      default:
        return "black";
    }
  };

  return (
    <div style={{ fontFamily: "monospace", lineHeight: 1 }} className="z-10">
      {linhas.map((linha, y) => (
        <div key={y}>
          {linha.split("").map((char, x) => (
            <span key={x} style={{ color: corTerreno(char) }}>
              {char}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
