import { SiWhatsapp } from "react-icons/si";

export default function FloatingWhatsApp() {
  const whatsappUrl = "https://wa.me/5511943652488?text=Olá!%20Quero%20comprar%20um%20álbum%20digital.";

  return (
    <button
      onClick={() => window.open(whatsappUrl, '_blank')}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-[#25D366] to-[#128C7E] hover:from-[#20BA5A] hover:to-[#0F7A6E] text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] group"
      data-testid="button-floating-whatsapp"
    >
      <SiWhatsapp className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full border-2 border-white"></span>
    </button>
  );
}
