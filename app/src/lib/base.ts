/* Base do site: "/" no dev, "/lp-sparkw/" no build do Pages. O Vite não reescreve
   texto dentro do JS, então todo caminho de asset no código usa este prefixo. */
export const base = import.meta.env.BASE_URL;
