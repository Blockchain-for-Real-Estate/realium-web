import { useState } from "react";
import Head from "next/head";
import "../index.css";

// CONTEXT
import { AppProvider } from "src/context/AppContext";
import { QueryClient, QueryClientProvider, Hydrate } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import DefaultLayout from "src/layout/DefaultLayout";
import AccountLayout from "src/layout/AccountLayout";
import Toasts from "src/components/base/Toasts";
import useUser from "src/context/queries/useUser";
import NotAuthorized from "src/pages/NotAuthorized";
import Modal from "src/components/base/Modal";
import AmplifyInit from "amplify.config";

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

  AmplifyInit();

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
            {Component.restricted ? (
              <Auth>{getLayout(Component, pageProps)}</Auth>
            ) : (
              getLayout(Component, pageProps)
            )}
            <Toasts />
            <Modal />
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

const Auth = ({ children }) => {
  const { data: user, isLoading } = useUser();
  if (isLoading) return null;
  if (!user)
    return (
      <DefaultLayout>
        <NotAuthorized />
      </DefaultLayout>
    );
  if (user) return <>{children}</>;
};

export default Realium;
