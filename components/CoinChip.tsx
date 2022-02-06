import { useEffect, useState } from "react";
import Coin from "../models/coin";
import styles from "./CoinChip.module.scss";
import numeral from "numeral";

interface CoinChipProps {
  coin: Coin;
}

export default function CoinChip({ coin }: CoinChipProps) {
  const [price, setPrice] = useState<number | null>(null);
  useEffect(() => {
    coin.getPrice().then(setPrice);
  }, [price, coin]);
  return (
    <div className={styles.container}>
      <img src={coin.iconUrl} alt={coin.name + " icon"} />
      <div>
        <h3>{coin.name}</h3>
        {price && <span> {numeral(price).format("$0,0.00")}</span>}
      </div>
    </div>
  );
}
