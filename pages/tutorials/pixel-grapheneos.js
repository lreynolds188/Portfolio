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
        <h1 className={styles.title}>Pixel GrapheneOS Installation</h1>
	  	<div>
		  	<br />
			<p>00/00/0000, <a href="https://thereynolds.com.au">Luke Reynolds</a></p>
			<p className={styles.description}>Coming soon...</p><br /><br />
			
		<h2>References</h2>
			<ul className={styles.descriptionLeft}>
				
			</ul>
        </div>
      </main>
    </div>
  )
}
