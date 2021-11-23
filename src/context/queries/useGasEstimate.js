import { useQuery } from "react-query";
import useAvalanchePublic from "../hooks/useAvalanchePublic";
import { ethers } from "ethers";
import CreateAvaxSendTx from "src/utilities/avax/CreateAvaxSendTx";

export const GetGasEstimate = async ({ toAddress, amount }) => {
  const { provider } = useAvalanchePublic();
  const tx = CreateAvaxSendTx(toAddress, amount);
  const gas = await provider.estimateGas(tx);
  return ethers.utils.formatEther(gas);
};

export const QUERY_KEY = "GAS_FEE";
export default function useGasEstimate(toAddress, amount, enabled) {
  return useQuery([QUERY_KEY], () => GetGasEstimate({ toAddress, amount }), {
    staleTime: 0,
    cacheTime: 0,
    refetchInterval: 5 * 1000,
    enabled,
  });
}
