import { MDXRemote } from "next-mdx-remote";
import Head from 'next/head';
import { getFileBySlug, getFiles } from "../../lib/mdx";
import Header from "../components/Header";
import Image from "next/image";
import styles from '../styles/Home.module.css';


export default function Post({ source, frontmatter }) {

    return (
        <>
            <Head>
                <title>{frontmatter.title}</title>
               {/*  <link rel="icon" href="/favicon.ico" /> */}

                <meta name="description" content={frontmatter.description} />

                {/*  <!-- Google / Search Engine Tags --> */}
                {/* <meta itemProp="name" content="andresargote | Compartiendo aprendizaje sobre programación y criptomonedas" /> */}
                <meta itemProp="description" content={frontmatter.description} />
                <meta itemProp="image" content={frontmatter.img} />

                {/* <!-- Facebook Meta Tags --> */}
                {/* <meta property="og:url" content="https://andresargote.dev" /> */}
                <meta property="og:type" content="website" />
                {/* <meta property="og:title" content="andresargote | Compartiendo aprendizaje sobre programación y criptomonedas" /> */}
                <meta property="og:description" content={frontmatter.description} />
                <meta property="og:image" content={frontmatter.img} />

                {/* <!-- Twitter Meta Tags --> */}
                {/* <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="andresargote | Compartiendo aprendizaje sobre programación y criptomonedas" /> */}
                <meta name="twitter:description" content={frontmatter.description} />
                <meta name="twitter:image" content={frontmatter.img} />
            </Head>

            <div className={styles.container}>
                <Header />
                <main className={styles.articles}>
                    <Image className={styles.img} src={frontmatter.img} alt={frontmatter.alt} width={600} height={600}/>
                    <MDXRemote {...source} />
                </main>
            </div>
        </>
    );
};

export async function getStaticProps({ params }) {
    const { source, frontmatter } = await getFileBySlug(params.slug);

    return {
        props: {
            source,
            frontmatter
        }
    }
};

export async function getStaticPaths() {
    const posts = await getFiles();
    const paths = posts.map((post) => ({
        params: {
            slug: post.replace(/\.mdx/, ""),
        },
    }));

    return {
        paths,
        fallback: false,
    };
}