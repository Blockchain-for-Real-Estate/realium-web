import axios from 'axios'
import { Event } from "../interfaces/event.interface";

export class ApiEventService {

    public getTransactions() {
      return axios.get<Event>(
        `${process.env.NEXT_PUBLIC_DJANGO_URL}/api/events/`
      );
    }

    public getFilteredTransactions(id: String) {
        return axios.get<Event>(
          `${process.env.NEXT_PUBLIC_DJANGO_URL}/api/events?property=${id}`
        );
    }

    public getEventsByUserId(id: String) {
      return axios.get<Event>(
        `${process.env.NEXT_PUBLIC_DJANGO_URL}/api/events?eventCreator=${id}`
      )
    }

    public getEventsForTokenId(id: string) {
      return axios.get<Event>(
        `${process.env.NEXT_PUBLIC_DJANGO_URL}/api/events?eventType=LIST&token=${id}`
      )
    }

    public postTransaction(data: Event, token: string) {
      const headers = {
        "Authorization": "Token " + token,
      }
      return axios.post<Event>(
        `${process.env.NEXT_PUBLIC_DJANGO_URL}/api/events/`,
        data,
        {headers}
      );
    }

    //may not be necessary
    public patchTransaction(data: Partial<Event>) {
      return axios.patch<Event>(
        `${process.env.NEXT_PUBLIC_DJANGO_URL}/api/events/`,
        data
      );
    }
  }
