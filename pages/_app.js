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
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <AppProvider>{getLayout(Component, pageProps)}</AppProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </AuthProvider>
  );
}

const getLayout = (Component, pageProps) => {
  switch (Component.layout) {
    default:
      return (
        <DefaultLayout>
          <Component />
        </DefaultLayout>
      );
  }
};

export default Realium;
