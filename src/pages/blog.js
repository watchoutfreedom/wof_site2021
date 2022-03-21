import Header from '../components/Header'
import Head from 'next/head'
import Post from '../components/Post'
import Link from "next/link";
import styles from '../styles/Home.module.scss'

import React, { useEffect } from "react";
import Router from 'next/router'

export default function Blog() {

  useEffect(() => {
     const {pathname} = Router
     if(pathname == '/blog' ){
         Router.push('/')
     }
   });

  return (
    <>
      <Head>

      </Head>
      <div className={styles.container}>
        <Header />
      </div>

    </>
  )
};
