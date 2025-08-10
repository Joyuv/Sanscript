import Botao from "@/app/components/Botao";
import Likes from "@/app/components/Likes";

export default function page2() {
  return (
    <main className="justify-center items-center flex flex-col gap-1">
      <Botao link="/">index</Botao>
      <Likes />
    </main>
  );
}
