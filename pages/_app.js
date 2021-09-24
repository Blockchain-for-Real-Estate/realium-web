import Head from "next/head";

import "tailwindcss/tailwind.css";
import "index.css";

// CONTEXT
import { AppProvider } from "context/AppContext";
import { Provider as AuthProvider } from "next-auth/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import DefaultLayout from "layout/DefaultLayout";

function Realium({ Component, pageProps }) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
      },
    },
  });

  return (
    <>
      <Head>
        <title>
          {Component.title || "Backed by Real Estate, Powered by Blockchain"}
        </title>
        <meta
          name="description"
          content={
            Component.description ||
            "Realium is a merketplace for buying, selling, and listing tokenized real estate"
          }
        />
      </Head>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <AppProvider>{getLayout(Component, pageProps)}</AppProvider>
        </AuthProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

const getLayout = (Component, pageProps) => {
  switch (Component.layout) {
    default:
      return (
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      );
  }
};

export default Realium;
