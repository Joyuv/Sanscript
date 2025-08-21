import clsx from "clsx";
import styles from "@/app/ui/Alertas.module.css";

export default function Alerta({
  children,
  tipo,
  titulo,
}: {
  children: React.ReactNode;
  tipo: string;
  titulo: string;
}) {
  return (
    <div
      className={clsx(
        "w-96 absolute z-10 right-6 top-6 text-black font-mono h-auto text-base border-2 rounded flex flex-col items-center",
        {
          "bg-yellow-200 border-yellow-500": tipo === "alerta",
          "bg-red-300 border-red-500": tipo === "erro",
        },
      )}
    >
      <div
        id="titulo"
        className="mt-1 h-10 text-2xl text-black font-bold text-center"
      >
        <span
          className={clsx({
            "text-red-500": tipo === "erro",
            "text-yellow-600": tipo === "alerta",
          })}
        >
          &#9888;
        </span>
        {titulo}
        <span
          className={clsx({
            "text-red-500": tipo === "erro",
            "text-yellow-600": tipo === "alerta",
          })}
        >
          &#9888;
        </span>
      </div>
      <div className={`${styles.corpo}`} id="corpo">
        {children}
      </div>
    </div>
  );
}
