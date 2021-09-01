import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <Link href="/">
                <a>
                    <h1>Wof!</h1><h2>Free and opensource concept studio for a better world</h2>
                </a>
            </Link>
        </header>
    );
}
