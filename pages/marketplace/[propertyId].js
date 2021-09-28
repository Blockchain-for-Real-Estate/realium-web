import PropertySingle from "pages/PropertySingle";

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
