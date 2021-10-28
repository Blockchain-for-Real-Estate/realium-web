import { useQuery } from "react-query";
import axios from "axios";

export const GetProperties = async () => {
  const { data: listings } = await axios.get(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/properties`
  );
  return listings;
};

export const QUERY_KEY = "PROPERTIES";

export default function useProperties() {
  return useQuery(QUERY_KEY, GetProperties, {
    staleTime: 1 * 60 * 1000, // 1 MINUTE
  });
}
