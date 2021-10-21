import GetEthersProvider from "api/helpers/GetEthersProvider";
import UserModel from "api/models/User";
import WalletModel from "api/models/Wallet";

const CreateWallet = async (user) => {
  debugger;
  try {
    let wallet = await WalletModel.get(user.id);
    if (!wallet) {
      wallet = await WalletModel.create({ username: user.id });
    }

    let ETHERS = await GetEthersProvider("/ext/keystore");
    try {
      await ETHERS.send("keystore.createUser", {
        username: wallet.username,
        password: wallet.password,
      });
    } catch (error) {
      console.log(error.error.message);
    }

    ETHERS = await GetEthersProvider();
    const { address } = await ETHERS.send("avm.createAddress", {
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
