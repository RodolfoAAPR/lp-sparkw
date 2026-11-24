import type { CSSProperties } from "react";

/* Título com palavras em máscara. Palavras a partir de emStart saem em <em>. */
export default function Palavras({
  palavras,
  emStart,
  atraso = "0s",
}: {
  palavras: string[];
  emStart?: number;
  atraso?: string;
}) {
  return (
    <>
      {palavras.map((p, i) => (
        <span key={i} className="sw-w" aria-hidden={false}>
          <span className="sw-wi" style={{ "--i": i, "--atraso": atraso } as CSSProperties}>
            {emStart !== undefined && i >= emStart ? <em>{p}</em> : p}
          </span>
          {i < palavras.length - 1 ? " " : ""}
        </span>
      ))}
    </>
  );
}
