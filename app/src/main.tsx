import { createRoot, hydrateRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

document.documentElement.classList.add("js");
const teste = new URLSearchParams(location.search).get("teste");
teste?.split(",").forEach((p) => document.documentElement.classList.add(`t-${p.trim()}`));

const root = document.getElementById("root")!;
// no site publicado o HTML já vem pronto (pré-renderizado no build): o React só assume a página
if (root.hasChildNodes()) hydrateRoot(root, <App />);
else createRoot(root).render(<App />);
