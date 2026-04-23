import { whatsappLink } from "@/lib/whatsapp";

export function FinalCTA() {
  return (
    <section id="contato" className="relative py-28 md:py-40 bg-foreground text-background overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
        backgroundSize: "32px 32px",
      }} />

      <div className="relative mx-auto max-w-5xl px-6 lg:px-10 text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="h-px w-10 bg-primary-glow" />
          <span className="text-[11px] uppercase tracking-[0.25em] text-primary-glow font-medium">
            Próximo passo
          </span>
          <span className="h-px w-10 bg-primary-glow" />
        </div>

        <h2 className="font-display font-extrabold text-5xl md:text-7xl lg:text-[5rem] text-balance leading-[0.98]">
          Sua próxima viagem
          <br />
          <span className="font-semibold text-primary">começa em uma conversa</span>.
        </h2>

        <p className="mt-8 text-lg text-background/70 max-w-xl mx-auto font-light leading-relaxed">
          Conte-nos para onde quer ir. Em poucos minutos um consultor humano te responde com as melhores opções.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href={whatsappLink("Olá Ito! Quero conversar com um consultor sobre minha próxima viagem.")}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-primary-glow text-foreground px-9 py-4 text-sm font-semibold tracking-wide hover:bg-white transition-colors"
          >
            Falar com um consultor
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="tel:+5581997112162"
            className="text-sm font-medium text-background/80 hover:text-background transition-colors"
          >
            <span className="border-b border-background/30 pb-0.5">ou ligue (81) 99711-2162</span>
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-px bg-background/10 max-w-2xl mx-auto border border-background/10 rounded-2xl overflow-hidden">
          {[
            { k: "<10min", l: "Tempo de resposta" },
            { k: "Humano", l: "Atendimento direto" },
            { k: "12 anos", l: "Operando" },
          ].map((s) => (
            <div key={s.l} className="bg-foreground/40 px-3 py-5">
              <div className="font-display text-base md:text-lg font-medium">{s.k}</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-background/55 mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
