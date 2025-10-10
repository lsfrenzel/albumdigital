import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Palette, Sparkles, Settings } from "lucide-react";

const customOptions = [
  {
    icon: Palette,
    title: "Escolha seu Tema",
    description: "Design exclusivo que combina com sua história: romântico, divertido, elegante ou minimalista."
  },
  {
    icon: Sparkles,
    title: "Personalize Cores",
    description: "Selecione a paleta de cores perfeita que representa seus sentimentos e memórias."
  },
  {
    icon: Settings,
    title: "Funcionalidades Únicas",
    description: "Adicione música de fundo, galeria de fotos, vídeos, mensagens especiais e muito mais."
  }
];

export default function CustomAlbums() {
  const whatsappUrl = "https://wa.me/5511943652488?text=Olá!%20Gostaria%20de%20criar%20um%20álbum%20personalizado.%20Pode%20me%20ajudar?";

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="600">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Crie seu Álbum <span className="text-primary">Personalizado</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tem uma ideia única? Criamos álbuns digitais totalmente customizados de acordo com o seu desejo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {customOptions.map((option, index) => (
            <Card 
              key={index}
              className="p-8 text-center hover-elevate transition-all duration-500 group hover:shadow-2xl"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="600"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-6">
                <option.icon className="w-8 h-8 text-primary transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="font-semibold text-xl mb-3 transition-colors duration-300 group-hover:text-primary">{option.title}</h3>
              <p className="text-muted-foreground">{option.description}</p>
            </Card>
          ))}
        </div>

        <div className="text-center" data-aos="fade-up" data-aos-delay="300" data-aos-duration="600">
          <Button
            size="lg"
            className="text-lg px-12 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/50"
            onClick={() => window.open(whatsappUrl, '_blank')}
            data-testid="button-solicitar-personalizacao"
          >
            Solicitar Personalização
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Entre em contato para receber um orçamento personalizado
          </p>
        </div>
      </div>
    </section>
  );
}
