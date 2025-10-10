import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FloatingWhatsApp() {
  const [isExpanded, setIsExpanded] = useState(false);
  const whatsappUrl = "https://wa.me/5511943652488?text=Olá!%20Gostaria%20de%20fazer%20uma%20cotação%20para%20um%20álbum%20digital!";

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {isExpanded && (
          <div 
            className="absolute bottom-20 right-0 bg-card border border-border rounded-2xl p-4 shadow-xl w-64 animate-in slide-in-from-bottom-4"
            data-aos="fade-up"
          >
            <button
              onClick={() => setIsExpanded(false)}
              className="absolute -top-2 -right-2 w-6 h-6 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center hover-elevate"
            >
              <X className="w-4 h-4" />
            </button>
            <p className="font-semibold mb-2">Olá! 👋</p>
            <p className="text-sm text-muted-foreground mb-4">
              Precisa de ajuda? Faça uma cotação agora mesmo!
            </p>
            <Button
              className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white"
              onClick={() => window.open(whatsappUrl, '_blank')}
              data-testid="button-whatsapp-expandido"
            >
              Iniciar Conversa
            </Button>
          </div>
        )}

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 animate-pulse"
          data-testid="button-floating-whatsapp"
        >
          <MessageCircle className="w-8 h-8" />
        </button>

        <div className="absolute -bottom-1 -right-1 w-20 text-center">
          <span className="text-xs font-semibold bg-primary text-primary-foreground px-2 py-1 rounded-full whitespace-nowrap">
            Faça uma Cotação
          </span>
        </div>
      </div>
    </div>
  );
}
