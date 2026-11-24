const PASSOS = [
  "Se o navegador perguntar, escolha Manter.",
  "Na tela O Windows protegeu o seu PC, clique em Mais informações e depois em Executar assim mesmo.",
  "Instale e crie a sua conta com o email. O código chega na hora.",
];

export default function Instalacao() {
  return (
    <section id="instalacao" className="py-12 md:py-16">
      <div className="sw-concha">
        <p className="sw-mono" data-reveal style={{ color: "var(--sw-text-2)" }}>
          Capítulo 04 · Instalação
        </p>
        <h2 className="sw-display sw-titulo mt-6 max-w-[16ch] text-4xl md:text-6xl" data-reveal>
          O Windows vai avisar. <em>Pode seguir.</em>
        </h2>
        <ol className="mt-14 flex list-none flex-col gap-8 p-0">
          {PASSOS.map((p, i) => (
            <li key={p} className="flex items-start gap-6" data-reveal>
              <span className="sw-mono mt-1" style={{ color: "var(--sw-accent)" }} aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="max-w-[46ch] text-lg">{p}</p>
            </li>
          ))}
        </ol>
        <p className="mt-10" style={{ color: "var(--sw-text-2)" }} data-reveal>
          O aviso aparece porque eu ainda sou novo por aqui.
        </p>
      </div>
    </section>
  );
}
