import NextAuth from "next-auth";
import CognitoProvider from "next-auth/providers/cognito";

export default NextAuth({
  secret: process.env.NEXT_AUTH_ENCRYTION_KEY,
  pages: {
    signIn: "/auth/signin",
    newUser: "/auth/new-user",
  },
  providers: [
    CognitoProvider({
      clientId: process.env.COGNITO_CLIENT_ID,
      clientSecret: process.env.COGNITO_CLIENT_SECRET,
      issuer: process.env.COGNITO_ISSUER,
    }),
  ],
});
