import Coin from "../models/coin";
import CoinChip from "./CoinChip";
import Searchbar from "./Searchbar";
import styles from "./Hero.module.scss";

const btc: Coin = {
    id: "",
    name: "Bitcoin",
    symbol: "BTC",
    iconUrl: "https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg",
    links: [],
    getPrice: async() => 38000.98,
}

const eth: Coin = {
    id: "",
    name: "Ethereum",
    symbol: "ETH",
    iconUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Ethereum-icon-purple.svg",
    links: [],
    getPrice: async() => 2935.98,
}

export default function Hero() {
  return (
    <div className={styles.container}> 
      <div className={styles.chipsContainer}>
        <CoinChip coin={btc} />
        <CoinChip coin={eth} />
      </div>
      <Searchbar />
    </div>
  );
}
