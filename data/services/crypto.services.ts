import axios from 'axios'
import { Avax } from "../interfaces/avax.interface";

export class ApiAVAXService {

    public getAvaxAmount() {
        return axios.get<Avax>(
            'https://min-api.cryptocompare.com/data/pricemulti?fsyms=AVAX&tsyms=USD'
        );
    }
}