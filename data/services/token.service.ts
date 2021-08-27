import axios from "axios";
import { Token } from "../interfaces/token.interface";

export default class ApiTokenService {
  public getTokens() {
    return axios.get<Token>(
      `${process.env.NEXT_PUBLIC_DJANGO_URL}/api/tokens/`
    );
  }

  public getPropertyTokens(id: String) {
    return axios.get<Token>(
      `${process.env.NEXT_PUBLIC_DJANGO_URL}/api/tokens/?property=${id}`
    );
  }

  public getPropertyTokensByUser(ownerId: String, propertyId: String) {
    return axios.get<Token>(
      `${process.env.NEXT_PUBLIC_DJANGO_URL}/api/tokens/?owner=${ownerId}&property=${propertyId}`
    );
  }

  public getUserTokens(id: String) {
    return axios.get<Token>(
      `${process.env.NEXT_PUBLIC_DJANGO_URL}/api/tokens/?owner=${id}`
    );
  }

  public searchTokens(searchInput: String, id: String) {
    return axios.get<Token>(
      `${process.env.NEXT_PUBLIC_DJANGO_URL}/api/tokens/?owner=${id}&search=${searchInput}`
    );
  }

  public getListedTokensForPropertyId(id: String) {
    return axios.get<Token>(
      `${process.env.NEXT_PUBLIC_DJANGO_URL}/api/tokens/?property=${id}&listed=true`
    );
  }

  public postToken(data: Token) {
    return axios.post<Token>(
      `${process.env.NEXT_PUBLIC_DJANGO_URL}/api/tokens/`,
      data
    );
  }

  //may not be necessary
  public patchToken(data: Partial<Token>) {
    return axios.patch<Token>(
      `${process.env.NEXT_PUBLIC_DJANGO_URL}/api/tokens/`,
      data
    );
  }
}
