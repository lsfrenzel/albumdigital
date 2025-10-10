import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

export default function Promotion() {
  const whatsappUrl = "https://wa.me/5511943652488?text=Olá!%20Quero%20aproveitar%20a%20promoção%20dos%202%20álbuns%20por%20R$199,90!";

  return (
    <section id="promocao" className="py-20 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="relative" data-aos="zoom-in" data-aos-duration="1000">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20" data-aos="bounce" data-aos-delay="500">
            <Badge className="bg-primary text-primary-foreground text-sm px-4 py-2 shadow-lg">
              Oferta Limitada
            </Badge>
          </div>

          <div className="bg-gradient-to-r from-primary to-accent p-1 rounded-2xl shadow-2xl hover:shadow-primary/30 transition-all duration-500">
            <div className="bg-background rounded-2xl p-8 md:p-12 text-center">
              <div className="relative inline-block mb-6">
                <Sparkles className="w-16 h-16 mx-auto text-primary animate-pulse" />
                <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full"></div>
              </div>
              
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4" data-aos="fade-up" data-aos-delay="200">
                Promoção Especial
              </h2>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="300">
                Adquira os dois álbuns digitais e preserve suas memórias com um desconto incrível!
              </p>

              <div className="flex items-center justify-center gap-4 mb-8" data-aos="fade-up" data-aos-delay="400">
                <div className="text-center relative">
                  <p className="text-sm text-muted-foreground line-through">R$ 300,00</p>
                  <p className="text-5xl md:text-6xl font-bold text-primary animate-pulse">R$ 199,90</p>
                  <p className="text-sm text-muted-foreground mt-2">Economia de R$ 100,10</p>
                  <div className="absolute -inset-4 bg-primary/5 rounded-2xl -z-10"></div>
                </div>
              </div>

              <Button
                size="lg"
                className="text-lg px-12 bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/50"
                onClick={() => window.open(whatsappUrl, '_blank')}
                data-testid="button-comprar-combo"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                Quero Aproveitar Agora
              </Button>

              <p className="text-sm text-muted-foreground mt-6" data-aos="fade-up" data-aos-delay="600">
                Inclui Eternize seu Pet + Seu Amor é Único
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
