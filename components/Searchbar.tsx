import styles from "./Searchbar.module.scss";
import { IoIosSearch} from "react-icons/io";

export default function Searchbar() {
  return (
    <div className={styles.container}>
      <IoIosSearch />
      <input type='text' placeholder='Search for a cryptocurrency' />
    </div>
  );
}
