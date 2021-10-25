import { useState } from "react";
import Head from "next/head";
import "../index.css";
import Amplify from "../amplify";

// CONTEXT
import { AppProvider } from "context/AppContext";
import { QueryClient, QueryClientProvider, Hydrate } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import DefaultLayout from "layout/DefaultLayout";
import AccountLayout from "layout/AccountLayout";
import Toasts from "components/base/Toasts";

function Realium({ Component, pageProps }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: Infinity,
            retry: process.env.NODE_ENV === "production" ? true : false,
          },
        },
      })
  );

  Amplify();

  return (
    <>
      <Head>
        <title>{Component.title || "Realium"}</title>
        <meta
          name="description"
          content={
            Component.description ||
            "Backed by Real Estate, Powered by Blockchain"
          }
        />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <AppProvider>
            {getLayout(Component, pageProps)}
            <Toasts />
          </AppProvider>
        </Hydrate>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

const getLayout = (Component, pageProps) => {
  switch (Component.layout) {
    case "account":
      return (
        <AccountLayout>
          <Component {...pageProps} />
        </AccountLayout>
      );
    case "default":
      return (
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      );
    default:
      return <Component {...pageProps} />;
  }
};

export default Realium;
