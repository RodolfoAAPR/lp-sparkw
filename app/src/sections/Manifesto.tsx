import { useRef } from "react";
import { useAcendePalavras } from "@/lib/efeitos";

const FRASE = ["Sua", "platina", "vale", "mais", "do", "que", "moral."];

export default function Manifesto() {
  const ref = useRef<HTMLElement | null>(null);
  useAcendePalavras(ref);
  return (
    <section id="manifesto" className="py-12 md:py-16">
      <div className="sw-concha">
        <p className="sw-mono" data-reveal style={{ color: "var(--sw-text-2)" }}>
          Capítulo 01 · Manifesto
        </p>
        <p
          ref={(el: HTMLParagraphElement | null) => {
            ref.current = el;
          }}
          className="sw-display sw-manifesto mt-8 max-w-[20ch]"
        >
          {FRASE.map((p, i) => (
            <span
              key={i}
              data-i={i}
              style={i === 2 || i === 3 ? { color: "var(--sw-accent)" } : undefined}
            >
              {p}
              {i < FRASE.length - 1 ? " " : ""}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
