import { ethers } from "ethers";

const useAvalanchePublic = () => {
  const provider = new ethers.providers.JsonRpcProvider(
    process.env.NEXT_PUBLIC_AVALANCHE_API_URL
  );
  return { provider };
};

export default useAvalanchePublic;
