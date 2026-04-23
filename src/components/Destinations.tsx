import porto from "@/assets/porto-de-galinhas.jpg";
import carneiros from "@/assets/praia-dos-carneiros.jpg";
import maragogi from "@/assets/maragogi.jpg";
import tamandare from "@/assets/tamandare.jpg";
import aleixo from "@/assets/santo-aleixo.jpg";
import cabo from "@/assets/cabo-santo-agostinho.jpg";
import { whatsappLink } from "@/lib/whatsapp";

type Destination = {
  name: string;
  region: string;
  description: string;
  image: string;
};

const destinations: Destination[] = [
  { name: "Porto de Galinhas", region: "Pernambuco", description: "Piscinas naturais e jangadas ao amanhecer.", image: porto },
  { name: "Praia dos Carneiros", region: "Pernambuco", description: "Coqueiral, capela e mar calmo — bate-volta com conforto.", image: carneiros },
  { name: "Maragogi", region: "Alagoas", description: "O Caribe brasileiro — galés a 6 km da costa.", image: maragogi },
  { name: "Tamandaré", region: "Pernambuco", description: "Vilarejo tranquilo, ideal para descanso real.", image: tamandare },
  { name: "Ilha de Santo Aleixo", region: "Pernambuco", description: "Ilha privativa, travessia em escuna.", image: aleixo },
  { name: "Cabo de Santo Agostinho", region: "Pernambuco", description: "Falésias, história e praias selvagens.", image: cabo },
];

export function Destinations() {
  return (
    <section id="destinos" className="relative py-24 md:py-32 bg-gradient-warm">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-primary" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-primary font-medium">
                Destinos selecionados
              </span>
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground text-balance leading-[1.05]">
              Roteiros pelo Nordeste, <span className="text-primary">curados pessoalmente</span>.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm font-light leading-relaxed">
            Cada destino é avaliado, contratado e operado por nós. Saídas regulares de Caruaru e região.
          </p>
        </div>

        <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((d, i) => (
            <a
              key={d.name}
              href={whatsappLink(`Olá Ito! Quero saber mais sobre ${d.name}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
              style={{ animation: `fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${i * 60}ms backwards` }}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-muted">
                <img
                  src={d.image}
                  alt={`${d.name} — ${d.region}`}
                  loading="lazy"
                  decoding="async"
                  width={1024}
                  height={1280}
                  className="h-full w-full object-cover transition-opacity duration-700 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-overlay" />
                <div className="absolute top-5 left-5 text-[10px] uppercase tracking-[0.22em] text-white/85 font-medium">
                  {d.region}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-2xl text-white font-bold leading-tight tracking-tight">{d.name}</h3>
                </div>
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <p className="font-sans text-[15px] text-foreground/85 leading-[1.6] font-semibold max-w-xs tracking-[-0.005em]">
                  {d.description}
                </p>
                <span className="font-display text-[11px] uppercase tracking-[0.2em] text-foreground/60 group-hover:text-primary transition-colors whitespace-nowrap pt-1 font-semibold">
                  Saber mais →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
