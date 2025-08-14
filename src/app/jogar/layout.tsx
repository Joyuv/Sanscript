import Navbar from "@/app/ui/jogar/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row w-screen gap-2">
      <Navbar />
      <div className="m-2">{children}</div>
    </div>
  );
}
