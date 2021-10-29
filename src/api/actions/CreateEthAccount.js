import useAVAX from "context/hooks/useAVAX";
import Wallet from "ethereumjs-wallet";

const USERNAME = "Rob";
const PASSWORD = "Password1";

const CreateEthAccount = async () => {
  let { CChain } = useAVAX();
  const privateKey = Wallet.generate().getPrivateKeyString();
  debugger;

  const account = await CChain.importKey(USERNAME, PASSWORD, privateKey);
};

export default CreateEthAccount;
