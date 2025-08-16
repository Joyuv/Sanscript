import { Amarante } from "next/font/google";

const amarante = Amarante({
  subsets: ["latin"],
  weight: "400",
});

export default function ToggleMapa({ toggleMapa }: { toggleMapa: () => void }) {
  return (
    <button
      onClick={toggleMapa}
      className="hover:cursor-pointer flex h-[48px] grow items-center justify-center gap-2 rounded-md link p-3 text-lg font-medium md:flex-none md:justify-start md:p-2 md:px-3"
    >
      <p className={`${amarante.className} hidden md:block`}>Mapa</p>
    </button>
  );
}
