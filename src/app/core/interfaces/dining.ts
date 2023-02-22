import { DiscoverMore } from "./discoverMore";
import { MinStayData } from "./hotel";

export interface MinDiningData {
    dining: string;
    diningName: string;
    description: string;
    imgUrl?: string;
}
export interface DiningData extends MinDiningData{
    info: DiscoverMore[];
    available: MinStayData[];
}
