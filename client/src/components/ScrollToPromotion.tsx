import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ScrollToPromotion() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const footer = document.querySelector('footer');
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (footerTop <= windowHeight) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    toggleVisibility();

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToPromotion = () => {
    const promocao = document.getElementById('promocao');
    promocao?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <Button
      onClick={scrollToPromotion}
      size="icon"
      className="fixed bottom-24 right-6 z-40 w-14 h-14 rounded-full shadow-2xl bg-primary hover:bg-primary/90 animate-in slide-in-from-bottom-8 hover:scale-110 transition-all duration-300"
      data-testid="button-scroll-to-promotion"
    >
      <ArrowUp className="w-6 h-6" />
    </Button>
  );
}
