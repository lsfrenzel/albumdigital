import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@assets/stock_images/romantic_couple_hold_ffaf3a67.jpg";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center text-white" data-aos="fade-up">
        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Transforme momentos em<br />
          <span className="text-primary">memórias digitais</span>
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto">
          Crie seu álbum digital exclusivo — para pets ou casais.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            variant="outline"
            className="text-lg px-8 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
            onClick={() => scrollToSection('produtos')}
            data-testid="button-ver-produtos"
          >
            Ver Produtos
          </Button>
          <Button 
            size="lg"
            className="text-lg px-8 bg-primary hover:bg-primary/90"
            onClick={() => scrollToSection('promocao')}
            data-testid="button-promocao"
          >
            Aproveite a Promoção: 2 por R$199,90
          </Button>
        </div>
      </div>

      <button 
        onClick={() => scrollToSection('produtos')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/80 hover:text-white transition-colors"
        data-testid="button-scroll-down"
      >
        <ChevronDown className="w-10 h-10" />
      </button>
    </section>
  );
}
