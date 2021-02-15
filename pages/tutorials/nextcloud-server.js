import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Luke Reynolds</title>
	<meta charset="utf-8" />
	<meta name="description" content="In my desire to regain information privacy from big tech and their incessant tracking I have set up a Nextcloud server so that I may find some peace of mind and help others to do the same. The server features a domain name, Nginx reverse proxy, SSL encryption, Android connectivity, and VNC for remote maintenance." />
    	<meta name="author" content="Luke Reynolds" />
    	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
    	<meta name="keywords" content="Nextcloud, Ubuntu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
	  <div>
	  	<h1 className={styles.title}>Nextcloud Server - Ubuntu 20.04</h1>
			<p>15/02/21, Luke Reynolds</p>
			<p>In my desire to regain information privacy from big tech and their incessant tracking I decided to set up a Nextcloud server so that I may find some peace of mind and help others to do the same. The server features a domain name, Nginx reverse proxy, SSL encryption, Android connectivity, and VNC for remote maintenance.</p>
			<strong>Requirements:</strong>
			<ol>
			  <li>A computer to use as a server (I'm using a SurfacePro 3).</li>
			  <li>A static IP and domain name or DynamicDNS</li>
			  <li>Access to your router's control panel</li>
			</ol>

		<br />
				
		<h2>Local Cloud Setup</h2>
			<h3>Virtual Machines</h3>
				<p>There will be 2 virtual machines that will be responsible for hosting your server. The first of these machines will store your Nextcloud instance, while the second will store the NginX reverse proxy. I decided to install Ubuntu 20.04 on my host machine but you may use whatever OS you prefer. Once the server has a fresh OS installation, install VirtualBox or your preferred virtualization software and download the latest Ubuntu Server image (.iso). </p>
				<p>VirtualBox can be downloaded <a href="https://www.virtualbox.org/wiki/Downloads">here</a></p>
				<p>Ubuntu Server can be downloaded <a href="https://ubuntu.com/download/server">here</a> (Option: 2)</p>
			<br />
				<p>Once the virutalization software is installed create 2 new virtual machines. Set both the server hard drives to dynamically allocated, giving the NginX server a max of 8gb and the Nextcloud server whatever remaining space is available preferably leaving around 10gb free for the host OS.</p>
				<p>After creating the virtual machines, go into the network settings of each and set the mode to "bridged". This sets the machines as independent hosts on the network allowing visibility.</p>
			<br />
			<h3>Nextcloud Server Setup</h3>
				<p>Then, start up the nextcloud server and select the ubuntu server image when prompted for a startup disk. This will load up the ubuntu live CD and go through the installation steps. The only extra step to do during the installation is to select the nextcloud snap when prompted with commonly installed snaps. After the installation is finished, nextcloud is pretty much done and ready to use on the LAN! To try it out, log in to the machine and find out its ip with ifconfig. Go to that ip in a web browser and you should be greeted with a nextcloud welcome page prompting you to set up an administrator account. You might as well do that while you’re there.</p>
	  		<br />
			<h3>Reverse Proxy Server Setup</h3>
				<p>Start up the reverse proxy server and go through the motions of installing ubuntu server, this time not selecting any snaps when prompted. Once logged in, install nginx by typing <code>sudo apt install nginx</code>. Then, find the IP of this server with ifconfig and take a note of it (I’ll refer to it as nginx-ip, and the ip of the nextcloud server as nextcloud-ip). Then, make a file at /etc/nginx/sites-available/nextcloud.conf and fill it as follows; don’t forget to replace the ’s with their real values!</p>
			<br />
			<h3>Setting Static IP's for the VM's</h3>
				<p>To set a static IP on each of the virtual machines boot them up and run this command to install net-tools.</p>
				<pre><code>sudo apt install net-tools</code></pre>
				<p>Once net-tools is installed run <code>ifconfig</code> and note down the current IP address of the virtual machine.</p>		
	
		<br />

		<h2>Exposing Server to the Internet</h2>
			<h3>Port Forwarding</h3>
				<p>In your router’s settings, configure port 80 to forward all traffic to the NginX server and port 443 to forward TCP traffic to the NginX server. For additional help refer to your router's online manual.</p>
			<br />
			<h3>Static IP or Dynamic DNS</h3>
				<strong>Option 1: Static IP & Domain Name</strong>
				<p>Configure A records in your domain's DNS configuration portal to point at your static IP address. For help finding your public IP address click <a href="https://www.whatismyip.com">here</a></p>
				<strong>Option 2: Dynamic DNS</strong>
				<p>Free dynamic DNS services available such as <a href="https://www.noip.com/">NoIP</a> can provide a suitable replacement for a domain name and staic IP.</p>
	
		<br />
		
		<h2>Securing the Server</h2>
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
				<code>server &#123;</code>
					<code>listen 80;</code>
					<code>server_name example.com;</code>
					<code>return 301 https://$server_name:443$request_uri;</code>
				<code>&#125;</code>
				<br />
				<code>server </code>
				<code>listen 443 ssl;</code>
				<code>server_name example.com;</code>
				<br />
				<code>ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;</code>
				<code>ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.com;</code>
				<br />
				<code>add_header Strict-Transport-Security 'max-age=31536000; includeSubDomains; preload';</code>
				<code>add_header X-XSS-Protection "1; mode=block" always;</code>
				<code>add_header X-Frame-Options "SAMEORIGIN" always;</code>
				<code>add_header X-Content-Type-Options "nosniff" always;</code>
				<code>add_header X-Permitted-Cross-Domain</code>
				<br />
				<p>Finally, restart nginx</p>
				<pre><code>sudo service nginx restart</code></pre>
			<br />
			<h3>Automatic Certificate Renewal</h3>
				<p>The ssl certificates expire every 90 days, but they can be easily and non-interactively renewed with</p>
				<pre><code>sudo certbot renew</code></pre>
				<p>So just set up a cron job to do this every other month or so.</p>
				<pre><code>sudo crontab -e</code></pre>
				<p>Adding the line</p>
				<pre><code>0 0 1 */2 * /usr/bin/certbot -q renew</code></pre>
				<p>Which will automatically renew the certificates at midnight on the first of every other month.</p>
			<br />
			<h3>Enable 2-Factor Authentication</h3>
				<p>Install FreeOTP+ from <a href="https://f-droid.org/en/packages/org.liberty.android.freeotpplus/">F-Droid</a> or the <a href="https://play.google.com/store/apps/details?id=org.liberty.android.freeotpplus&hl=en_US&gl=US">Playstore</a> or your chosen 2FA code generator.</p>
		
		<br />
					
		<h2>RealVNC Server Setup</h2>
			<p>RealVNC Server can be found <a href="https://www.realvnc.com/en/connect/download/vnc/">here</a></p>
			<p>RealVNC Viewer can be found <a href="https://www.realvnc.com/en/connect/download/viewer/">here</a></p>
				
		<br />
				
		<h2>Android Connectivity</h2>
			<h3>Nextcloud App Code</h3>
				<p>Navigate to your Nextcloud portal, go to settings -> personal -> Security. Scroll to the bottom of the page and type the name of the app you would like to grant access to. Click create new app password. Go back to the application you want to connect to your Nextcloud server, type in your username and the 29 character one time app password.</p>
			<br />
			<h3>Task, Contact, and Calendar Syncronization Client</h3>
				<p>Install DAVx⁵ from <a href="https://f-droid.org/en/packages/at.bitfire.davdroid/">F-Droid</a> or the <a href="https://play.google.com/store/apps/details?id=at.bitfire.davdroid&hl=en_US&gl=US">Playstore</a>.</p>
		<br />	
				
		<h2>References</h2>
			<ul>
				<li><a href="https://llazarek.github.io/2018/08/setting-up-a-home-cloud-server-with-nextcloud.html">https://llazarek.github.io/2018/08/setting-up-a-home-cloud-server-with-nextcloud.html</a></li>
				<li><a href="https://linuxize.com/post/how-to-configure-static-ip-address-on-ubuntu-20-04/">https://linuxize.com/post/how-to-configure-static-ip-address-on-ubuntu-20-04/</a></li>
			</ul>
        </div>
      </main>
    </div>
  )
}
