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
          <a href="/tutorials/nextcloud-server" className={styles.cardwide}>
            <h3>Nextcloud Server Ubuntu 20.04 &rarr;</h3>
            <p>Setup a Nextcloud server featuring an NginX reverse proxy, SSL encryption, 2FA, Android connectivity, and VNC for remote maintenance</p>
          </a>
          <br />
          <a href="/tutorials/mailbox-org-domain" className={styles.cardwide}>
            <h3>Setup your own @domain email address's at mailbox.org</h3>
          </a>
        </div>
      </main>
    </div>
  )
}
