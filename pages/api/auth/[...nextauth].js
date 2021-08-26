import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  secret: process.env.NEXT_AUTH_SECRET,
  providers: [
    Providers.Credentials({
      name: "Email",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        return {
          id: "1",
          name: "rob",
        };
      },
    }),
  ],
});
