import AccountWalletPage from "pages/account/AccountWalletPage";
import { getSession } from "next-auth/client";

export async function getServerSideProps(ctx) {
  return {
    props: {
      session: await getSession(ctx),
    },
  };
}

const Page = () => <AccountWalletPage />;

Page.title = null;
Page.description = null;
Page.layout = "account";
export default Page;
