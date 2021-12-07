import { ethers } from "ethers";
import RealiumContractAbi from "src/data/abis/RealiumContractAbi.json";
import useAvalanchePublic from "./useAvalanchePublic";

//TODO: dynamically pull in smart contracts from api
const CONTRACT_ADDRESSES = ["0x1630BDb93d1fA86122f909b413403FbDd43D7790",
                            "0x29D0dc8CEA65DE50a87b9f0D98B841ebbE03fbD0",
                            "0x5CAe5485868cEb081E9A252A4DEE15FD26A43AED",
                            "0xaa7Bf0Ed9Ae51cdF88616612620e9502E5cd5f55",
                            "0x750c17B6C4DB27E516A812149A75a3c9E60fA5D9",
                            "0xC17c7CF1d567f8A4770D1D19A6Fa6A6757FCB619"];

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
