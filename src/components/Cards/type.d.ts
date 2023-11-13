import { Product } from "@/types/Productstype";

interface ICard {
  options: Product;
  isLoading: boolean;
  position: number;
  quantityItens: number;
  insertChekoutItem: () => void;
}

interface ImageCardStyle {
  $imgPath: string;
}
