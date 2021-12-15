import { axios } from "axios";

const useCovalentTransactions = async (userAddress) => {
const transactions = await axios.get(
    `https://api.covalenthq.com/v1/43113/address/${userAddress}/transactions_v2/?quote-currency=USD&format=JSON&block-signed-at-asc=false&no-logs=false&key=${process.env.COVALENT_API_KEY}`  
    );
  return { transactions };
};

export default useCovalentTransactions;
