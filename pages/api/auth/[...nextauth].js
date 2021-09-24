import AWS from "aws-sdk";
import NextAuth from "next-auth";
import CognitoProvider from "next-auth/providers/cognito";
import { DynamoDBAdapter } from "@next-auth/dynamodb-adapter";

AWS.config.update({
  accessKeyId: process.env.NEXT_AUTH_AWS_ACCESS_KEY,
  secretAccessKey: process.env.NEXT_AUTH_AWS_SECRET_KEY,
  region: process.env.NEXT_AUTH_AWS_REGION,
});

export default NextAuth({
  secret: process.env.NEXT_AUTH_ENCRYTION_KEY,
  pages: {
    signIn: "/auth/signin",
    newUser: "/auth/new-user",
  },
  providers: [
    CognitoProvider({
      clientId: process.env.COGNITO_CLIENT_ID,
      issuer: process.env.COGNITO_ISSUER,
    }),
  ],
  adapter: DynamoDBAdapter(new AWS.DynamoDB.DocumentClient(), {
    tableName: "realium-users",
  }),
});
