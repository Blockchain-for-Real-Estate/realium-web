import { useEffect, useState } from "react";
import Head from "next/head";
import "../index.css";

// CONTEXT
import { AppProvider } from "context/AppContext";
import { Provider as AuthProvider, useSession, signIn } from "next-auth/client";
import { QueryClient, QueryClientProvider, Hydrate } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import DefaultLayout from "layout/DefaultLayout";
import AccountLayout from "layout/AccountLayout";

function Realium({ Component, pageProps }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: Infinity,
          },
        },
      })
  );

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
          <AuthProvider session={pageProps.session}>
            <AppProvider>
              {Component.restricted ? (
                <Auth>{getLayout(Component, pageProps)}</Auth>
              ) : (
                <>{getLayout(Component, pageProps)}</>
              )}
            </AppProvider>
          </AuthProvider>
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

function Auth({ children }) {
  const { data: session, loading } = useSession();
  const isUser = !!session?.user;

  useEffect(() => {
    if (loading) return; // Do nothing while loading
    if (!isUser) signIn(); // If not authenticated, force log in
  }, [isUser, loading]);

  if (isUser) {
    return children;
  }

  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return <div>Loading...</div>;
}

export default Realium;
