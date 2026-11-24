import { Children, cloneElement, isValidElement, type CSSProperties, type ReactElement, type ReactNode } from "react";

/* Título com palavras em máscara. Os espaços ficam ENTRE as máscaras, como texto
   real (se ficarem dentro, somem e as palavras colam). <em> passa direto. */
export default function Palavras({
  children,
  atraso = "0s",
  inicio = 0,
}: {
  children: ReactNode;
  atraso?: string;
  inicio?: number;
}) {
  let n = inicio;
  const dividir = (node: ReactNode): ReactNode => {
    if (typeof node === "string") {
      return node.split(/(\s+)/).map((p, k) =>
        /^\s+$/.test(p) || p === "" ? (
          p
        ) : (
          <span key={`${n}-${k}`} className="sw-w">
            <span className="sw-wi" style={{ "--i": n++, "--atraso": atraso } as CSSProperties}>
              {p}
            </span>
          </span>
        )
      );
    }
    if (isValidElement(node)) {
      const el = node as ReactElement<{ children?: ReactNode }>;
      return cloneElement(el, {}, Children.map(el.props.children, dividir));
    }
    if (Array.isArray(node)) return node.map(dividir);
    return node;
  };
  return <>{Children.map(children, dividir)}</>;
}
