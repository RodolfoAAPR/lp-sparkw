import { useEffect } from "react";
import "lenis/dist/lenis.css";
import { iniciarRolagemSuave } from "@/lib/rolagemSuave";
import { useEfeitos, useTemMouse } from "@/lib/efeitos";
import Cabecalho from "@/sections/Cabecalho";
import Topo from "@/sections/Topo";
import Manifesto from "@/sections/Manifesto";
import ComoFunciona from "@/sections/ComoFunciona";
import Instalacao from "@/sections/Instalacao";
import Duvidas from "@/sections/Duvidas";
import Baixar from "@/sections/Baixar";
import Rodape from "@/sections/Rodape";
import Fio from "@/sections/Fio";

export default function App() {
  useEffect(() => iniciarRolagemSuave(), []);
  useEfeitos();
  const temMouse = useTemMouse();

  return (
    <>
      <Cabecalho />
      <main className="sw-main">
        {temMouse && <Fio />}
        <Topo />
        <Manifesto />
        <ComoFunciona />
        <Instalacao />
        <Duvidas />
        <Baixar />
      </main>
      <Rodape />
    </>
  );
}
