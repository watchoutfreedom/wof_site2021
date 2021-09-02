import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <Link href="/">
                <a>
                    <h1>Wof!</h1>
                    <h3>Free and opensource projects and concepts for all</h3>
                </a>
            </Link>
        </header>
    );
}
