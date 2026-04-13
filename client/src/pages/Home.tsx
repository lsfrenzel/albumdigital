import { useEffect } from "react";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Promotion from "@/components/Promotion";
import QRCodeSection from "@/components/QRCodeSection";
import CustomAlbums from "@/components/CustomAlbums";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollToPromotion from "@/components/ScrollToPromotion";
import Footer from "@/components/Footer";
import petImage from "@assets/stock_images/cute_golden_retrieve_da1040a6.jpg";
import coupleImage from "@assets/stock_images/romantic_couple_hold_ffaf3a67.jpg";
import maesImage from "@assets/stock_images/professional_happy_w_3fac3fd0.jpg";
import paisImage from "@assets/stock_images/professional_happy_w_cf90c801.jpg";

export default function Home() {
  useEffect(() => {
    const initAOS = () => {
      if (typeof window !== 'undefined' && (window as any).AOS) {
        const isMobile = window.innerWidth < 768;
        (window as any).AOS.init({
          duration: isMobile ? 600 : 800,
          easing: 'ease-out-cubic',
          once: true,
          offset: isMobile ? 50 : 100,
          disable: false,
          delay: 0,
          anchorPlacement: 'top-bottom'
        });
      }
    };

    if (document.readyState === 'complete') {
      initAOS();
    } else {
      window.addEventListener('load', initAOS);
      return () => window.removeEventListener('load', initAOS);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Hero />
      
      <section id="produtos" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Nossos Álbuns Digitais
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Escolha o álbum perfeito para suas memórias especiais
            </p>
          </div>

          <div className="space-y-12">
            <ProductCard
              title="Eternize seu Pet"
              description="Álbum digital para registrar momentos de pets, com design fofo, elegante e interativo."
              price="R$ 150,00"
              siteUrl="https://gohanogolden-production.up.railway.app/"
              image={petImage}
            />
            
            <ProductCard
              title="Seu Amor é Único"
              description="Álbum digital para casais registrarem memórias juntos, com um toque romântico e delicado."
              price="R$ 150,00"
              siteUrl="https://lsfrenzel.github.io/gohan/"
              image={coupleImage}
              isReversed
            />

            <ProductCard
              title="Dia das Mães"
              description="Surpreenda a mamãe com um álbum digital emocionante, cheio de carinho, gratidão e memórias inesquecíveis."
              price="R$ 150,00"
              siteUrl=""
              image={maesImage}
              hideExampleButton
            />

            <ProductCard
              title="Dia dos Pais"
              description="Homenageie o pai com um álbum digital especial, repleto de momentos marcantes e mensagens do coração."
              price="R$ 150,00"
              siteUrl=""
              image={paisImage}
              isReversed
              hideExampleButton
            />
          </div>
        </div>
      </section>

      <Promotion />
      <QRCodeSection />
      <CustomAlbums />
      <HowItWorks />
      <Testimonials />
      <FloatingWhatsApp />
      <ScrollToPromotion />
      <Footer />
    </div>
  );
}
