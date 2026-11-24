import { useRef, type CSSProperties } from "react";
import { Trophy } from "lucide-react";
import { useProgresso } from "@/lib/efeitos";
import { base } from "@/lib/base";

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
  const cartao = useRef<HTMLButtonElement | null>(null);
  // Recomeça o pop sem remontar: remontar perdia o .is-in e o cartão sumia.
  const tocar = () => {
    const el = cartao.current;
    if (!el) return;
    el.classList.remove("tocou");
    void el.offsetWidth;
    el.classList.add("tocou");
  };
  // Inclinação 3D que segue o mouse, só no computador com movimento liberado.
  const inclinar = (e: React.MouseEvent<HTMLButtonElement>) => {
    const el = cartao.current;
    if (!el) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${(-y * 6).toFixed(2)}deg) rotateY(${(x * 6).toFixed(2)}deg)`;
  };
  const endireitar = () => {
    cartao.current?.style.removeProperty("transform");
  };

  return (
    <section id="como-funciona" className="py-12 md:py-16">
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
            <div key={p.t} className="flex items-start gap-6" data-reveal>
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
          ref={cartao}
          type="button"
          className="sw-trofeu mt-14"
          onClick={tocar}
          onMouseMove={inclinar}
          onMouseLeave={endireitar}
          aria-live="polite"
          aria-label="Demonstração: troféu Just Like Paradise, do GTA VI. Toque para ver o pop."
          data-reveal
        >
          <img
            className="sw-trofeu-fundo"
            src={`${base}assets/gta6-arte.jpg`}
            alt="Arte oficial do GTA VI"
            loading="lazy"
            decoding="async"
            width="1200"
            height="630"
          />
          <span className="sw-trofeu-velo" aria-hidden="true" />
          <span className="sw-trofeu-brilho" aria-hidden="true" />
          <span className="sw-trofeu-topo">
            <span className="sw-trofeu-chip" aria-hidden="true">
              <Trophy size={18} strokeWidth={2} />
            </span>
            <span className="sw-mono sw-demo" style={{ color: "var(--sw-text-1)" }}>
              <i aria-hidden="true" />
              Demonstração
            </span>
          </span>
          <span className="sw-trofeu-selo">
            <span className="sw-trofeu-pop">
              <Trophy size={36} strokeWidth={1.5} />
            </span>
            <span className="sw-trofeu-anel" aria-hidden="true" />
          </span>
          <span className="sw-trofeu-corpo">
            <span className="sw-mono block" style={{ color: "var(--sw-text-2)" }}>
              GTA VI · Bronze
            </span>
            <span className="sw-display mt-2 block text-2xl">Just Like Paradise</span>
            <span className="sw-mono mt-2 block" style={{ color: "var(--sw-text-2)" }}>
              Toque no troféu · <span className="sw-mais-spk">+ SPK</span>
            </span>
            <span className="sw-mono sw-credito mt-3 block" style={{ color: "var(--sw-text-2)" }}>
              Arte oficial · Rockstar Games
            </span>
          </span>
        </button>
      </div>
    </section>
  );
}
