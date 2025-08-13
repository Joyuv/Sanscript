import Image from "next/image";
import Button from "@/app/ui/Button";

export default function Home() {
  return (
    <main className="flex flex-col display-center items-center gap-3">
      <Button href="jogar">Começar</Button>
      <Button href="configuracao">Configurações</Button>
      <Button href="carregar">Carregar</Button>
    </main>
  );
}
