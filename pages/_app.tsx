import { ThemeProvider } from "styled-components";
import { AppProps } from "next/app";
import GlobalStyle from "@/styles/GlobalStyles";
import theme from "@/styles/Theme";
import React, { ReactElement, ReactNode, useEffect, useState } from "react";
import { NextPage } from "next";
import "@/styles/fonts.css";
import { GlobalContextProvider } from "@/contexts/GlobalContext";
import { Header } from "@/layouts/Header";
import { QueryClient, QueryClientProvider } from "react-query";

export type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const queryClient = new QueryClient();

const App: React.FC<AppProps> = ({
  Component,
  pageProps,
}: AppPropsWithLayout) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const ThemeWrapper = () => {
    return Component.getLayout ? (
      Component.getLayout(
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Header />
          <Component {...pageProps} />
        </ThemeProvider>
      )
    ) : (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  };

  return (
    mounted && (
      <QueryClientProvider client={queryClient}>
        <GlobalContextProvider>
          <ThemeWrapper />
        </GlobalContextProvider>
      </QueryClientProvider>
    )
  );
};

export default App;
