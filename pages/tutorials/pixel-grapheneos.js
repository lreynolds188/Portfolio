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
		  	<br/>
			<p>??/??/????, <a href="https://thereynolds.com.au">Luke Reynolds</a></p>
			<p className={styles.description}>In my desire to regain information privacy from big tech and their incessant tracking i've decided to setup a Nextcloud server so that I may find some peace of mind and help others to do the same. The server features a domain name, Nginx reverse proxy, SSL encryption, 2FA, Android connectivity, and VNC for remote maintenance.</p><br /><br />
			<p className={styles.description}><strong>Requirements:</strong></p>
			<ol className={styles.descriptionLeft}>
			  <li>A pixel phone</li>
			  <li>A computer</li>
			  <li>A USB-C to USB cable</li>
			</ol>
			<br/>
		<h2>References</h2>
			<ul className={styles.descriptionLeft}>
				<li><a href="https://grapheneos.org/">https://grapheneos.org/</a></li>
			</ul>
        </div>
      </main>
    </div>
  )
}
