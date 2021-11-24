import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <Link href="/">
                <a>
                    <h1>Wof!</h1>
                    <h3>Opensource projects, thinking community and concept consultancy for all</h3>
                </a>
            </Link>
            <div className="links"><a href="mailto:mail@watchoutfreedom.com">Mail</a>/<a href="https://t.me/+ild_m4EMsEk2ZTE0">Telegram</a>/<a href="https://www.instagram.com/watchoutfreedom/">Instagram</a>/<a href="https://www.twitter.com/watchout_f/">Twitter</a></div>
        </header>
    );
}
