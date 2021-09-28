import SigninPage from "pages/auth/SigninPage";
import { getSession } from "next-auth/client";

const Page = (props) => <SigninPage {...props} />;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return { props: { session } };
}

Page.title = null;
Page.description = null;
Page.restricted = false;
Page.layout = "";
export default SigninPage;
