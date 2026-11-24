const NOMES = ["Xbox", "PSN", "Steam"];

export default function Plataformas() {
  return (
    <section id="plataformas" className="py-12 md:py-16">
      <div className="sw-concha">
        <p className="sw-mono" data-reveal style={{ color: "var(--sw-text-2)" }}>
          Capítulo 03 · Plataformas
        </p>
        <h2 className="sw-display sw-titulo mt-6 max-w-[16ch] text-4xl md:text-6xl" data-reveal>
          Suas plataformas, <em>numa conta só.</em>
        </h2>
        <div className="mt-14">
          {NOMES.map((n) => (
            <p
              key={n}
              className="sw-display border-t py-6 text-3xl md:text-5xl"
              style={{ borderColor: "var(--sw-line)" }}
              data-reveal
            >
              {n}
            </p>
          ))}
          <p className="border-t py-6 text-lg" style={{ borderColor: "var(--sw-line)", color: "var(--sw-text-2)" }} data-reveal>
            Vale para as três. Uma conta só.
          </p>
        </div>
      </div>
    </section>
  );
}
