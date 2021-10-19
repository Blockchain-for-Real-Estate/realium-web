import { useQuery } from "react-query";
import axios from "axios";

export const GetUser = async () => {
  const { data: listings } = await axios.get("/api/user");
  return listings;
};

export const QUERY_KEY = "USER";

export default function useUser() {
  return useQuery(QUERY_KEY, GetUser, {
    staleTime: 5 * 60 * 900, // Just under 5 minutes
  });
}
