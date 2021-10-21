import AccountDashboardPage from "pages/account/dashboard/AccountDashboardPage";
import { getSession } from "next-auth/client";

export async function getServerSideProps(ctx) {
  return {
    props: {
      session: await getSession(ctx),
    },
  };
}

const Page = () => <AccountDashboardPage />;

Page.title = null;
Page.description = null;
Page.layout = "account";
export default Page;
