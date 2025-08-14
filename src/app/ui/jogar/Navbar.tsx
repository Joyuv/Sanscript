import Links from "@/app/ui/jogar/Links";
import "@/app/ui/jogar/navbar.css";

export default function Navbar() {
  return (
    <div className="flex flex-col navbar float-left h-screen w-36 gap-2">
      <Links />
    </div>
  );
}
