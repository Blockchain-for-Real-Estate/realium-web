import AccountProfilePage from "pages/account/profile/AccountProfilePage";
import { getSession } from "next-auth/client";

export async function getServerSideProps(ctx) {
  return {
    props: {
      session: await getSession(ctx),
    },
  };
}

const Page = () => <AccountProfilePage />;

Page.title = null;
Page.description = null;
Page.layout = "account";
export default Page;
