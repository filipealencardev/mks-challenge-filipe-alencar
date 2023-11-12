import { FetchHttpClient } from "../http/FetchHttpClient";
import { ReactQueryHttpClient } from "../http/ReactQueryHttpClient";
import IHttpClient from "./IHttpClient";

export const httpClient: IHttpClient = ReactQueryHttpClient;
export const fetchHttpClient: IHttpClient = FetchHttpClient;
