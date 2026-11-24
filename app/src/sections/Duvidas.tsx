const ITENS = [
  {
    p: "Vale para o meu console?",
    r: "Vale para Xbox, PSN e Steam. Se você joga em mais de um, tudo soma na mesma conta.",
  },
  { p: "Precisa pagar?", r: "Não. O teste fechado é grátis, sem cartão." },
  {
    p: "Preciso fazer algo no jogo?",
    r: "Não. Você joga como sempre e nem percebe. A contagem é automática.",
  },
  {
    p: "Como o SPK funciona?",
    r: "Cada conquista soma SPK na sua conta. As regras de resgate saem antes do fim do teste fechado.",
  },
  {
    p: "Por que o Windows acusa o instalador?",
    r: "Porque a Sparkw ainda é nova. O arquivo é o oficial, e o capítulo acima mostra cada tela.",
  },
];

export default function Duvidas() {
  return (
    <section id="duvidas" className="py-28 md:py-40">
      <div className="sw-concha">
        <p className="sw-mono" data-reveal style={{ color: "var(--sw-text-2)" }}>
          Capítulo 05 · Dúvidas
        </p>
        <div className="mt-10 max-w-[760px]">
          {ITENS.map((item) => (
            <details key={item.p} className="sw-duvida py-5" data-reveal>
              <summary className="sw-display text-lg md:text-xl">{item.p}</summary>
              <p className="mt-3 max-w-[60ch]" style={{ color: "var(--sw-text-2)" }}>
                {item.r}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
