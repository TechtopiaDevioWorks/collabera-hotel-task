export interface HeaderButton{
    title: string;
    icon?: string;
    url?: string;
    urlParams?: string;
    items?: HeaderButton[]
}

export interface RoutingButton {
    text: string;
    url: string;
}