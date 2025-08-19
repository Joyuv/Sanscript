import "@/app/ui/button.css";
import { Amarante } from "next/font/google";

const amarante = Amarante({
  subsets: ["latin"],
  weight: "400",
});

export default function ButtonFunc({
  children,
  func,
}: {
  children: React.ReactNode;
  func: () => void;
}) {
  return (
    <button
      onClick={func}
      className={`${amarante.className} flex h-[48px] grow items-center justify-center gap-2 rounded-md link p-3 text-lg font-medium md:flex-none md:justify-start md:p-2 md:px-3`}
    >
      <h1>{children}</h1>
    </button>
  );
}
