import React, { Suspense, lazy } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LazySection } from "@/components/LazySection";

// Lazy load components below the fold
const Problem = lazy(() => import("@/components/Problem").then(m => ({ default: m.Problem })));
const Destinations = lazy(() => import("@/components/Destinations").then(m => ({ default: m.Destinations })));
const Offers = lazy(() => import("@/components/Offers").then(m => ({ default: m.Offers })));
const Differentials = lazy(() => import("@/components/Differentials").then(m => ({ default: m.Differentials })));
const Testimonials = lazy(() => import("@/components/Testimonials").then(m => ({ default: m.Testimonials })));
const Objections = lazy(() => import("@/components/Objections").then(m => ({ default: m.Objections })));
const FinalCTA = lazy(() => import("@/components/FinalCTA").then(m => ({ default: m.FinalCTA })));
const Footer = lazy(() => import("@/components/Footer").then(m => ({ default: m.Footer })));
const FloatingWhatsApp = lazy(() => import("@/components/FloatingWhatsApp").then(m => ({ default: m.FloatingWhatsApp })));

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ito Receptivos | Viagens, Excursões e Fretamento em Caruaru/PE" },
      {
        name: "description",
        content:
          "Pacotes turísticos, excursões e fretamento com transporte próprio em Caruaru/PE. Porto de Galinhas, Maragogi, Carneiros e mais. Atendimento direto no WhatsApp.",
      },
      { property: "og:title", content: "Ito Receptivos | Sua viagem perfeita começa aqui" },
      {
        property: "og:description",
        content:
          "Agência + transporte próprio em Caruaru/PE. Mais de 10 anos realizando sonhos pelo Nordeste.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Suspense fallback={<div className="h-20" />}>
        <LazySection minHeight="400px"><Problem /></LazySection>
        <LazySection minHeight="600px"><Destinations /></LazySection>
        <LazySection minHeight="500px"><Offers /></LazySection>
        <LazySection minHeight="400px"><Differentials /></LazySection>
        <LazySection minHeight="400px"><Testimonials /></LazySection>
        <LazySection minHeight="400px"><Objections /></LazySection>
        <LazySection minHeight="300px"><FinalCTA /></LazySection>
        <LazySection minHeight="200px"><Footer /></LazySection>
        <FloatingWhatsApp />
      </Suspense>
    </main>
  );
}
