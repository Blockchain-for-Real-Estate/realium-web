import useUser from "./useUser";
import { useQuery } from "react-query";
import useRealiumContract from "../hooks/useRealiumContract";
import { ethers } from "ethers";

export const GetUserAssets = async ( smartContractAddress, { user }) => {
  const RealiumContract = useRealiumContract(smartContractAddress);
  const response = await RealiumContract.balanceOf(
    user.attributes["custom:wallet"]
  );
  return ethers.utils.formatEther(response);
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
