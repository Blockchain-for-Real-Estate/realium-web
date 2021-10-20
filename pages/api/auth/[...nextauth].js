import AWS from "aws-sdk";
import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { DynamoDBAdapter } from "@next-auth/dynamodb-adapter";

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: process.env.AWS_REGION,
});

export default NextAuth({
  secret: process.env.NEXT_AUTH_ENCRYTION_KEY,
  pages: {
    signIn: "/auth/signin",
    newUser: "/auth/new-user",
  },
  providers: [
    Providers.Cognito({
      clientId: process.env.COGNITO_CLIENT_ID,
      clientSecret: process.env.COGNITO_CLIENT_SECRET,
      domain: process.env.COGNITO_ISSUER,
    }),
  ],
  adapter: DynamoDBAdapter(new AWS.DynamoDB.DocumentClient(), {
    tableName: "realium-users",
  }),
  callbacks: {
    session: async (session, user) => {
      session.userId = user.id;
      return Promise.resolve(session);
    },
  },
});
