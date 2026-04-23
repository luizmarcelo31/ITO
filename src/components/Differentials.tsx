const items = [
  {
    n: "01",
    title: "Transporte próprio",
    text: "Frota da casa. Sem terceiros, sem atrasos, sem surpresas em estrada.",
  },
  {
    n: "02",
    title: "Atendimento humano",
    text: "Você fala diretamente com quem cuida da sua viagem — nunca com um robô.",
  },
  {
    n: "03",
    title: "Suporte contínuo",
    text: "Acompanhamos antes, durante e depois — qualquer ajuste, falamos.",
  },
  {
    n: "04",
    title: "Mais de uma década",
    text: "Centenas de viagens realizadas pelo Nordeste desde 2012.",
  },
];

export function Differentials() {
  return (
    <section id="diferenciais" className="py-24 md:py-32 bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-primary-glow" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-primary-glow font-medium">
                Por que a Ito
              </span>
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-balance leading-[1.05]">
              A única empresa de Caruaru que <span className="text-primary">cuida de tudo</span> — do plano à estrada.
            </h2>
            <p className="mt-6 text-background/70 font-light leading-relaxed max-w-md">
              Quatro pilares que sustentam cada viagem que realizamos.
            </p>
          </div>

          <div className="md:col-span-7">
            <div className="grid sm:grid-cols-2 gap-px bg-background/10">
              {items.map((item) => (
                <div key={item.title} className="bg-foreground p-8">
                  <div className="font-display text-xs text-primary-glow tracking-widest mb-5">{item.n}</div>
                  <h3 className="font-display font-bold text-xl leading-tight">{item.title}</h3>
                  <p className="mt-3 text-sm text-background/70 leading-relaxed font-light">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
