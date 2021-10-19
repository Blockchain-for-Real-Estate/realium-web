import HomePage from "pages/home/HomePage";

import { dehydrate, QueryClient } from "react-query";
import {
  QUERY_KEY as PROPERTIES_KEY,
  GetProperties,
} from "context/queries/useProperties";

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(PROPERTIES_KEY, GetProperties);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 12 * 60 * 60, // EVERY 12 HOURS REFRESH IN PRODUCTION
  };
}

const Page = () => <HomePage />;

Page.title = null;
Page.description = null;
Page.restricted = false;
Page.layout = "default";
export default Page;
