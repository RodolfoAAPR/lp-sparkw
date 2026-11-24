import { useRef, useState, type CSSProperties } from "react";
import { Trophy } from "lucide-react";
import { useProgresso } from "@/lib/efeitos";

const PASSOS = [
  {
    t: "Baixe e crie sua conta",
    d: "Instale no Windows e entre com seu email. O código chega na hora.",
  },
  { t: "Jogue como sempre", d: "Nada muda no seu jogo. Você nem percebe." },
  { t: "Cada conquista vira SPK", d: "Platinas e conquistas viram SPK na sua conta." },
];

export default function ComoFunciona() {
  const trilho = useRef<HTMLElement | null>(null);
  useProgresso(trilho);
  const [toques, setToques] = useState(0);

  return (
    <section id="como-funciona" className="py-16 md:py-24">
      <div className="sw-concha">
        <p className="sw-mono" data-reveal style={{ color: "var(--sw-text-2)" }}>
          Capítulo 02 · Como funciona
        </p>
        <h2 className="sw-display sw-titulo mt-6 text-4xl md:text-6xl" data-reveal>
          Começa em <em>minutos.</em>
        </h2>
        <div
          className="sw-trilho mt-14 flex flex-col gap-12"
          ref={(el: HTMLDivElement | null) => {
            trilho.current = el;
          }}
        >
          <div className="sw-trilho-fogo" aria-hidden="true" />
          {PASSOS.map((p, i) => (
            <div key={p.t} className="flex items-start gap-6 pl-1" data-reveal>
              <span
                className="sw-no mt-1"
                data-pos={((i + 1) / (PASSOS.length + 1)).toFixed(2)}
                style={{ "--pos": ((i + 1) / (PASSOS.length + 1)).toFixed(2) } as CSSProperties}
                aria-hidden="true"
              />
              <div>
                <h3 className="sw-display text-xl md:text-2xl">{p.t}</h3>
                <p className="mt-2 max-w-[40ch]" style={{ color: "var(--sw-text-2)" }}>
                  {p.d}
                </p>
              </div>
            </div>
          ))}
        </div>
        <button
          key={toques}
          type="button"
          className={`sw-trofeu mt-14 flex items-center gap-5 p-6 md:p-8${toques ? " tocou" : ""}`}
          onClick={() => setToques((t) => t + 1)}
          aria-live="polite"
          data-reveal
        >
          <span className="sw-trofeu-pop" style={{ color: "var(--sw-prestigio)" }}>
            <Trophy size={40} strokeWidth={1.75} />
          </span>
          <span>
            <span className="sw-display block text-lg md:text-xl">Toque no troféu.</span>
            <span className="sw-mono mt-1 block" style={{ color: "var(--sw-text-2)" }}>
              Demonstração · <span className="sw-mais-spk">+ SPK</span>
            </span>
          </span>
        </button>
      </div>
    </section>
  );
}
