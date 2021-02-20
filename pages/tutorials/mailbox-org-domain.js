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
        <h1 className={styles.title}>Mailbox.org Domain Email and Alias's</h1>
	  	<div>
		  	<br/>
			<p>??/??/????, <a href="https://thereynolds.com.au">Luke Reynolds</a></p>
			<p className={styles.description}>While looking for a suitabe replacement to Gmail I ended up registering my own domain name and connecting it up to Mailbox.org. This is a simple tutorial on how to configure the domain name with mailbox.org and create your own email alias's.</p><br /><br />
			<p className={styles.description}><strong>Requirements:</strong></p>
			<ol className={styles.descriptionLeft}>
			  <li>A domain name</li>
			</ol>
			<br/>
	  	<h2>Coming Soon...</h2>
		<h2>References</h2>
			<ul className={styles.descriptionLeft}>
				<li><a href="https://mailbox.org/en/">https://mailbox.org/en/</a></li>
			</ul>
        </div>
      </main>
    </div>
  )
}
