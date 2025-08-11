import Image from "next/image";
import Button from "@/app/ui/Button";

export default function Home() {
  return (
    <main className="flex flex-col display-center items-center gap-3">
      <Button>Começar</Button>
      <Button>Configurações</Button>
      <Button>Carregar</Button>
    </main>
  );
}
