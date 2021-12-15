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

export const GetUserTransactions = async () => {
  const { data: txns } = await axios.get(`/api/transactions`);
  return txns;
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

// import { useQuery } from "react-query";
// import axios from "axios";

// export const GetTransactions = async () => {
//   const { data: AVAX } = await axios.get(`/api/transactions`);
//   return AVAX;
// };

// export const QUERY_KEY = "AVAX_PRICE";
// export default function useAVAX() {
//   return useQuery([QUERY_KEY], GetAVAX, {
//     // refetchInterval: 15 * 1000,
//   });
// }


