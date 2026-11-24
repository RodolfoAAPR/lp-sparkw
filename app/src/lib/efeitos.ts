import { useEffect, useSyncExternalStore, type RefObject } from "react";

/* Liga as entradas: [data-reveal] e .sw-animar ganham .is-in ao chegar na tela, uma vez. */
export function useEfeitos() {
  useEffect(() => {
    const alvos = Array.from(document.querySelectorAll("[data-reveal], .sw-animar"));
    const io = new IntersectionObserver(
      (entradas) =>
        entradas.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.2 }
    );
    alvos.forEach((a) => io.observe(a));
    return () => io.disconnect();
  }, []);
}

/* Escreve o progresso de rolagem do bloco em --k (0 a 1). Só mede perto da tela,
   só com mouse, sem setState. No toque e sem movimento o CSS mostra o estado final. */
export function useProgresso(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    let perto = false;
    let raf = 0;
    const mede = () => {
      raf = 0;
      if (!perto) return;
      const r = el.getBoundingClientRect();
      const v = Math.min(1, Math.max(0, (window.innerHeight * 0.75 - r.top) / r.height));
      el.style.setProperty("--k", v.toFixed(3));
      el.querySelectorAll("[data-pos]").forEach((n) => {
        n.classList.toggle("on", v >= Number((n as HTMLElement).dataset.pos || 0));
      });
    };
    const io = new IntersectionObserver(([e]) => {
      perto = e.isIntersecting;
      if (perto) mede();
    });
    io.observe(el);
    const rola = () => {
      if (perto && !raf) raf = requestAnimationFrame(mede);
    };
    window.addEventListener("scroll", rola, { passive: true });
    window.addEventListener("resize", rola);
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", rola);
      window.removeEventListener("resize", rola);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [ref]);
}

/* Acende as palavras do manifesto (span[data-i]) conforme o progresso. */
export function useAcendePalavras(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const spans = Array.from(el.querySelectorAll("span[data-i]"));
    let perto = false;
    let raf = 0;
    const mede = () => {
      raf = 0;
      if (!perto) return;
      const r = el.getBoundingClientRect();
      const k = Math.min(1, Math.max(0, (window.innerHeight * 0.8 - r.top) / (r.height * 0.9)));
      spans.forEach((s, i) => {
        s.classList.toggle("on", k >= (i + 1) / (spans.length + 1));
      });
    };
    const io = new IntersectionObserver(([e]) => {
      perto = e.isIntersecting;
      if (perto) mede();
    });
    io.observe(el);
    const rola = () => {
      if (perto && !raf) raf = requestAnimationFrame(mede);
    };
    window.addEventListener("scroll", rola, { passive: true });
    window.addEventListener("resize", rola);
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", rola);
      window.removeEventListener("resize", rola);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [ref]);
}

/* true com mouse ou trackpad. No servidor sai true (versão com mouse); no toque troca ao hidratar. */
const mq = typeof window === "undefined" ? null : matchMedia("(hover: hover) and (pointer: fine)");
function assinar(avisar: () => void) {
  mq?.addEventListener("change", avisar);
  return () => mq?.removeEventListener("change", avisar);
}
export function useTemMouse() {
  return useSyncExternalStore(assinar, () => !!mq?.matches, () => true);
}
