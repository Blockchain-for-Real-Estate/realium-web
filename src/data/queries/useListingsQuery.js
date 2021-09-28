import { useQuery } from "react-query";
import axios from "axios";

export const GetProperties = async () => {
  const { data: listings } = await axios.get("/api/properties");
  return listings;
};

export const QUERY_KEY = "LISTINGS";

export default function useListingsQuery() {
  return useQuery(QUERY_KEY, GetProperties, {
    staleTime: 1 * 60 * 1000, // 1 MINUTE
  });
}
