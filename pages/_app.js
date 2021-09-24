import { useEffect } from "react";
import Head from "next/head";
import "index.css";

// CONTEXT
import { AppProvider } from "context/AppContext";
import {
  SessionProvider as AuthProvider,
  useSession,
  signIn,
} from "next-auth/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import DefaultLayout from "layout/DefaultLayout";

function Realium({ Component, pageProps: { session, ...pageProps } }) {
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
        <AuthProvider session={session}>
          <AppProvider>
            {Component.restricted ? (
              <Auth>{getLayout(Component, pageProps)}</Auth>
            ) : (
              <>{getLayout(Component, pageProps)}</>
            )}
          </AppProvider>
        </AuthProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

const getLayout = (Component, pageProps) => {
  switch (Component.layout) {
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
