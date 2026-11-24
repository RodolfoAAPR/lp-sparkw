import { useRef } from "react";
import { useProgresso } from "@/lib/efeitos";

/* Fio de faísca: serpenteia pela página e se desenha com a rolagem.
   Só montado com mouse; no toque e sem movimento ele não existe. */
export default function Fio() {
  const ref = useRef<HTMLElement | null>(null);
  useProgresso(ref);
  return (
    <div
      className="sw-fio"
      aria-hidden="true"
      ref={(el: HTMLDivElement | null) => {
        ref.current = el;
      }}
    >
      <svg viewBox="0 0 100 1000" preserveAspectRatio="none">
        <path
          d="M 88,0 C 30,90 92,170 55,260 C 22,344 86,430 48,520 C 14,604 82,700 52,800 C 32,872 60,940 44,1000"
          pathLength={1}
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}
