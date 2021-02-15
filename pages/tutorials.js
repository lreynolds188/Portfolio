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
        <Image
          src="/profile.jpg"
          alt="Luke Reynolds"
          width={180}
          height={180}
        />

        <h1 className={styles.title}>
          Luke Reynolds
        </h1>

        <div className={styles.grid}>
          <a href="/nextcloud-server" className={styles.card}>
            <h3>Nextcloud Server Ubuntu 20.04 &rarr;</h3>
            <p>In this tutorial I will explain how to setup a Nextcloud server featuring an NginX reverse proxy, vnc remote maintenance, 2 factor-authentication, and Android connectivity</p>
          </a>

          <a href="/resume" className={styles.card}>
            <h3>Resume &rarr;</h3>
            <p>See past education and work experience.</p>
          </a>

          <a href="https://github.com/lreynolds188" className={styles.card}>
            <h3>GitHub &rarr;</h3>
            <p>Discover my past, current, and future projects on GitHub.</p>
          </a>
    
          <a href="/tutorials.js" className={styles.card}>
            <h3>Tutorials &rarr;</h3>
            <p>Read some tutorials i've developed.</p>
          </a>
    
          <a href="/quotes" className={styles.card}>
            <h3>Quotes</h3>
            <p>View some quotes i've collected over the years.</p>
          </a>
        </div>
      </main>
    </div>
  )
}
