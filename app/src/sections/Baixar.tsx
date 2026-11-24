export default function Baixar() {
  return (
    <section id="baixar" className="py-12 md:py-16">
      <div className="sw-concha">
        <p className="sw-mono" data-reveal style={{ color: "var(--sw-text-2)" }}>
          Capítulo 05 · Baixar
        </p>
        <h2 className="sw-display sw-titulo mt-6 max-w-[16ch] text-4xl md:text-6xl" data-reveal>
          Sua próxima conquista <em>já vale SPK.</em>
        </h2>
        <div className="mt-10 flex flex-wrap items-center gap-5" data-reveal>
          <a href="https://sparkw.app/baixar" className="sw-botao">
            Baixar para Windows
          </a>
          <p className="sw-mono" style={{ color: "var(--sw-text-2)" }}>
            Versão 1.0.0.47 · Windows · Grátis no teste
          </p>
        </div>
      </div>
    </section>
  );
}
