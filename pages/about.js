import Head from 'next/head'
import styles from '../styles/Main.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Luke Reynolds</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>  
        <h1 className={styles.title}>About</h1>
        <div>
        <br />
         <p className={styles.description}>
            I am a Computer Scientist and owner of <a href="https://automatedtechnicalsolutions.com">Automated Tech Solutions</a> a technical consulting firm.
            I currently still have one subject remaining on my degree and am the sole member of my business
            working to implement infrastructure and build the customer base.
          </p><br /><br />
          <p className={styles.description}>
            In 2021 I was employed as a Project and Operations manager responsible for supporting the production environment 
            and implementing an IoT automation system for the company's primary reactor. 
            In 2020 I was the project manager for a university based start-up with the goal of implementing a cloud
            based portal for QUT. In 2018 and 2019 I was responsible for developing business applications and supporting
            the production environment of a large food processing plant. In 2016 I completed a Diploma of Software Development
            at Tafe Queensland and from 2012 to 2015 was employed as a Computer Technician.
          </p><br /><br />
          <p className={styles.description}>
            Upon completion of my degree I plan to have a solid foundation in a range of differnet development
            languages and techniques, with a keen interest in cyber security, microsystems, and IoT automation devices.
            My hope is to work toward advancing the functionality, affordability, and sustainability of futuristic technological applications.
          </p>
        </div>
      </main>
    </div>
  )
}
