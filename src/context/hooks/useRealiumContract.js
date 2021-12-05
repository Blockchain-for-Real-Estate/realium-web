import { ethers } from "ethers";
import RealiumContractAbi from "src/data/abis/RealiumContractAbi.json";
import useAvalanchePublic from "./useAvalanchePublic";

//TODO: dynamically pull in smart contracts from api
const CONTRACT_ADDRESSES = ["0x344F007710A8a9D4071De07ac47ce873aF3dE403",
                            "0xcEd747ea1F93d527DC2b3ef83A5bcBc0905aF059",
                            "0x1C773aA208e20503E61E1062eCa249a1817BE901",
                            "0xedEB8F75aD3baB472719a97F40c86e2e9F660314",
                            "0x3d12fEA8463e09021705b4432d482C5ac14b885D",
                            "0x8F3727B5Ba1812bfB34fb3133758Fd06614f6a7F"];

const useRealiumContract = () => {
  const { provider } = useAvalanchePublic();
  let RealiumContracts = [];
  CONTRACT_ADDRESSES.forEach((address) => {
    RealiumContracts.push(
      new ethers.Contract(
        address,
        RealiumContractAbi,
        provider
    ));
  })
  return RealiumContracts;
};

export default useRealiumContract;
