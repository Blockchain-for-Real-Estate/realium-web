import { avax_environment as environment} from "../../environment"
import axios from 'axios'

export class ApiBalanceService {
    
    public getBalance(wallet: string, id: string) {
      return axios.post(
        `${environment.api}`,
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