import AccountVerificationPage from "pages/account/AccountVerificationPage";
import { getSession } from "next-auth/client";

export async function getServerSideProps(ctx) {
  return {
    props: {
      session: await getSession(ctx),
    },
  };
}

const Page = () => <AccountVerificationPage />;

Page.title = null;
Page.description = null;
Page.layout = "account";
export default Page;
