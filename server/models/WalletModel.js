import dynamoose from "dynamoose";

dynamoose.aws.sdk.config.update({
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.ACCESS_SECRET,
  region: process.env.NEXT_PUBLIC_AWS_REGION,
});

const WalletSchema = new dynamoose.Schema(
  {
    sub: {
      type: String,
      required: true,
      hashKey: true,
    },
    address: {
      type: String,
      required: true,
      index: {
        name: "addressIndex",
        global: true,
      },
    },
    privateKey: {
      type: String,
      required: true,
    },
  },
  {
    saveUnknown: false,
    timestamps: true,
  }
);

const WalletModel = dynamoose.model("realium-user-wallets", WalletSchema, {
  create: false,
  update: false,
});

export default WalletModel;
