import { ethers } from "ethers";

const NETWORK = "https://ava.realium.io";

const GetEthersProvider = async (endpoint = "/ext/bc/X") => {
  return new ethers.providers.JsonRpcProvider(`${NETWORK}${endpoint}`);
};

export default GetEthersProvider;
