import { ethers } from "ethers";
import RealiumContractAbi from "src/data/abis/RealiumContractAbi.json";
import useAvalanchePublic from "./useAvalanchePublic";

const CONTRACT_ADDRESSES = ["0xaF16CA313dB18F919Da617F8175EB86be6888644",
                            "0x38B42ebB2FCbe6C7f76C41Cf64B8dE035553CFC0",
                            "0xDa766d8f5b8A03F5993c76eaB855Fd6Ee71e7837",
                            "0x5eB296D15ED6444A1d2AE68D68e432B8949aeA5C",
                            "0x0e8246D3787287825C3f3565Ec049c44A5E8Bf54",
                            "0x9f581D5D991efc4eAD9CF023e46c1b80C210f8Ad"];

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
