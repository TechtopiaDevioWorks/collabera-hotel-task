import { RoutingButton } from "./navigation";

export interface Offer {
    offerId: string;
    title: string;
    hotel: string;
    room: string;
    location: string;
    description: string;
    dates: string;
    buttons:RoutingButton[];
    price: string;
    oldprice: string;
}