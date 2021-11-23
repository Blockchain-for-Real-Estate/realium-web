import { ethers } from "ethers";
import RealiumContractAbi from "src/data/abis/RealiumContractAbi.json";
import useAvalanchePublic from "./useAvalanchePublic";

const useRealiumContract = (smartContractAddress) => {
  const { provider } = useAvalanchePublic();
  const RealiumContract = new ethers.Contract(
    smartContractAddress,
    RealiumContractAbi,
    provider
  );
  return RealiumContract;
};

export default useRealiumContract;
