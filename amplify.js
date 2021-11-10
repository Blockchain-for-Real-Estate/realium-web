import Amplify from "aws-amplify";

const AmplifyConfig = {
  Auth: {
    region: process.env.NEXT_PUBLIC_COGNITO_REGION,
    userPoolId: process.env.NEXT_PUBLIC_COGNITO_POOL_ID,
    userPoolWebClientId: process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID,
    authenticationFlowType: "USER_PASSWORD_AUTH",
  },
  ssr: true,
};

const initialize = () => {
  Amplify.configure(AmplifyConfig);
};

export default initialize;
