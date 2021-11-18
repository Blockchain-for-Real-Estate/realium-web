import PropertyPage from "src/pages/property/PropertyPage";
import { QueryClient, dehydrate } from "react-query";
import { QUERY_KEY as PROPERTY_KEY } from "src/context/queries/useProperty";
import { ReadProperty } from "pages/api/properties/[propertyId]";

export async function getStaticProps({ params }) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([PROPERTY_KEY, params.propertyId], () =>
    ReadProperty({ query: { propertyId: params.propertyId } })
  );

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      ...params,
    },
    revalidate: 12 * 60 * 60, // EVERY 12 HOURS REFRESH IN PRODUCTION
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { propertyId: "54bb2cfd-3b1c-41a2-85cc-b3c2cdad0578" } }],
    fallback: true,
  };
}

const Page = (props) => <PropertyPage {...props} />;

Page.title = null;
Page.description = null;
Page.restricted = false;
Page.layout = "default";
export default Page;
