import Link from "next/link";
import styles from "./Header.module.scss";
import Logo from "./logo.svg";


export default function Header() {
  return (
    <header className={styles.container}>
      <h1 className={styles.logo}>
        <Link href='/'>
          <a>
            <Logo height={71} width={86} viewBox="0 0 86 71" /> {" "}
            <span>Laminer</span>
          </a>
        </Link>
      </h1>
    </header>
  );
}
