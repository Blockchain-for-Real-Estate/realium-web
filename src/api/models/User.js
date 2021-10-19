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
