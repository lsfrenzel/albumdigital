import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  siteUrl: string;
  image: string;
  isReversed?: boolean;
}

export default function ProductCard({ 
  title, 
  description, 
  price, 
  siteUrl, 
  image,
  isReversed = false 
}: ProductCardProps) {
  const whatsappUrl = "https://wa.me/5511943652488?text=Olá!%20Gostaria%20de%20comprar%20o%20álbum%20" + encodeURIComponent(title);

  return (
    <Card 
      className={`overflow-hidden hover-elevate transition-all duration-500 hover:shadow-2xl group ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} flex flex-col`}
      data-aos={isReversed ? "fade-left" : "fade-right"}
      data-aos-duration="800"
    >
      <div className="lg:w-1/2 relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 lg:h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      
      <div className="lg:w-1/2 p-8 flex flex-col justify-center">
        <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-lg text-muted-foreground mb-6">
          {description}
        </p>
        
        <div className="mb-6 relative inline-block">
          <p className="text-sm text-muted-foreground mb-1">Investimento</p>
          <p className="text-3xl font-bold text-primary">{price}</p>
          <div className="absolute -bottom-1 left-0 w-0 h-1 bg-primary group-hover:w-20 transition-all duration-500"></div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="outline"
            className="gap-2 hover:scale-105 transition-all duration-300"
            onClick={() => window.open(siteUrl, '_blank')}
            data-testid={`button-ver-album-${title.toLowerCase().replace(/\s+/g, '-')}`}
          >
            Veja Exemplo <ExternalLink className="w-4 h-4" />
          </Button>
          <Button
            onClick={() => window.open(whatsappUrl, '_blank')}
            data-testid={`button-comprar-${title.toLowerCase().replace(/\s+/g, '-')}`}
            className="hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/50"
          >
            Comprar Agora
          </Button>
        </div>
      </div>
    </Card>
  );
}
