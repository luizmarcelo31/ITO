import { WHATSAPP_NUMBER } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-primary/10">
                <span className="font-display font-bold text-base text-primary">I</span>
              </div>
              <div className="leading-tight">
                <div className="font-display font-bold text-base tracking-tight">Ito Receptivos</div>
                <div className="font-sans text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">J & P Turismo LTDA</div>
              </div>
            </div>
            <p className="mt-6 text-foreground/80 max-w-md font-sans font-semibold leading-relaxed text-[15px]">
              Agência de turismo com transporte próprio, sediada em Caruaru/PE.
              Realizando viagens pelo Nordeste com excelência desde 2012.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-display text-[11px] uppercase tracking-[0.25em] text-foreground font-bold mb-5">Contato</h4>
            <ul className="space-y-3 text-sm text-foreground/80 font-sans font-semibold">
              <li>Caruaru — Pernambuco</li>
              <li>
                <a href={`tel:+${WHATSAPP_NUMBER}`} className="hover:text-primary transition-colors font-bold">
                  (81) 99711-2162
                </a>
              </li>
              <li className="text-xs font-semibold">CNPJ — J & P Turismo LTDA</li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-display text-[11px] uppercase tracking-[0.25em] text-foreground font-bold mb-5">Navegação</h4>
            <ul className="grid grid-cols-2 gap-3 text-sm text-foreground/80 font-sans font-semibold">
              <li><a href="#destinos" className="hover:text-primary transition-colors">Destinos</a></li>
              <li><a href="#ofertas" className="hover:text-primary transition-colors">Serviços</a></li>
              <li><a href="#diferenciais" className="hover:text-primary transition-colors">Diferenciais</a></li>
              <li><a href="#contato" className="hover:text-primary transition-colors">Contato</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3 font-display text-[11px] uppercase tracking-[0.18em] text-foreground/70 font-bold">
          <p>© {new Date().getFullYear()} Ito Receptivos · Todos os direitos reservados</p>
          <p>Caruaru/PE · Est. 2012</p>
        </div>
      </div>
    </footer>
  );
}
