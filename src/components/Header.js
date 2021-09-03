import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <Link href="/">
                <a>
                    <h1>Wof!</h1>
                    <h3>Free and opensource ideas, projects and concepts for all</h3>
                </a>
            </Link>
            <div class="links"><a  href="mailto:mail@watchoutfreedom.com">Mail</a> - <a href="https://www.instagram.com/watchoutfreedom/">Instagram</a> - <a href="https://www.twitter.com/watchout_f/">Twitter</a></div>
        </header>
    );
}
