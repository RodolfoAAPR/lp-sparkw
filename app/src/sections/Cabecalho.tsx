import { base } from "@/lib/base";

export default function Cabecalho() {
  return (
    <header className="sw-cabecalho">
      <div className="sw-concha flex h-16 items-center justify-between gap-6">
        <a href="#topo" aria-label="Sparkw, voltar ao topo">
          <img src={`${base}assets/logo.svg`} alt="sparkw" width="120" height="32" style={{ height: 28, width: "auto" }} />
        </a>
        <nav className="sw-nav" aria-label="Seções">
          <a href="#como-funciona">Como funciona</a>
          <a href="#duvidas">Dúvidas</a>
        </nav>
        <a href="#instalacao" className="sw-botao sw-botao-mini">
          Baixar
        </a>
      </div>
    </header>
  );
}
