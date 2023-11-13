import { Product } from "@/types/Productstype";

interface IFlayout {
  isOpen: boolean;
  closedFlyout: (close: boolean) => void;
  options: Product[];
}

interface MainFlyoutStyle {
  $isOpen: boolean;
}
