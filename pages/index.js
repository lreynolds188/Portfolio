import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Main.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Luke Reynolds</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charset="UTF-8" />
        <meta name="description" content="Portfolio for Luke Reynolds, computer scientist and owner of ATechSol, an online wiki and technical consulting firm based in Brisbane, Queensland." />
        <meta name="keywords" content="Luke, Reynolds, Portfolio, TheReynolds" />
        <meta name="author" content="Luke Reynolds" />
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
          <a href="/about" className={styles.card}>
            <h3>About &rarr;</h3>
            <p>Find out about myself and my future aspirations.</p>
          </a>
    
          <a href="/resume" className={styles.card}>
            <h3>Resume &rarr;</h3>
            <p>See past education and work experience.</p>
          </a>
    
          <a href="https://github.com/lreynolds188" className={styles.card}>
            <h3>GitHub &rarr;</h3>
            <p>Discover past, present, and future projects on GitHub.</p>
          </a>

          <a href="https://atechsol.thereynolds.com.au" className={styles.card}>
            <h3>ATechSol &rarr;</h3>
            <p>Open source and privacy based wiki.</p>
          </a>

          <a href="/quotes" className={styles.card}>
            <h3>Quotes &rarr;</h3>
            <p>Read some quotes i've collected over the years.</p>
          </a>
        </div>
      </main>
    </div>
  )
}
