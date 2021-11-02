import useAVAX from "context/hooks/useAVAX";

const ADDRESS = "C-avax18z5jl0lfgsg09zx5qcrq0tzj59kyq80mwzy9m8";
const PRIVATE_KEY =
  "PrivateKey-ZLjFHyaDAAqdbhxHnu7CJXut6JuyRPGzsw7U33F1mGWmGmUAT";

/**
 * Creates a new CChain wallet address
 * @param {*} userId the cognito sub id to connect this private key to
 * @returns returns a new wallet object
 */
const CreateWallet = async (userId) => {
  const { CChain } = useAVAX();
  const chain = CChain.keyChain();
  const keys = chain.makeKey();

  const wallet = {
    userId: userId,
    address: keys.getAddressString(),
    privateKey: keys.getPrivateKeyString(),
    publicKey: keys.getPublicKeyString(),
  };

  const addresses = chain.getAddressStrings();

  debugger;
  return wallet;
};

export const ReadWallet = async () => {
  const { CChain } = useAVAX();
  const chain = CChain.keyChain();

  const key = chain.importKey(PRIVATE_KEY);
  const adddress = key.getAddressString();

  CChain.getAssetBalance(adddress, 1, "AVAX");

  const addresses = chain.getAddressStrings();
  debugger;
};

export default CreateWallet;
