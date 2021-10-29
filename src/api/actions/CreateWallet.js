import useAVAX from "context/hooks/useAVAX";

const USERNAME = "robupchurch";
const PASSWORD = "Password1";
const PRIVATEKEY = "";

const CreateWallet = async () => {
  let { CChain } = useAVAX();

  debugger;
  await CChain.importKey(USERNAME, PASSWORD, PRIVATEKEY);
};

export default CreateWallet;
