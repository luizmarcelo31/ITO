import { useState } from "react";

const objections = [
  {
    q: "E se algo der errado durante a viagem?",
    a: "Nosso suporte fica disponível durante toda a viagem. Você fala diretamente conosco — não com central terceirizada.",
  },
  {
    q: "E se o transporte atrasar?",
    a: "A frota é nossa. Mantemos rigor nos horários e veículos de backup para qualquer imprevisto operacional.",
  },
  {
    q: "E se eu não gostar de algum passeio?",
    a: "Acompanhamos sua experiência em tempo real e ajustamos o que for possível. Sua satisfação é nossa métrica.",
  },
  {
    q: "Vocês atendem grupos e empresas?",
    a: "Sim. Operamos fretamentos, excursões corporativas e roteiros para instituições — com cotação personalizada.",
  },
];

export function Objections() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-primary" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-primary font-medium">
                Perguntas frequentes
              </span>
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground text-balance leading-[1.05]">
              Sem letra miúda. Sem pegadinhas.
            </h2>
            <p className="mt-6 text-muted-foreground font-light leading-relaxed">
              Respondemos diretamente as dúvidas mais frequentes — para você decidir com clareza.
            </p>
          </div>

          <div className="md:col-span-7">
            <ul className="border-t border-border">
              {objections.map((o, i) => (
                <li key={o.q} className="border-b border-border">
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                    aria-expanded={open === i}
                  >
                    <span className="font-display text-lg md:text-xl text-foreground font-medium group-hover:text-primary transition-colors">
                      {o.q}
                    </span>
                    <span
                      className={`shrink-0 h-8 w-8 rounded-full border border-border flex items-center justify-center transition-all ${
                        open === i ? "bg-foreground text-background border-foreground rotate-45" : "text-foreground/60"
                      }`}
                      aria-hidden="true"
                    >
                      <span className="text-lg leading-none">+</span>
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-500 ease-out ${
                      open === i ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-muted-foreground font-light leading-relaxed pr-12">{o.a}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
