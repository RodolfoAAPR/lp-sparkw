export default function Rodape() {
  return (
    <footer className="border-t py-10" style={{ borderColor: "var(--sw-line)" }}>
      <div className="sw-concha flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="sw-mono" style={{ color: "var(--sw-text-2)" }}>
          © 2026 Sparkw · Teste fechado
        </p>
        <p className="sw-mono" style={{ color: "var(--sw-text-2)" }}>
          Xbox · PSN · Steam
        </p>
        <a href="#baixar" className="sw-mono" style={{ color: "var(--sw-text-1)" }}>
          Baixar
        </a>
      </div>
    </footer>
  );
}
