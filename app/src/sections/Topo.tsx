import { useEffect, type CSSProperties } from "react";
import Palavras from "@/components/Palavras";
import { base } from "@/lib/base";

const TITULO = ["Jogar", "agora", "pode", "ter", "um", "sentido", "a", "mais."];

export default function Topo() {
  // Camada de traço da abertura, montada do SVG oficial. Sem JS, o logo cheio aparece parado.
  useEffect(() => {
    let vivo = true;
    fetch(`${base}assets/logo.svg`)
      .then((r) => r.text())
      .then((txt) => {
        if (!vivo) return;
        const slot = document.getElementById("sw-marca-risco");
        if (!slot) return;
        const doc = new DOMParser().parseFromString(txt, "image/svg+xml");
        const original = doc.querySelector("svg");
        if (!original) return;
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("viewBox", original.getAttribute("viewBox") || "0 0 100 100");
        svg.setAttribute("aria-hidden", "true");
        original.querySelectorAll("path").forEach((p, i) => {
          const c = document.createElementNS("http://www.w3.org/2000/svg", "path");
          c.setAttribute("d", p.getAttribute("d") || "");
          c.setAttribute("fill", "none");
          c.setAttribute("stroke", i === 0 ? "#ff6909" : "#f2f2f2");
          c.setAttribute("stroke-width", "26");
          c.setAttribute("stroke-linecap", "round");
          c.setAttribute("stroke-linejoin", "round");
          c.setAttribute("pathLength", "1");
          c.style.setProperty("--i", String(i));
          svg.appendChild(c);
        });
        slot.appendChild(svg);
      })
      .catch(() => {});
    return () => {
      vivo = false;
    };
  }, []);

  return (
    <section id="topo" className="sw-topo sw-animar">
      <div className="sw-ambiente" aria-hidden="true" />
      <div className="sw-concha relative">
        <div className="sw-marca-palco">
          <img
            className="sw-marca-cheio"
            src={`${base}assets/logo.svg`}
            alt="sparkw"
            width="420"
            height="112"
            fetchPriority="high"
          />
          <div className="sw-marca-risco" id="sw-marca-risco" aria-hidden="true" />
        </div>
        <p className="sw-mono mt-10" data-reveal style={{ "--d": "2000ms" } as CSSProperties}>
          Teste fechado · Windows
        </p>
        <h1 className="sw-display sw-titulo sw-topo-titulo mt-6">
          <Palavras palavras={TITULO} emStart={5} atraso="2.05s" />
        </h1>
        <div data-reveal style={{ "--d": "3000ms" } as CSSProperties}>
          <p className="mt-8 max-w-[34ch] text-lg" style={{ color: "var(--sw-text-2)" }}>
            Você joga. Eu cuido do resto. Cada conquista vira SPK.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <a href="#baixar" className="sw-botao">
              Baixar para Windows
            </a>
            <p className="sw-mono" style={{ color: "var(--sw-text-2)" }}>
              Versão 1.0.0.47 · Grátis no teste
            </p>
          </div>
          <p className="sw-mono mt-10" style={{ color: "var(--sw-text-2)" }}>
            Xbox · PSN · Steam
          </p>
        </div>
      </div>
    </section>
  );
}
