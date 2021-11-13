import HomePage from "src/pages/home/HomePage";
import { dehydrate, QueryClient } from "react-query";
import { QUERY_KEY as PROPERTIES_KEY } from "src/context/queries/useProperties";
import { ReadProperties } from "./api/properties";

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(PROPERTIES_KEY, ReadProperties);

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
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
