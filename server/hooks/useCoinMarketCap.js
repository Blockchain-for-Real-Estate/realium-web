import axios from "axios";

const useCoinMarketCap = () => {
  const api = axios.create({
    baseURL: process.env.COIN_MARKET_CAP_API_URL,
    headers: {
      "X-CMC_PRO_API_KEY": process.env.COIN_MARKET_CAP_API_KEY,
    },
  });

  return api;
};

export default useCoinMarketCap;
