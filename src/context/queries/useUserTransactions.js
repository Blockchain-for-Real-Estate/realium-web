import { useQuery } from "react-query";
import useUser from "./useUser";

const SAMPLE_TRANSACTIONS = [
  {
    eventType: "LIST",
    listedPrice: 0.3,
    quantity: 2,
    txNFTId: "sample",
    eventDateTime: new Date(new Date(2021, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2021, 0, 1).getTime())),
    property: "Park Center"
  },
  {
    eventType: "LIST",
    listedPrice: 0.8,
    quantity: 1,
    txNFTId: "sample",
    eventDateTime: new Date(new Date(2021, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2021, 0, 1).getTime())),
    property: "Hill's Edge"
  }
]

export const GetUserTransactions = async () => {
  const transactions = SAMPLE_TRANSACTIONS;
  return transactions;
};

export const QUERY_KEY = "USER_TRANSACTIONS";

export default function useUserTransactions() {
  const { data: user } = useUser();
  return useQuery(
    [QUERY_KEY, user?.attributes.sub],
    () => GetUserTransactions(),
    {
      enabled: !!user,
    }
  );
}
