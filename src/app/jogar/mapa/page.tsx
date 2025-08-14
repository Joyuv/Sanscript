import Mapa from "@/app/ui/jogar/mapa/Noise";

export default function Page() {
  return (
    <div>
      <p>Página de mapa</p>
      <Mapa tamx={50} tamy={30} seed={2} escala={15} />
    </div>
  );
}
