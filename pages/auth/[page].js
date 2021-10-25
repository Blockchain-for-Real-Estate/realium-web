import AuthPage from "pages/auth/AuthPage";

const Page = ({ page }) => <AuthPage page={page} />;

export async function getStaticProps({ params }) {
  return {
    props: {
      page: params.page,
    },
  };
}

export async function getStaticPaths() {
  let paths = [
    { params: { page: "signin" } },
    { params: { page: "register" } },
  ];

  return {
    paths,
    fallback: false,
  };
}

Page.title = null;
Page.description = null;
Page.restricted = false;
Page.layout = "default";
export default Page;
