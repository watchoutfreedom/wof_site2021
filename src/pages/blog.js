import Header from '../components/Header'
import Head from 'next/head'
import Post from '../components/Post'
import Link from "next/link";
import styles from '../styles/Home.module.scss'

import { getAllFilesMetadata } from '../../lib/mdx'

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Wof! - Watch Out, Freedom! - Cuidado, libertad! </title>
        <link rel="icon" href="./favicon.ico" />
        <link
          rel="preload"
          href="/styles/fonts/wof.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <div className={styles.container}>
        <Header />
        <main className={styles.articles}>
          <article>
            {
              posts.map(({title, slug, date, img, blog, comments}) => {
                if (blog)
                {return <Post title={title} slug={slug} date={date} img={img} key={slug} blog={blog} comments={comments}/>}
              })
            }
          </article>
        </main>
        <div className={styles.actions}>
            <div>
              <a href="https://t.me/+-2Lm3l9PlbAxMjU0">Check Telegram!</a>
            </div>
        </div>
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
