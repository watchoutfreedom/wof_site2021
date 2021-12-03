import Link from "next/link";
import styles from "../styles/Header.module.scss";

export default function Header() {
    return (
        <header className={styles.header}>
            <Link href="/1">
                    <h1>WOF!</h1>
            </Link>
                    <h3>The collective idea.</h3>
            <div className="links"><Link href="/0_projects">Projects</Link>/<Link href="/0_clients">Clients</Link>/<Link href="/">Blog</Link></div>
        </header>
    );
}
