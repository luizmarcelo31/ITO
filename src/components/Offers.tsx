const offers = [
  {
    n: "I",
    title: "Pacotes Turísticos",
    desc: "Roteiros completos pelo Nordeste com hospedagem, passeios e transporte. Saídas mensais de Caruaru.",
    bullets: ["Hospedagem selecionada", "Passeios garantidos", "Saídas regulares"],
  },
  {
    n: "II",
    title: "Fretamento & Transporte",
    desc: "Frota própria para empresas, instituições e grupos. Cotação personalizada com motoristas experientes.",
    bullets: ["Frota moderna e segura", "Motoristas experientes", "Cobertura em todo Nordeste"],
    feature: true,
  },
  {
    n: "III",
    title: "Viagens Personalizadas",
    desc: "Roteiros desenhados sob medida — para celebrações, lua-de-mel ou simplesmente um pedido especial.",
    bullets: ["100% sob medida", "Atendimento dedicado", "Suporte do início ao fim"],
  },
];

export function Offers() {
  return (
    <section id="ofertas" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-primary" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-primary font-medium">
              O que oferecemos
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground text-balance leading-[1.05]">
            Três frentes. Uma única promessa de excelência.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 border-t border-border">
          {offers.map((o) => (
            <div
              key={o.title}
              className={`relative p-8 md:p-10 border-b md:border-b-0 md:border-r last:md:border-r-0 border-border ${
                o.feature ? "bg-foreground text-background md:-my-px md:py-12" : ""
              }`}
            >
              <div className={`font-display text-sm tracking-widest mb-8 ${o.feature ? "text-primary-glow" : "text-primary"}`}>
                {o.n}
              </div>
              <h3 className="font-display font-bold text-2xl md:text-[1.75rem] leading-tight">
                {o.title}
              </h3>
              <p className={`mt-4 leading-relaxed font-light ${o.feature ? "text-background/75" : "text-muted-foreground"}`}>
                {o.desc}
              </p>
              <ul className={`mt-8 space-y-3 text-sm font-light ${o.feature ? "text-background/85" : "text-foreground/85"}`}>
                {o.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className={`mt-2 h-px w-4 shrink-0 ${o.feature ? "bg-primary-glow" : "bg-primary"}`} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="#contato"
            className="group inline-flex items-center gap-3 text-sm font-medium text-foreground"
          >
            <span className="border-b border-foreground/30 pb-1 group-hover:border-primary group-hover:text-primary transition-colors">
              Conversar com um consultor
            </span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
