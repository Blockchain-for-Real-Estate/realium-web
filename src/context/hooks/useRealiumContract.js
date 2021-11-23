import { ethers } from "ethers";
import RealiumContractAbi from "src/data/abis/RealiumContractAbi.json";
import useAvalanchePublic from "./useAvalanchePublic";

const CONTRACT_ADDRESS = "0x7e215E514b428d2B7C11eBD5daAf0A92c23F2278";

const useRealiumContract = () => {
  const { provider } = useAvalanchePublic();
  const RealiumContract = new ethers.Contract(
    CONTRACT_ADDRESS,
    RealiumContractAbi,
    provider
  );
  return RealiumContract;
};

export default useRealiumContract;
