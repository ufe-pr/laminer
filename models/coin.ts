import CoinChip from "../components/CoinChip";

type Coin = {
    id: string,
    name: string,
    symbol: string,
    iconUrl: string,
    links: CoinLink[],
    getPrice(): Promise<number>,
};

export type CoinLink = {
    name: string,
    url: string,
};


export default Coin;
