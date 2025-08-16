"use client";

import Navbar from "@/app/ui/jogar/Navbar";
import Mapa from "@/app/ui/jogar/mapa/Noise";
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mapaAtivo, toggleMapaAtivo] = useState(false);

  return (
    <div className="flex flex-row w-screen gap-2">
      <Navbar toggleMapa={() => toggleMapaAtivo(!mapaAtivo)} />
      <div className="m-2">
        {mapaAtivo && <Mapa tamx={100} tamy={60} seed={2} escala={18} />}
        <div className="">{children}</div>
      </div>
    </div>
  );
}
