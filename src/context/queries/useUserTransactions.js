import { useQuery } from "react-query";
import useUser from "./useUser";
import axios from "axios";

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

export const GetUserTransactions = async (userAddress) => {
  const transactions = await axios.get(
    `https://api.covalenthq.com/v1/43113/address/${userAddress}/transactions_v2/?quote-currency=USD&format=JSON&block-signed-at-asc=false&no-logs=false&key=ckey_71eafbaa6966417db4594061227`  
  );
  return transactions.data.data.items;
};

export const QUERY_KEY = "USER_TRANSACTIONS";

export default function useUserTransactions() {
  const { data: user } = useUser();
  return useQuery(
    [QUERY_KEY, user?.attributes.sub],
    () => GetUserTransactions(user.attributes["custom:wallet"]),
    {
      enabled: !!user,
    }
  );
}
