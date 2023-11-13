import { Product } from "@/types/Productstype";
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

interface GlobalContextData {
  setInsertProductCheckout: Dispatch<SetStateAction<Product[]>>;
  insertProductsCheckout: Product[];
  setProductCheckout: Dispatch<SetStateAction<CountedProduct[]>>;
  productsCheckout: CountedProduct[];
  setSizeScreen: Dispatch<SetStateAction<{ width: number; height: number }>>;
  sizeScreen: { width: number; height: number };
  setOpeChekout: Dispatch<SetStateAction<boolean>>;
  openChekout: boolean;
}

type CountedProduct = {
  count: number;
  product: Product;
};

interface GlobalProps {
  children: ReactNode;
}

const countProducts = (products: Product[]): CountedProduct[] => {
  const countedMap = new Map<number, CountedProduct>();

  products.forEach((product) => {
    const productId = product.id;

    if (countedMap.has(productId)) {
      const countedProduct = countedMap.get(productId)!;
      countedProduct.count += 1;
    } else {
      const countedProduct: CountedProduct = { count: 1, product };
      countedMap.set(productId, countedProduct);
    }
  });
  const countedProducts: CountedProduct[] = Array.from(countedMap.values());

  return countedProducts;
};

export const GlobalContext = createContext({} as GlobalContextData);

export const GlobalContextProvider = ({ children }: GlobalProps) => {
  const [openChekout, setOpeChekout] = useState(false);
  const [insertProductsCheckout, setInsertProductCheckout] = useState<
    Product[]
  >([]);
  const [productsCheckout, setProductCheckout] = useState<CountedProduct[]>([]);
  const [sizeScreen, setSizeScreen] = useState<{
    width: number;
    height: number;
  }>({
    width: typeof window === "object" ? window.innerWidth : 0,
    height: typeof window === "object" ? window.innerHeight : 0,
  });

  useEffect(() => {
    if (typeof window === "object") {
      window.addEventListener("resize", () =>
        setSizeScreen({ width: window.innerWidth, height: window.innerHeight })
      );

      return () => {
        window.removeEventListener("resize", () =>
          setSizeScreen({
            width: window.innerWidth,
            height: window.innerHeight,
          })
        );
      };
    }
  }, []);

  useEffect(() => {
    setProductCheckout(countProducts(insertProductsCheckout));
  }, [insertProductsCheckout]);

  return (
    <GlobalContext.Provider
      value={{
        setProductCheckout,
        productsCheckout,
        setInsertProductCheckout,
        insertProductsCheckout,
        setOpeChekout,
        openChekout,
        setSizeScreen,
        sizeScreen,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
