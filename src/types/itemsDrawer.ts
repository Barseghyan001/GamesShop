export interface ItemsGames {
    id?:string | number;
    title:string | undefined;
    price:string | number | undefined;
    img:string | undefined;
}

export interface StateItems {
    items:ItemsGames[];
    loading:boolean;
    error:null | string | undefined;
}