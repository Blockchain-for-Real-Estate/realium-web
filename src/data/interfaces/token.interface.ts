import { Property } from "./property.interface";
import { User }  from "./user.interface";

export interface Token {
    purchasedPrice: number;
    listedPrice: number;
    listed: boolean;
    property: Property;
    owner: User;
}