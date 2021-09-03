import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Post.module.css";

export default function Post({ title, slug, date, img, alt }) {
    return (
        <>
            <Link href={slug}>
                <a>
                    <div className={styles.post}>
                        <div className={styles.postImg}>
                        </div>
                        <div className={styles.postInfo}>
                            <h3>{title}</h3>
                            <div>
                                <time dateTime={date}>{date}</time>
                            </div>
                        </div>
                    </div>
                </a>
            </Link>
        </>
    );
}
