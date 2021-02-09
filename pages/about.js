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
            <p>
            I am a Computer Scientist currently employed at Ridgeline Manufacturing as a Project and Operations Manager
            working to automate their reactor equipment and increase production efficiency.
            
            In 2020, I was the project manager for a university based start-up with the goal of implementing a cloud
            based portal for QUT. From 2018 to 2019, I was responsible for developing business applications and supporting
            the production environment of a large food processing plant. In 2016, I completed a Diploma of Software Development
            at Tafe Queensland and was employed as a Computer Technician from 2012 to 2015.
            
            Upon completion of my degree I plan to have a solid background of understanding in a range of development
            languages and techniques, with a sound knowledge of cyber security and artificial intelligence.
            My hope is to work advancing the functionality, affordability, and sustainability of futuristic technological applications.
            </p>
        </div>
      </main>
    </div>
  )
}
