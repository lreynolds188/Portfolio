import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Luke Reynolds</title>
	<meta charset="utf-8" />
	<meta name="description" content="In my desire to regain information privacy from big tech and their constant tracking I have set up a Nextcloud server so that I may find some peace of mind and help others to find the same. The server features a domain name, Nginx reverse proxy, SSL encryption, Android connectivity, and VNC for remote maintenance." />
    	<meta name="author" content="Luke Reynolds" />
    	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
    	<meta name="keywords" content="Nextcloud, Ubuntu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
	  <div>
	  	<h1 className={styles.title}>Nextcloud Server - Ubuntu 20.04</h1>
			<p>15/02/21</p>
			<p>In my desire to regain information privacy from big tech and their constant tracking I have set up a Nextcloud server so that I may find some peace of mind and help others to find the same. The server features a domain name, Nginx reverse proxy, SSL encryption, Android connectivity, and VNC for remote maintenance.</p>
			<strong>Requirements:</strong>
			<ol>
			  <li>A computer to use as a server (I'm using a SurfacePro 3).</li>
			  <li>A static IP or DynamicDNS</li>
			  <li>Access to your router's control panel</li>
			</ol>

		<br />
				
		<h2>Local Cloud Setup</h2>
			<h3>Virtual Machines</h3>
				<p>There will be 2 virtual machines that will be responsible for hosting your server. The first of these machines will store your Nextcloud instance, while the second will store the NginX reverse proxy. I decided to install Ubuntu 20.04 on my host machine but you may use whatever OS you prefer. Once the server has a fresh OS installation, install VirtualBox or your preferred virtualization software and download the latest Ubuntu Server image (.iso). </p>
				<p>VirtualBox can be downloaded <a href="https://www.virtualbox.org/wiki/Downloads">here</a></p>
				<p>Ubuntu Server can be downloaded <a href="https://ubuntu.com/download/server">here</a> (Option: 2)</p>
				<p>Once the virutalisation software is installed create 2 new virtual machines. Set both the server HDD's to dynamically allocated, giving the NginX server a max of 8gb and the Nextcloud server whatever remaining space is available. 
				<p>After creating the virutal machines, go into the network settings of each and set the mode to "bridged". This sets the machines as independent hosts on the network allowing visibility.
			<h3>Nextcloud Server Setup</h3>
				<p>Then, start up the nextcloud server and select the ubuntu server image when prompted for a startup disk. This will load up the ubuntu live CD and go through the installation steps. The only extra step to do during the installation is to select the nextcloud snap when prompted with commonly installed snaps. After the installation is finished, nextcloud is pretty much done and ready to use on the LAN! To try it out, log in to the machine and find out its ip with ifconfig. Go to that ip in a web browser and you should be greeted with a nextcloud welcome page prompting you to set up an administrator account. You might as well do that while you’re there.</p>
	  		<h3>Reverse Proxy Server Setup</h3>
				<p>Next, start up the reverse proxy server and go through the motions of installing ubuntu server, this time not selecting any snaps when prompted. Once logged in, install nginx if necessary (it was already installed on my image). Then, find the ip of this server with ifconfig and take a note of it (I’ll refer to it as nginx-ip, and the ip of the nextcloud server as nextcloud-ip). Then, make a file at /etc/nginx/sites-available/nextcloud.conf and fill it as follows; don’t forget to replace the ’s with their real values!</p>
			<h3>Setting Static IP's for the VM's</h3>
				
	
		<br />

		<h2>Exposing Server to the Internet</h2>
			<h3>Port Forwarding</h3>
				<p></p>
			<h3>Static IP or Dynamic DNS</h3>
				<strong>Static IP & Domain Name</strong>
				
				<strong>Dynamic DNS</strong>
	
		<br />
		
		<h2>Encrypting to HTTPS Connection</h2>
			<h3>SSL Encryption</h3>
				<p>The last step that should really be done if the nextcloud will be accessed over the internet is to set up SSL encryption so that the server can be accessed through HTTPS. This will ensure that your files etc will be encrypted en route to and from the server though not <em>on</em> the server, which is fine since an account with a password is required to access it.</p>
				<p>This is actually pretty easy to do thanks to <a href="https://letsencrypt.org/">Let&rsquo;s Encrypt</a>. First, port forwarding needs to be set up on port 443 because that&rsquo;s the port used for ssl. This was already done in the port forwarding section above.</p>
				<p>The next step is to obtain ssl certificates, which is also pretty easy. The certificates need to be set up on the nginx server, because that will be the terminal for ssl connections. So log into the nginx server and install Let&rsquo;s Encrypt&rsquo;s certbot following <a href="https://certbot.eff.org/lets-encrypt/ubuntuartful-nginx">the installation instructions on the website</a>.</p>
				<code>sudo rm /etc/nginx/sites-enabled/nextcloud.conf
				sudo service nginx restart
				sudo certbot --nginx</code>
				<p>Then, reinstall the proxy config</p>
				<code>sudo ln -s /etc/nginx/sites-available/nextcloud.conf /etc/nginx/sites-enabled/</code>
				<p>and edit it to be like this:</p>
				<p>Finally, restart nginx</p>
				<pre><code>sudo service nginx restart</code></pre>
			<h3>Automatic Certificate Renewal</h3>
				<p>The ssl certificates expire every 90 days, but they can be easily and non-interactively renewed with</p>
				<pre><code>sudo certbot renew</code></pre>
				<p>So just set up a cron job to do this every other month or so.</p>
				<pre><code>sudo crontab -e</code></pre>
				<p>Adding the line</p>
				<pre><code>0 0 1 */2 * /usr/bin/certbot -q renew</code></pre>
				<p>Which will automatically renew the certificates at midnight on the first of every other month.</p>
	
		<h2>RealVNC Server Setup</h2>
	
		<h2>Android Connectivity</h2>
				
									  
		<h2>References</h2>
		<ul>
			<li><a href="https://llazarek.github.io/2018/08/setting-up-a-home-cloud-server-with-nextcloud.html">https://llazarek.github.io/2018/08/setting-up-a-home-cloud-server-with-nextcloud.html</a></li>
		</ul>
        </div>
      </main>
    </div>
  )
}
