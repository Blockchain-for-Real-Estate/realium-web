import dynamoose from "dynamoose";
import { v4 as uuid } from "uuid";

const WalletSchema = new dynamoose.Schema(
  {
    username: {
      type: String,
      required: true,
      hashKey: true,
    },
    password: {
      type: String,
      required: true,
      default: uuid(),
    },
  },
  {
    saveUnknown: false,
    timestamps: true,
  }
);

const WalletModel = dynamoose.model("realium-user-wallets", WalletSchema, {
  create: true,
});

export default WalletModel;
