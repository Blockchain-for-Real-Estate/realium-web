import { useQuery } from "react-query";
import axios from "axios";

export const GetProperties = async () => {
  const { data: properties } = await axios.get(`/api/properties`);
  return properties;
};

export const QUERY_KEY = "PROPERTIES";

export default function useProperties() {
  return useQuery(QUERY_KEY, GetProperties, {
    staleTime: 1 * 60 * 1000, // 1 MINUTE
  });
}
