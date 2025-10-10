import ProductCard from '../ProductCard';
import petImage from "@assets/stock_images/cute_golden_retrieve_da1040a6.jpg";

export default function ProductCardExample() {
  return (
    <ProductCard
      title="Gohan Golden"
      description="Álbum digital para registrar momentos de pets, com design fofo, elegante e interativo."
      price="R$ 150,00"
      siteUrl="https://gohanogolden-production.up.railway.app/"
      image={petImage}
    />
  );
}
