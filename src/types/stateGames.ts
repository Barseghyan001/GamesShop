export type GamesArray = {
    id:string | number | undefined;
    title:string;
    price:string | number;
    img:string;
}


export interface StateGames {
    games:GamesArray[];
    loading:boolean;
    error:string | null | undefined
}
export interface InfiGame  {
    info:null | GamesArray;
    loading:boolean;
    error:string | null | undefined
}