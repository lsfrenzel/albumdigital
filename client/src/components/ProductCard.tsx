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
      className={`overflow-hidden hover-elevate transition-all duration-300 ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} flex flex-col`}
      data-aos={isReversed ? "fade-left" : "fade-right"}
    >
      <div className="lg:w-1/2">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 lg:h-full object-cover"
        />
      </div>
      
      <div className="lg:w-1/2 p-8 flex flex-col justify-center">
        <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-foreground">
          {title}
        </h3>
        <p className="text-lg text-muted-foreground mb-6">
          {description}
        </p>
        
        <div className="mb-6">
          <p className="text-sm text-muted-foreground mb-1">Investimento</p>
          <p className="text-3xl font-bold text-primary">{price}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="outline"
            className="gap-2"
            onClick={() => window.open(siteUrl, '_blank')}
            data-testid={`button-ver-album-${title.toLowerCase().replace(/\s+/g, '-')}`}
          >
            Ver Álbum <ExternalLink className="w-4 h-4" />
          </Button>
          <Button
            onClick={() => window.open(whatsappUrl, '_blank')}
            data-testid={`button-comprar-${title.toLowerCase().replace(/\s+/g, '-')}`}
          >
            Comprar Agora
          </Button>
        </div>
      </div>
    </Card>
  );
}
