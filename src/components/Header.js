import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <Link href="/">
                    <h1>Wof!</h1>
            </Link>
                    <h3>Thinking community and concept consultancy for all. <a href="http://watchoutfreedom.com/1">More info</a></h3>
            <div className="links"><a href="mailto:mail@watchoutfreedom.com">Mail</a>/<a href="https://www.instagram.com/watchoutfreedom/">Instgrm</a>/<a href="https://www.twitter.com/watchout_f/">Twttr</a></div>
        </header>
    );
}
