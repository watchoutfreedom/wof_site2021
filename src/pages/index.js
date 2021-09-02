import Header from '../components/Header'
import Head from 'next/head'
import Post from '../components/Post'
import styles from '../styles/Home.module.css'

import { getAllFilesMetadata } from '../../lib/mdx'

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>TNF radar</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <div className={styles.container}>
        <Header />
        <main className={styles.articles}>
          <article>
            {
              posts.map(({title, slug, date, img}) => <Post title={title} slug={slug} date={date} img={img} key={slug}/>)
            }
          </article>
        </main>
      </div>
    </>
  )
};


export async function getStaticProps() {

  const posts = await getAllFilesMetadata();

  return {
    props: {posts}
  }
}