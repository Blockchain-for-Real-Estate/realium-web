import { django_environment as environment} from "../../environment"
import axios from 'axios'
import { Event } from "../interfaces/event.interface";

export class ApiEventService {

    public getTransactions() {
      return axios.get<Event>(
        `${environment.api}/api/events/`
      );
    }

    public getFilteredTransactions(id: String) {
        return axios.get<Event>(
          `${environment.api}/api/events?property=${id}`
        );
    }

    public getEventsByUserId(id: String) {
      return axios.get<Event>(
        `${environment.api}/api/events?eventCreator=${id}`
      )
    }

    public getEventsForTokenId(id: string) {
      return axios.get<Event>(
        `${environment.api}/api/events?eventType=LIST&token=${id}`
      )
    }

    public postTransaction(data: Event, token: string) {
      const headers = {
        "Authorization": "Token " + token,
      }
      return axios.post<Event>(
        `${environment.api}/api/events/`,
        data,
        {headers}
      );
    }

    //may not be necessary
    public patchTransaction(data: Partial<Event>) {
      return axios.patch<Event>(
        `${environment.api}/api/events/`,
        data
      );
    }
  }
