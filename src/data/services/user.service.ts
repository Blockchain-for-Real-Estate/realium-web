import { django_environment as environment } from "../../environment"
import axios from 'axios'
import { User } from "../interfaces/user.interface";

export class ApiUserService {
  
    public getUser(id: string, token: string) {
      // const headers = {
      //   "Authorization": "Token " + token
      // }
      return axios.get<User>(
        `${environment.api}/api/users/?email=${id}`,
        // {headers}
      );
    }
  
    public postUser(data: User) {
      return axios.post<User>(
        `${environment.api}/api/register/`,
        data
      );
    }

    public login(data: JSON) {
      return axios.post(
        `${environment.api}/api/auth/`,
        data
      );
    }

    public logout() {
      sessionStorage.removeItem('token');
    }
  
    //may not be necessary
    public patchUser(data: Partial<User>) {
      return axios.patch<User>(
        `${environment.api}/api/users/`,
        data
      );
    }
  }