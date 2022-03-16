import Link from "next/link";
import useEffect from "react";
import styles from "../styles/Header.module.scss";
import { useRouter } from 'next/router'

export default function Header() {
    const router = useRouter()
    const esp = router.asPath.includes('_es') ? true : false;
    const url = router.asPath.includes('_es') ? '/1_es' : '/1';

    return (
        <header className={styles.header}>
            <Link href={url}>
                    <h1>WOF!</h1>
            </Link>
            <div className="links">
              <Link href="/0_services">Services</Link>/<Link href="/0_clients">Clients</Link>/<Link href="/0_projects">Projects</Link>/<Link href="/blog">Blog</Link>
            </div>
        </header>
    );
}
