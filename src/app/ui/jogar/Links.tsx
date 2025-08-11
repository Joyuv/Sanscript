import Link from "next/link";

const links = [
  { href="mochila", name="Mochila"}
  { href="mapa", name="Mapa"}
];

export default function Links() {
  return(
    <>
      {link.map((link) => {
        return(
          <Link
            key={link.name}
            href={link.href}
            className=""
          >
          <p className="hidden md:block">{link.name}</p>
          </Link>
        )
      })}
    </>
  )
}
