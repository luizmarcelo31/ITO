import { useEffect, useState } from "react";

const links = [
  { href: "#destinos", label: "Destinos" },
  { href: "#ofertas", label: "Serviços" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex h-20 items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-current/20 bg-primary/10">
              <span className={`font-display font-bold text-base ${scrolled ? "text-primary" : "text-white"}`}>I</span>
            </div>
            <div className="leading-tight">
              <div className={`font-display font-semibold text-base tracking-tight ${scrolled ? "text-foreground" : "text-white"}`}>
                Ito Receptivos
              </div>
              <div className={`text-[10px] uppercase tracking-[0.2em] ${scrolled ? "text-muted-foreground" : "text-white/70"}`}>
                Caruaru · est. 2012
              </div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-[13px] font-medium tracking-wide transition-colors hover:opacity-100 ${
                  scrolled ? "text-foreground/80 hover:text-primary" : "text-white/85 hover:text-white"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <a
              href="#contato"
              className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-[13px] font-medium transition-all ${
                scrolled
                  ? "border-foreground/15 text-foreground hover:bg-foreground hover:text-background"
                  : "border-white/30 text-white hover:bg-white hover:text-foreground"
              }`}
            >
              Reservar viagem
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className={`md:hidden p-2 -mr-2 ${scrolled ? "text-foreground" : "text-white"}`}
            aria-label="Menu"
          >
            <span className="block w-6 h-px bg-current mb-1.5" />
            <span className="block w-6 h-px bg-current mb-1.5" />
            <span className={`block h-px bg-current transition-all ${open ? "w-6" : "w-4"}`} />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border animate-[fade-in_0.2s_ease-out]">
          <div className="px-6 py-6 space-y-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 border-b border-border/60 text-foreground font-medium"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium"
            >
              Reservar viagem →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
