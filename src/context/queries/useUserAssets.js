import useUser from "./useUser";
import { useQuery } from "react-query";
import useRealiumContract from "../hooks/useRealiumContract";
import { ethers } from "ethers";

export const GetUserAssets = async ({ user }) => {
  const RealiumContracts = useRealiumContract();
  let contracts = {}
  RealiumContracts.forEach(async (contract) => {
    const response = await contract.balanceOf(
      user.attributes["custom:wallet"]
    );
    contracts[contract.address] = response
  })
  return contracts
};

export const QUERY_KEY = "USER_ASSETS";

export default function useUserAssets() {
  const { data: user } = useUser();
  return useQuery(
    [QUERY_KEY, user?.attributes.sub],
    () => GetUserAssets({ user }),
    {
      enabled: !!user,
    }
  );
}
