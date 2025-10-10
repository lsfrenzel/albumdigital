import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Promotion from "@/components/Promotion";
import CustomAlbums from "@/components/CustomAlbums";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import petImage from "@assets/stock_images/cute_golden_retrieve_da1040a6.jpg";
import coupleImage from "@assets/stock_images/romantic_couple_hold_ffaf3a67.jpg";

export default function Home() {
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
              title="Gohan Golden"
              description="Álbum digital para registrar momentos de pets, com design fofo, elegante e interativo."
              price="R$ 150,00"
              siteUrl="https://gohanogolden-production.up.railway.app/"
              image={petImage}
            />
            
            <ProductCard
              title="Gohan para Casais"
              description="Álbum digital para casais registrarem memórias juntos, com um toque romântico e delicado."
              price="R$ 150,00"
              siteUrl="https://lsfrenzel.github.io/gohan/"
              image={coupleImage}
              isReversed
            />
          </div>
        </div>
      </section>

      <Promotion />
      <CustomAlbums />
      <HowItWorks />
      <Testimonials />
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}
