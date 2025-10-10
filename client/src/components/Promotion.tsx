import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

export default function Promotion() {
  const whatsappUrl = "https://wa.me/5511943652488?text=Olá!%20Quero%20aproveitar%20a%20promoção%20dos%202%20álbuns%20por%20R$199,90!";

  return (
    <section id="promocao" className="py-20 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative" data-aos="zoom-in">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2">
            <Badge className="bg-primary text-primary-foreground text-sm px-4 py-2 animate-pulse">
              Oferta Limitada
            </Badge>
          </div>

          <div className="bg-gradient-to-r from-primary to-accent p-1 rounded-2xl">
            <div className="bg-background rounded-2xl p-8 md:p-12 text-center">
              <Sparkles className="w-16 h-16 mx-auto mb-6 text-primary" />
              
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
                Promoção Especial
              </h2>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Adquira os dois álbuns digitais e preserve suas memórias com um desconto incrível!
              </p>

              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground line-through">R$ 300,00</p>
                  <p className="text-5xl md:text-6xl font-bold text-primary">R$ 199,90</p>
                  <p className="text-sm text-muted-foreground mt-2">Economia de R$ 100,10</p>
                </div>
              </div>

              <Button
                size="lg"
                className="text-lg px-12 bg-primary hover:bg-primary/90"
                onClick={() => window.open(whatsappUrl, '_blank')}
                data-testid="button-comprar-combo"
              >
                Quero Aproveitar Agora
              </Button>

              <p className="text-sm text-muted-foreground mt-6">
                Inclui Gohan Golden + Gohan para Casais
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
