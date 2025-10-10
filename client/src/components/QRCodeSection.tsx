import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { QrCode, Sparkles, Gift } from "lucide-react";

export default function QRCodeSection() {
  const whatsappUrl = "https://wa.me/5511943652488?text=Olá!%20Quero%20adicionar%20a%20arte%20com%20QR%20code%20ao%20meu%20álbum!";

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <div className="flex items-center gap-3 mb-4">
              <Gift className="w-8 h-8 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Torne ainda mais especial</span>
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Arte com QR Code<br />
              do seu <span className="text-primary">Álbum Digital</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Transforme seu álbum digital em uma lembrança física! Criamos uma arte exclusiva com QR code 
              que leva direto para suas memórias. Perfeito para imprimir e presentear.
            </p>

            <div className="flex items-baseline gap-3 mb-8">
              <span className="text-sm text-muted-foreground">Por apenas</span>
              <span className="text-5xl font-bold text-primary">R$ 29,90</span>
            </div>

            <Button
              size="lg"
              className="text-lg px-8 group"
              onClick={() => window.open(whatsappUrl, '_blank')}
              data-testid="button-qrcode-arte"
            >
              Adicionar ao Meu Álbum
              <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Button>
          </div>

          <div data-aos="fade-left" data-aos-delay="100">
            <Card className="p-8 hover-elevate transition-all duration-500 bg-gradient-to-br from-card to-card/80">
              <div className="flex flex-col items-center text-center">
                <div className="w-48 h-48 mb-6 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent animate-pulse"></div>
                  <QrCode className="w-32 h-32 text-primary relative z-10" />
                </div>
                
                <h3 className="font-semibold text-2xl mb-3">Escaneie e Reviva</h3>
                <p className="text-muted-foreground mb-6">
                  Com um simples scan do QR code, suas memórias ganham vida instantaneamente
                </p>

                <div className="grid grid-cols-3 gap-4 w-full">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-xl">📱</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Scan fácil</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-xl">🎨</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Arte exclusiva</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-xl">🎁</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Presente perfeito</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
