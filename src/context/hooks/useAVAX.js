import { Avalanche } from "avalanche";

const NETWORK = "api.avax-test.network";
const PORT = 443;
const PROTOCOL = "https";
const NETWORK_ID = 1;

const useAVAX = () => {
  let AVAX = new Avalanche(NETWORK, PORT, PROTOCOL, NETWORK_ID);

  return {
    XChain: AVAX.XChain(),
    CChain: AVAX.CChain(),
  };
};

export default useAVAX;
