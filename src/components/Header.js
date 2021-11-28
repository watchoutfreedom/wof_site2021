import Link from "next/link";
import styles from "../styles/Header.module.scss";

export default function Header() {
    return (
        <header className={styles.header}>
            <Link href="/1">
                    <h1>WOF!</h1>
            </Link>
                    <h3>Thinking community & creative consultancy for all.</h3>
            <div className="links"><Link href="/">Projects</Link>/<Link href="/1b">Clients</Link></div>
        </header>
    );
}
