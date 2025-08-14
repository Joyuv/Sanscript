import Link from "next/link";
import "@/app/ui/jogar/navbar.css";
import { Amarante } from "next/font/google";

const amarante = Amarante({
  subsets: ["latin"],
  weight: "400",
});

const links = [
  { href: "/jogar/mochila", name: "Mochila" },
  { href: "/jogar/mapa", name: "Mapa" },
];

export default function Links() {
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md link p-3 text-lg font-medium md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <p className={`${amarante.className} hidden md:block`}>
              {link.name}
            </p>
          </Link>
        );
      })}
    </>
  );
}
