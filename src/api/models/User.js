import dynamoose from "dynamoose";

const UserSchema = new dynamoose.Schema(
  {
    pk: {
      type: String,
      hashKey: true,
    },
    sk: {
      type: String,
      rangeKey: true,
    },
    GSI1PK: {
      type: String,
      index: {
        name: "GSI1",
        rangeKey: "GSI1SK",
        global: true,
      },
    },
    GSI1SK: {
      type: String,
    },
    fName: {
      type: String,
    },
    lName: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    country: {
      type: String,
    },
    address: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    postal_code: {
      type: String,
    },
    notification_email: {
      type: Boolean,
      default: true,
    },
    walletAddress: {
      type: String,
      required: true,
    },
  },
  {
    saveUnknown: true,
    timestamps: false,
  }
);

const UserModel = dynamoose.model("realium-users", UserSchema, {
  create: true,
});

export default UserModel;
