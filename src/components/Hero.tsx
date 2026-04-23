import { whatsappLink } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-end overflow-hidden bg-foreground">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/hero-beach.jpg"
          alt="Litoral nordestino — destino Ito Receptivos"
          width={1920}
          height={1280}
          className="w-full h-full object-cover opacity-90"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/60 to-foreground/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-transparent to-transparent" />
      </div>

      <div className="relative w-full">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 pb-16 md:pb-24 pt-32">
          <div className="max-w-3xl animate-[fade-up_0.9s_cubic-bezier(0.16,1,0.3,1)]">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-10 bg-primary-glow" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-primary-glow font-medium">
                Receptivo Nordeste · desde 2012
              </span>
            </div>

            <h1 className="font-display font-extrabold text-white text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tight text-balance">
              Viagens pensadas
              <br />
              <span className="font-semibold text-primary">com cuidado</span>
              <span className="text-white">,</span>
              <br />
              entregues com excelência.
            </h1>

            <p className="mt-8 text-base md:text-lg text-white/75 max-w-xl leading-relaxed font-light">
              Pacotes completos pelo Nordeste com transporte próprio, suporte humano e mais de uma década de história.
              <span className="block mt-2 text-white/55">Caruaru · Pernambuco</span>
            </p>

            {/* CTA — single, refined */}
            <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-5">
              <a
                href={whatsappLink("Olá Ito! Vim pelo site e gostaria de planejar uma viagem.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-primary-glow text-foreground px-8 py-4 text-sm font-semibold tracking-wide shadow-glow hover:bg-white transition-colors"
              >
                Planejar minha viagem
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#destinos"
                className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                <span className="border-b border-white/30 pb-0.5">Explorar destinos</span>
              </a>
            </div>
          </div>

          {/* Bottom strip — proof points, editorial layout */}
          <div className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md">
            {[
              { k: "12+", l: "Anos de operação" },
              { k: "500+", l: "Viagens realizadas" },
              { k: "100%", l: "Frota própria" },
              { k: "4.9★", l: "Satisfação média" },
            ].map((s) => (
              <div key={s.l} className="bg-foreground/40 px-5 py-5 md:py-6">
                <div className="font-display text-2xl md:text-3xl text-white font-medium">{s.k}</div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-white/60 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
