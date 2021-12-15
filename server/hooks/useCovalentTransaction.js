import axios from "axios";

const useCovalentTransactions = (userAddress) => {
  const api = axios.create({
    baseURL: `https://api.covalenthq.com`
  });

  return api;
};

export default useCovalentTransactions;

export const GetUserTransactions = async (userAddress) => {
    const transactions = await axios.get(
      `https://api.covalenthq.com/v1/43113/address/${userAddress}/transactions_v2/?quote-currency=USD&format=JSON&block-signed-at-asc=false&no-logs=false&key=ckey_71eafbaa6966417db4594061227`  
    );
    return transactions.data.data.items;
  };


