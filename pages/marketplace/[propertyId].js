import PropertySingle from "pages/PropertySingle";
import { dehydrate, QueryClient } from "react-query";

export async function getStaticProps() {
  const queryClient = new QueryClient();
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export async function getStaticPaths(propertyId) {
  return {
    paths: [
      `/marketplace/${propertyId}`,
      // Object variant:
      { params: { propertyId: propertyId.toString() } },
    ],
    fallback: true,
  }
}

const Page = () => <PropertySingle />;

Page.title = null;
Page.description = null;
Page.restricted = false;
Page.layout = "default";
export default Page;
