import axios from "axios";
import { Property } from "../interfaces/property.interface";

export default class ApiPropertyService {
  public getAssets() {
    return axios.get<Property>(
      `${process.env.NEXT_PUBLIC_DJANGO_URL}/api/properties/`
    );
  }

  public getAssetById(id: String) {
    return axios.get<Property>(
      `${process.env.NEXT_PUBLIC_DJANGO_URL}/api/properties?propertyId=${id}`
    );
  }

  public getAssetShareListings(id: String) {
    return axios.get<Property>(
      `${process.env.NEXT_PUBLIC_DJANGO_URL}/api/properties?avalancheAssetId=${id}&listed=true`
    );
  }

  public getAssetBySearchTerm(term: String) {
    return axios.get<Property>(
      `${process.env.NEXT_PUBLIC_DJANGO_URL}/api/properties?search=${term}`
    );
  }

  public postAsset(data: Property) {
    return axios.post<Property>(
      `${process.env.NEXT_PUBLIC_DJANGO_URL}/api/properties`,
      data
    );
  }

  //may not be necessary
  public patchAsset(data: Partial<Property>) {
    return axios.patch<Property>(
      `${process.env.NEXT_PUBLIC_DJANGO_URL}/api/properties`,
      data
    );
  }
}
