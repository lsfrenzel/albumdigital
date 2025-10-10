import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";
import avatar1 from "@assets/stock_images/professional_happy_w_cf90c801.jpg";
import avatar2 from "@assets/stock_images/professional_happy_w_3fac3fd0.jpg";
import avatar3 from "@assets/stock_images/professional_happy_w_a36e139e.jpg";

const testimonials = [
  {
    name: "Mariana Silva",
    role: "Mãe de pet",
    avatar: avatar1,
    rating: 5,
    text: "O álbum do meu cachorro ficou simplesmente perfeito! Consigo reviver todos os momentos especiais dele de forma linda e emocionante."
  },
  {
    name: "Lucas & Ana",
    role: "Casal",
    avatar: avatar2,
    rating: 5,
    text: "Criamos nosso álbum de namoro e ficou maravilhoso! Uma forma única de guardar nossas memórias. Super recomendo!"
  },
  {
    name: "Juliana Costa",
    role: "Cliente satisfeita",
    avatar: avatar3,
    rating: 5,
    text: "Atendimento impecável e resultado surpreendente. O álbum personalizado superou todas as minhas expectativas!"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="600">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Milhares de pessoas já preservaram suas memórias conosco
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-8 hover-elevate transition-all duration-500 relative group hover:shadow-2xl"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="600"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10 transition-all duration-300 group-hover:text-primary/20 group-hover:scale-110" />
              
              <div className="flex items-center gap-4 mb-6">
                <Avatar className="w-16 h-16 border-2 border-primary/20 transition-all duration-300 group-hover:border-primary group-hover:scale-110">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold text-lg transition-colors duration-300 group-hover:text-primary">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary transition-all duration-300 group-hover:scale-110" style={{ transitionDelay: `${i * 50}ms` }} />
                ))}
              </div>

              <p className="text-muted-foreground italic leading-relaxed transition-colors duration-300 group-hover:text-foreground">
                "{testimonial.text}"
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
