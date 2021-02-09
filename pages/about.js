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
        <h1 className={styles.title}>
              About
        </h1>
    
        <div>
            <p>I am a Computer Scientist currently employed at Ridgeline Manufacturing as a Project and Operations Manager working to automate their reactor equipment and increase production efficiency.</p>
            <p>In 2020 I was the project manager for a university based start-up with the goal of implementing a cloud based portal for QUT. From 2018 to 2019 I was responsible for developing business applications and supporting the production environment of a large food processing plant. I completed a Diploma of Software Development at Tafe Queensland in 2016 and was employed as a Computer Technician from 2012 to 2015.</p>
            <p>Upon completion of final course in my degree I plan to have a solid background in a range of development languages and techniques, with a sound understanding of cyber security and artificial intelligence applications. My hope is to work advancing the functionality, affordability, and sustainability of futuristic applications of technology.</p>
            </p>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
