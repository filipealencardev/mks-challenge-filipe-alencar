import { IHttpResponse } from "@/services/data/IHttpClient";
import { httpClient } from "@/services/data/main";
import { ApiResponse } from "@/types/Productstype";

export default class ProductApi {
  baseUrl = "";
  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_APIS_BASE_URL ?? "";
  }

  endPointListProduct = (
    page: number,
    rows?: number,
    sortBy?: "id" | "name" | "price",
    orderBy?: "DESC" | "ASC"
  ) => {
    return `${this.baseUrl}/products?page=${page}&rows=${
      rows ? (rows < 5 ? 5 : rows) : 5
    }&sortBy=${sortBy ? sortBy : "id"}&orderBy=${orderBy ? orderBy : "DESC"}`;
  };

  getListProduct = (
    page: number,
    rows?: number,
    sortBy?: "id" | "name" | "price",
    orderBy?: "DESC" | "ASC"
  ): IHttpResponse<ApiResponse[], unknown> => {
    const { data, error } = httpClient.useGet<ApiResponse[]>(
      this.endPointListProduct(page, rows, sortBy, orderBy)
    ) as IHttpResponse<ApiResponse[], unknown>;

    return {
      data,
      isLoading: !error && !data,
      error,
    };
  };
}
