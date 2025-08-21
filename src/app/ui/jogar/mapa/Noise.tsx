import { useState, useRef, useEffect } from "react";
import "@/app/ui/jogar/mapa/mapa.css";

// Sistema de ruído
// Água = x < 0.3 (~)
// Areia = x < 0.5 (.)
// Grama = x < 0.7 (,)
// Floresta = x < 0.9 (^)
// Montanha = else (M)

export default function Mapa({
  tamx,
  tamy,
  seed,
  escala,
}: {
  tamx: number;
  tamy: number;
  seed: number;
  escala: number;
}) {
  const [mapa, setMapa] = useState<string[]>([]);

  async function getMapa() {
    const promise = await fetch("/api/mapa");
    const data = await promise.json();

    if (data.mapa === null) {
      await fetch("/api/mapa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          info: { tamx, tamy, seed, escala },
        }),
      });
      const promise = await fetch("/api/mapa");
      const data = await promise.json();

      setMapa(data.mapa);
    } else {
      setMapa(data.mapa);
    }
  }

  useEffect(() => {
    if (mapa.length !== 0) {
      null;
    } else {
      getMapa();
    }
  });

  const corTerreno = (char: string) => {
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

  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState<{ x: number; y: number } | null>(
    null,
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragStart({ x: e.clientX - pos.x, y: e.clientY - pos.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragStart || !containerRef.current || !contentRef.current) return;

    const containerWidth = containerRef.current.offsetWidth;
    const containerHeight = containerRef.current.offsetHeight;
    const contentWidth = contentRef.current.scrollWidth;
    const contentHeight = contentRef.current.scrollHeight;

    let newX = e.clientX - dragStart.x;
    let newY = e.clientY - dragStart.y;

    // Limite horizontal
    const minX = Math.min(0, containerWidth - contentWidth);
    const maxX = 0;
    if (newX > maxX) newX = maxX;
    if (newX < minX) newX = minX;

    // Limite vertical
    const minY = Math.min(0, containerHeight - contentHeight);
    const maxY = 0;
    if (newY > maxY) newY = maxY;
    if (newY < minY) newY = minY;

    setPos({ x: newX, y: newY });
  };

  const handleMouseUp = () => {
    setDragStart(null);
  };

  return (
    <div
      className="border-2 border-white"
      ref={containerRef}
      style={{
        width: "200px",
        height: "200px",
        overflow: "hidden",
        border: "1px solid #ccc",
        cursor: dragStart ? "grabbing" : "grab",
        fontFamily: "monospace",
        lineHeight: 1,
        position: "absolute",
        backgroundColor: "black",
        resize: "both",
        maxHeight: 600,
        maxWidth: 600,
        minWidth: 200,
        minHeight: 200,
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div
        ref={contentRef}
        style={{
          transform: `translate(${pos.x}px, ${pos.y}px)`,
          userSelect: "none",
          fontFamily: "monospace",
          whiteSpace: "pre",
        }}
        className="mapa"
      >
        {mapa &&
          mapa.map((linha, y) => (
            <div key={y}>
              {linha.split("").map((char, x) => (
                <span key={x} style={{ color: corTerreno(char) }}>
                  {char}
                </span>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
}
