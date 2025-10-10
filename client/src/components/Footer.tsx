import { Heart } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export default function Footer() {
  const whatsappUrl = "https://wa.me/5511943652488?text=Olá!%20Quero%20comprar%20um%20álbum%20digital.";

  return (
    <footer className="bg-gradient-to-br from-foreground to-foreground/95 text-background py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4 text-primary">
              Gohan Digital
            </h3>
            <p className="text-background/80 leading-relaxed">
              Transformando momentos especiais em memórias digitais eternas. 
              Preservamos suas histórias com carinho e qualidade.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-background/80">
              <li>
                <a href="#produtos" className="hover:text-primary transition-colors">
                  Nossos Produtos
                </a>
              </li>
              <li>
                <a href="#promocao" className="hover:text-primary transition-colors">
                  Promoções
                </a>
              </li>
              <li>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contato</h4>
            <div className="flex gap-4 mb-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors hover-elevate"
                data-testid="link-whatsapp-footer"
              >
                <SiWhatsapp className="w-5 h-5" />
              </a>
            </div>
            <p className="text-background/80 text-sm">
              WhatsApp: (11) 94365-2488
            </p>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/80 flex items-center justify-center gap-2">
            © 2025 Gohan Digital. Feito com <Heart className="w-4 h-4 text-primary fill-primary" /> para preservar suas memórias.
          </p>
        </div>
      </div>
    </footer>
  );
}
