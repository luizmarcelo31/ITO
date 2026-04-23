import { useEffect, useState } from "react";
import { whatsappLink } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={whatsappLink("Olá Ito! Quero falar com um consultor sobre minha próxima viagem.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className={`fixed bottom-6 right-6 z-40 flex items-center justify-center h-12 w-12 rounded-full bg-foreground text-background shadow-lg hover:bg-primary transition-all duration-500 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <svg viewBox="0 0 32 32" className="h-5 w-5" fill="currentColor" aria-hidden="true">
        <path d="M16 .5C7.44.5.5 7.44.5 16c0 2.82.74 5.58 2.15 8L0 32l8.27-2.6A15.5 15.5 0 0 0 16 31.5c8.56 0 15.5-6.94 15.5-15.5S24.56.5 16 .5Zm0 28.27c-2.46 0-4.87-.66-6.98-1.92l-.5-.3-4.91 1.55 1.57-4.78-.32-.5A12.74 12.74 0 0 1 3.27 16C3.27 8.97 8.97 3.27 16 3.27S28.73 8.97 28.73 16 23.03 28.77 16 28.77Zm7.13-9.55c-.39-.2-2.32-1.14-2.68-1.27-.36-.13-.62-.2-.88.2-.26.39-1 1.27-1.23 1.53-.23.26-.46.29-.85.1-.39-.2-1.65-.61-3.14-1.94-1.16-1.04-1.94-2.31-2.17-2.7-.23-.39-.02-.6.17-.79.17-.17.39-.46.59-.69.2-.23.26-.39.39-.65.13-.26.07-.49-.03-.69-.1-.2-.88-2.12-1.21-2.9-.32-.77-.65-.66-.88-.67h-.75c-.26 0-.69.1-1.05.49-.36.39-1.38 1.35-1.38 3.29s1.41 3.81 1.61 4.07c.2.26 2.78 4.24 6.74 5.94.94.41 1.68.65 2.25.83.94.3 1.8.26 2.48.16.76-.11 2.32-.95 2.65-1.86.33-.91.33-1.69.23-1.86-.1-.16-.36-.26-.75-.46Z"/>
      </svg>
    </a>
  );
}
