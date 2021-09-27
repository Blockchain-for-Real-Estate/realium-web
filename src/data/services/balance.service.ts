import axios from 'axios'

export class ApiBalanceService {
    
    public getBalance(wallet: string, id: string) {
      return axios.post(
        `${process.env.NEXT_PUBLIC_AVAX_URL}`,
        {
            "jsonrpc":"2.0",
            "id"     : 1,
            "method" :"avm.getBalance",
            "params" :{
                "address":`${wallet}`,
                "assetID": "AVAX"
            }
        }
      )
    }
}