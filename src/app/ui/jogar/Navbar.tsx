import Links from "@/app/ui/jogar/Links";
import "@/app/ui/jogar/navbar.css";
import ToggleMapa from "@/app/ui/jogar/toggleMapa";
import ButtonFunc from "@/app/ui/ButtonFunc";

export default function Navbar({ toggleMapa }: { toggleMapa: () => void }) {
  // ButtonFunc só de testes, deve ser retirado mais tarde
  return (
    <div className="flex flex-col navbar float-left h-screen w-36 gap-2">
      <Links />
      <ToggleMapa toggleMapa={toggleMapa} />
      <ButtonFunc func={() => alert("Opa")}>Alert</ButtonFunc>
    </div>
  );
}
