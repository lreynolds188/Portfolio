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
            Computer Scientist and Owner of <a href="https://atechsol.com.au">ATechSol</a>, an open source software and privacy based wiki.
            <br /><br />
            At the beginning of my career I worked as a computer technician for a range of different companies between 2012 and 2015.
            In 2016 I received a diploma of software development from Tafe Queensland. In 2018 and '19 I was employed by a large food 
            processing plant and was responsible for developing business applications and supporting the production environment.
            In 2020 I was the project manager for a university based start-up with the goal of implementing a cloud based portal for QUT.
            In my last position as a project and operations manager I was responsible for supporting the production environment 
            and implementing an IoT automation system for the company's primary concentrator.
            <br /><br />
            I have a solid foundation in a range of different development languages and techniques with a keen focus on cyber security, 
            blockchain technology, and IoT automation devices. In addition to a rudimentary understanding of mathematics, physics, business, 
            economics, psychology, philosophy, and politics.
          </p>
        </div>
      </main>
    </div>
  )
}
