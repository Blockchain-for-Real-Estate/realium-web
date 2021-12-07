import { ethers } from "ethers";
import RealiumContractAbi from "src/data/abis/RealiumContractAbi.json";
import useAvalanchePublic from "./useAvalanchePublic";

//TODO: dynamically pull in smart contracts from api
const CONTRACT_ADDRESSES = ["0x1630BDb93d1fA86122f909b413403FbDd43D7790",
                            "0x16d9415883a907B7021D8C1D84D41ce1316f8Ef4",
                            "0x1771366C9F7fc9E903c67ac4cE24674126c448B3",
                            "0xfA9Ac35d59A58A6e178872269C83a02f108270a9",
                            "0xfAA15f1ff49376ba6Ff118fE45A85039242418EA",
                            "0x51e6bFC6169c3Bc0f970c2Cb8d1D8E6cF17aa6ee"];

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
