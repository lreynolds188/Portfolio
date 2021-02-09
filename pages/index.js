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
          src="/profile.jpg" // Route of the image file
          classname={styles.borderCircle}
          height={160} // Desired size with correct aspect ratio
          width={160} // Desired size with correct aspect ratio
          alt="Luke Reynolds"
        />

        <h1 className={styles.title}>
          Luke Reynolds
        </h1>

        <div className={styles.grid}>
          <a href="/about" className={styles.card}>
            <h3>About &rarr;</h3>
            <p>Find in-depth information about myself and my goals</p>
          </a>

          <a href="/resume.html" className={styles.card}>
            <h3>Resume &rarr;</h3>
            <p>See past work and study experience.</p>
          </a>

          <a href="https://github.com/lreynolds188" className={styles.card}>
            <h3>GitHub &rarr;</h3>
            <p>Discover projects and past experience on GitHub.</p>
          </a>
    
          <a href="/quotes" className={styles.card}>
            <h3>Quotes &rarr;</h3>
            <p>Some famous quotes I have collected over time.</p>
          </a>
        </div>
      </main>
  )
}
