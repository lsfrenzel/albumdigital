import { Card } from "@/components/ui/card";
import { MousePointerClick, Upload, Sparkles, Share2 } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: MousePointerClick,
    title: "Escolha seu álbum",
    description: "Selecione entre nossos modelos prontos ou solicite um álbum personalizado."
  },
  {
    number: 2,
    icon: Upload,
    title: "Envie suas fotos e informações",
    description: "Compartilhe suas memórias especiais, fotos favoritas e textos personalizados."
  },
  {
    number: 3,
    icon: Sparkles,
    title: "Receba seu site personalizado",
    description: "Em poucos dias, seu álbum digital estará pronto com design exclusivo e elegante."
  },
  {
    number: 4,
    icon: Share2,
    title: "Compartilhe com quem ama",
    description: "Envie o link do seu álbum para familiares e amigos preservarem suas memórias."
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Como Funciona
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Criar seu álbum digital é simples e rápido. Veja o passo a passo:
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary opacity-20 -translate-y-1/2" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative" data-aos="fade-up" data-aos-delay={index * 100}>
                <Card className="p-6 text-center hover-elevate transition-all duration-300 h-full">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center relative z-10">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold z-20">
                    {step.number}
                  </div>

                  <h3 className="font-semibold text-lg mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
