import HomePage from "pages/HomePage";
import { dehydrate, QueryClient } from "react-query";

const Page = () => <HomePage />;

export async function getStaticProps() {
  const queryClient = new QueryClient();
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

Page.title = null;
Page.description = null;
Page.restricted = false;
Page.layout = "default";
export default Page;
