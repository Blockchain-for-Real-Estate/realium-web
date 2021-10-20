import AccountSecurityPage from "pages/account/AccountSecurityPage";
import { getSession } from "next-auth/client";

export async function getServerSideProps(ctx) {
  return {
    props: {
      session: await getSession(ctx),
    },
  };
}

const Page = () => <AccountSecurityPage />;

Page.title = null;
Page.description = null;
Page.layout = "account";
export default Page;
