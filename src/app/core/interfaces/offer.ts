import { RoutingButton } from "./navigation";

export interface Offer {
    title: string;
    location: string;
    description: string;
    dates: string;
    buttons:RoutingButton[];
    price: string;
    oldprice: string;
}