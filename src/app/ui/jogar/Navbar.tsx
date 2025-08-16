import Links from "@/app/ui/jogar/Links";
import "@/app/ui/jogar/navbar.css";
import ToggleMapa from "@/app/ui/jogar/toggleMapa";

export default function Navbar({ toggleMapa }: { toggleMapa: () => void }) {
  return (
    <div className="flex flex-col navbar float-left h-screen w-36 gap-2">
      <Links />
      <ToggleMapa toggleMapa={toggleMapa} />
    </div>
  );
}
