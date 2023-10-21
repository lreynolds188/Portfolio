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
            At the start of my career I worked as a Computer Technician for a range of different companies between 2012 and 2015. In 2016 I received a Diploma of Software Development from TAFE Queensland. In 2018 and '19 I was employed by a large food processing plant and was responsible for developing business applications and supporting the production environment. In 2020 I was the Project Manager for a university based start-up with the goal of implementing a cloud based AI integrated portal for QUT. In my last position as a Project & Operations Manager I was responsible for implementing an IoT automation system for the company's primary concentrator and supporting the production environment. In 2021 I received a Bachelor's Degree in Computer Science from the Queensland University of Technology. I am currently working as an Uber Eats contractor and running my own tech support business and online wiki.

            I have a solid foundation in a range of different development languages and techniques with a keen interest in privacy, security, open source software, blockchain technology, and IoT devices.
          </p>
        </div>
      </main>
    </div>
  )
}
