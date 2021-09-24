import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  secret: process.env.NEXT_AUTH_ENCRYTION_KEY,
  providers: [
    Providers.Cognito({
      clientId: process.env.COGNITO_CLIENT_ID,
      clientSecret: process.env.COGNITO_CLIENT_SECRET,
      domain: process.env.COGNITO_DOMAIN,
    }),
  ],
});
