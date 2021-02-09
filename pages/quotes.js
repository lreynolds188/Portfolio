import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Luke Reynolds</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
        <div>
            <h1 className={styles.title}>
              Quotes
            </h1>
            <p>
            
            </p>
        </div>
      </main>
    </div>
  )
}
