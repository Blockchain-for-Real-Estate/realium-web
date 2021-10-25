import useAVAX from "context/hooks/useAVAX";
import UserModel from "api/models/User";
import WalletModel from "api/models/Wallet";

const CreateWallet = async (user) => {
  let AVAX = await useAVAX("/ext/keystore");
  debugger;
  try {
    let wallet = await WalletModel.get(user.id);
    if (!wallet) {
      wallet = await WalletModel.create({ username: user.id });
    }

    try {
      await AVAX.send("keystore.createUser", {
        username: wallet.username,
        password: wallet.password,
      });
    } catch (error) {
      console.log(error.error.message);
    }

    const { address } = await AVAX.send("avm.createAddress", {
      username: wallet.username,
      password: wallet.password,
    });

    user.walletAddress = address;
    await UserModel.update(user);
  } catch (error) {
    debugger;
    console.error(error);
  }
};

export default CreateWallet;
