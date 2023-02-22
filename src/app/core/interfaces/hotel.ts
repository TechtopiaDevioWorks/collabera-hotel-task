import { DiscoverMore } from "./discoverMore";

export interface MinStayData {
    region: string;
    regionName: string;
    hotel: string;
    hotelName: string;
    imgUrl?: string;
}

export interface StayData extends MinStayData {
    info: DiscoverMore[]
}