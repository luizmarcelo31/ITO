const testimonials = [
  {
    name: "Ana Carolina",
    city: "Caruaru/PE",
    text: "Foi a melhor viagem que já fiz. Tudo organizado, ônibus pontual e um suporte que fez toda a diferença.",
  },
  {
    name: "Roberto Lima",
    city: "Garanhuns/PE",
    text: "Levei minha família a Porto de Galinhas. Atendimento impecável e nenhuma surpresa. Já planejamos a próxima.",
  },
  {
    name: "Patrícia Souza",
    city: "Recife/PE",
    text: "Contratei o fretamento da empresa. Transporte próprio, motorista atencioso e tudo no horário. Profissionalismo total.",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-gradient-warm">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-primary" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-primary font-medium">
              Histórias de quem viajou
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground text-balance leading-[1.05]">
            Quem viaja com a gente, <span className="text-primary">volta</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
          {testimonials.map((t) => (
            <figure key={t.name} className="bg-background p-8 md:p-10 flex flex-col justify-between min-h-[280px]">
              <blockquote>
                <p className="font-display text-lg md:text-xl text-foreground leading-snug text-balance">
                  &ldquo;{t.text}&rdquo;
                </p>
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-border">
                <div className="font-medium text-sm text-foreground">{t.name}</div>
                <div className="text-xs text-muted-foreground mt-0.5 uppercase tracking-wider">{t.city}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
