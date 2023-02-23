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
    rooms?: RoomData[]
}

export interface RoomData {
    room: string;
    roomName: string;
    description: string;
    imgUrlList: string[];
}