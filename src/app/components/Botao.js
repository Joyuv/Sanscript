export default function Botao({ link, children }) {
  return (
    <a href={link ? link : "/"}>
      <div
        id="botao"
        className="bg-blue-300 rounded inline p-1 text-3xl text-black cursor-pointer select-none"
      >
        {children}
      </div>
    </a>
  );
}
