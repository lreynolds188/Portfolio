import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Luke Reynolds</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>  
        <h1 className={styles.title}>Mailbox.org Domain Email</h1>
    
        <div>
         <p>
            I am a Computer Scientist currently employed at Ridgeline Manufacturing as a Project and Operations Manager.
            I am responsible for maintaining the production environment and designing and implenting an automation system for the main reactor.
          </p>
          <p>
            In 2020 I was the project manager for a university based start-up with the goal of implementing a cloud
            based portal for QUT. In 2018 and 2019 I was responsible for developing business applications and supporting
            the production environment of a large food processing plant. In 2016 I completed a Diploma of Software Development
            at Tafe Queensland and from 2012 to 2015 was employed as a Computer Technician.
          </p>
          <p>
            Upon completion of my degree I plan to have a solid foundation in a range of differnet development
            languages and techniques, with a keen interest on cyber security, microsystems, and artificial intelligence.
            My hope is to work advancing the functionality, affordability, and sustainability of futuristic technological applications.
          </p>
        </div>
      </main>
    </div>
  )
}
