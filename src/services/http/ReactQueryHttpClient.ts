import { useQuery, useMutation } from "react-query";
import IHttpClient, { IHttpResponse } from "../data/IHttpClient";

export async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json();
}

const ReactQueryHttpClient: IHttpClient = {
  useGet: <Data = unknown, Error = unknown>(url: string) => {
    const { data, error } = useQuery<Data, Error>(url, () => fetcher(url));
    return {
      data,
      error,
    } as IHttpResponse<Data, Error>;
  },
  usePost: <Data = unknown, Error = unknown>(url: string, body: BodyInit) => {
    const mutation = useMutation((data: any) =>
      fetcher(url, {
        body: JSON.stringify(data),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
    );

    return {
      mutate: mutation.mutate,
      data: mutation.data,
      error: mutation.error,
      isLoading: mutation.isLoading,
    } as IHttpResponse<Data, Error>;
  },
};

export { ReactQueryHttpClient };
