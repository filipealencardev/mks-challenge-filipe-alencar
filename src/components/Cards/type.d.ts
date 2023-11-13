import { Product } from "@/types/Productstype";

interface ICard {
  options: Product;
  isLoading: boolean;
  position: number;
  quantityItens: number;
}

interface ImageCardStyle {
  $imgPath: string;
}
