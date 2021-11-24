import Header from '../components/Header'
import Head from 'next/head'
import Post from '../components/Post'
import styles from '../styles/Home.module.css'

import { getAllFilesMetadata } from '../../lib/mdx'

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Wof!</title>
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
      <script src="https://utteranc.es/client.js"
              repo="https://github.com/watchoutfreedom/wof_site2021"
              issue-term="url"
              label="Comment"
              theme="github-light"
              crossOrigin="anonymous"
              async>
      </script>
    </>
  )
};


export async function getStaticProps() {

  const posts = await getAllFilesMetadata();

  return {
    props: {posts}
  }
}
