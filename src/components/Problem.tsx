const pains = [
  {
    n: "01",
    title: "Transporte que atrasa",
    text: "Você organiza tudo com antecedência e o ônibus chega tarde — quando chega.",
  },
  {
    n: "02",
    title: "Promessas não cumpridas",
    text: "Hospedagem diferente do prometido, passeios cancelados, acúmulo de imprevistos.",
  },
  {
    n: "03",
    title: "Suporte ausente",
    text: "Algo acontece em viagem e ninguém responde. Você fica sozinho, longe de casa.",
  },
];

export function Problem() {
  return (
    <section className="relative py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-end">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-primary" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-primary font-medium">
                O que ninguém te conta
              </span>
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground text-balance leading-[1.05]">
              A maioria das viagens falha em três pontos previsíveis.
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              Conversamos com centenas de viajantes do Agreste e do Sertão antes de estruturar nossa operação.
              Esses são os problemas que mais ouvimos — e exatamente o que <span className="text-foreground">nós resolvemos</span>.
            </p>
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border border-y border-border">
          {pains.map((p) => (
            <div key={p.title} className="p-8 md:p-10">
              <div className="font-display text-sm text-primary tracking-widest mb-6">{p.n}</div>
              <h3 className="font-display font-bold text-2xl text-foreground leading-tight">{p.title}</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed font-light">{p.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-2xl">
          <p className="font-display font-semibold text-2xl md:text-3xl text-foreground leading-snug text-balance">
            Somos <span className="text-primary">agência e transportadora</span>.
            Cuidamos da sua viagem do início ao fim — sem terceirizar a sua tranquilidade.
          </p>
        </div>
      </div>
    </section>
  );
}
