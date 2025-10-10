import { Button } from "@/components/ui/button";
import { ChevronDown, Sparkles } from "lucide-react";
import heroImage from "@assets/stock_images/romantic_couple_hold_ffaf3a67.jpg";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary/30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-accent/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-40 w-2 h-2 bg-primary/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center text-white" data-aos="fade-up" data-aos-duration="1000">
        <div className="inline-block mb-6" data-aos="zoom-in" data-aos-delay="200">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30 text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            Preserve suas memórias para sempre
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Cinzel, serif' }} data-aos="fade-up" data-aos-delay="300">
          Transforme momentos em<br />
          <span className="text-primary inline-block" data-aos="fade-up" data-aos-delay="400">memórias digitais</span>
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="500">
          Crie seu álbum digital exclusivo — para pets ou casais.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" data-aos="fade-up" data-aos-delay="600">
          <Button 
            size="lg" 
            variant="outline"
            className="text-lg px-8 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300"
            onClick={() => scrollToSection('produtos')}
            data-testid="button-ver-produtos"
          >
            Ver Produtos
          </Button>
          <Button 
            size="lg"
            className="text-lg px-8 bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/50"
            onClick={() => scrollToSection('promocao')}
            data-testid="button-promocao"
          >
            Aproveite a Promoção: 2 por R$199,90
          </Button>
        </div>
      </div>

      <button 
        onClick={() => scrollToSection('produtos')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/80 hover:text-white transition-colors hover:scale-110"
        data-testid="button-scroll-down"
      >
        <ChevronDown className="w-10 h-10" />
      </button>
    </section>
  );
}
