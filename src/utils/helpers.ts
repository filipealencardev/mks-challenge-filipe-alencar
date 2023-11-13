import { Product } from "@/types/Productstype";

type CountedProduct = {
  count: number;
  product: Product;
};

export const countProducts = (products: Product[]): CountedProduct[] => {
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
