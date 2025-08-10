import Image from "next/image";
import Botao from "@/app/components/Botao";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center justify-center">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <div className="flex flex-col justify-center items-center gap-2">
          <Botao link="/jogar">Jogar</Botao>
          <Botao>Configurações</Botao>
        </div>
      </main>
    </div>
  );
}
