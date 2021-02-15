import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Luke Reynolds</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Tutorials</h1>

        <div className={styles.grid}>
          <a href="/nextcloud-server" className={styles.card}>
            <h3>Nextcloud Server Ubuntu 20.04 &rarr;</h3>
            <p>In this tutorial I will explain how to setup a Nextcloud server featuring an NginX reverse proxy, 2-FA, Android connectivity, and VNC for remote maintenance</p>
          </a>

          <a href="/moretocome" className={styles.card}>
            <h3>More coming soon! &rarr;</h3>
          </a>
        </div>
      </main>
    </div>
  )
}
