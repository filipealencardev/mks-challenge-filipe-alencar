export type Product = {
  id: number;
  name: string;
  brand: string;
  description: string;
  price: number;
};

export type ApiResponse = {
  products: Product[];
  count: number;
};
