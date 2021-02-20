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
        <h1 className={styles.title}>Nextcloud Server - Ubuntu 20.04</h1>
	  	<div>
		  	<br />
			<p>15/02/21, <a href="https://thereynolds.com.au">Luke Reynolds</a></p>
			<p className={styles.description}>In my desire to regain information privacy from big tech and their incessant tracking i've decided to setup a Nextcloud server so that I may find some peace of mind and help others to do the same. The server features a domain name, Nginx reverse proxy, SSL encryption, 2FA, Android connectivity, and VNC for remote maintenance.</p><br /><br />
			<p className={styles.description}><strong>Requirements:</strong></p>
			<ol className={styles.descriptionLeft}>
			  <li>A computer to use as a server (I'm using an old Surface Pro).</li>
			  <li>A static IP and domain name or DynamicDNS.</li>
			  <li>Access to your router's control panel.</li>
			</ol>
			<br />
		<h2>Local Cloud Setup</h2>
			<h3>Virtual Machines</h3>
				<p className={styles.description}>There will be 2 virtual machines that will be responsible for hosting your server. The first of these machines will store your Nextcloud instance, while the second will store the NginX reverse proxy. I decided to install Ubuntu 20.04 on my host machine but you may use whatever OS you prefer. Once the server has a fresh OS installation, install <a href="https://www.virtualbox.org/wiki/Downloads">VirtualBox</a> or your preferred virtualization software and download the latest image of <a href="https://ubuntu.com/download/server">Ubuntu Server</a> (.iso).</p><br /><br />
				<p className={styles.description}>Once the virutalization software is installed create 2 new virtual machines. Set both the server hard drives to dynamically allocated, giving the NginX server a max of 8gb and the Nextcloud server whatever remaining space is available preferably leaving around 10gb free for the host OS.</p><br /><br />
				<p className={styles.description}>After creating the virtual machines, go into the network settings of each and set the mode to "bridged". This sets the machines as independent hosts on the network allowing visibility.</p><br /><br />
			<br />
			<h3>Nextcloud Server Setup</h3>
				<p className={styles.description}>Start up the nextcloud server and select the ubuntu server image when prompted for a startup disk. This will load up the ubuntu server iso and begin the installation process. The only extra step to do during the installation is to select the Nextcloud snap when prompted with commonly installed snaps.</p>
	 		<br /><br /><br />
			<h3>Reverse Proxy Server Setup</h3>
				<p className={styles.description}>Start up the reverse proxy server and go through the motions of installing ubuntu server, this time not selecting any snaps when prompted. Once logged in, install nginx by typing:</p><br/>
				<pre><code><code className={styles.unselectable}>$ </code>sudo apt install nginx</code></pre><br />
	  			<p className={styles.description}>Once NginX is installed create a config file for your domain (replacing &lt;your-domain.url&gt;).</p>
	  			<pre><code><code className={styles.unselectable}>$ </code>sudo nano /etc/nginx/sites-enabled/&lt;your-domain.url&gt;</code></pre><br />
				<p className={styles.description}>and edit it to appear as follows (replacing &lt;your-domain.url&gt; and &lt;your-nextcloud-ip&gt; as needed):</p>
				<pre><code>server &#123;<br />
				&emsp;	   listen 80;<br />
				&emsp;	   server_name &lt;your-domain.url&gt;;<br />
				&emsp;	   return 301 https://$server_name:443$request_uri;<br />
				&emsp;&#125;<br />
				<br />
				&emsp;server &#123;<br /> 
				&emsp;    listen 443 ssl;<br />
				&emsp;    server_name &lt;your-domain.url&gt;;<br />
				<br />
				&emsp;    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;<br />
				&emsp;    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.com;<br />
				<br />
				&emsp;    add_header Strict-Transport-Security 'max-age=31536000; includeSubDomains; preload';<br />
				&emsp;    add_header X-XSS-Protection "1; mode=block" always;<br />
				&emsp;    add_header X-Frame-Options "SAMEORIGIN" always;<br />
				&emsp;    add_header X-Content-Type-Options "nosniff" always;<br />
				&emsp;    add_header X-Permitted-Cross-Domain<br /><br />
				&emsp;    add_header X-Robots-Tag "none" always;<br />
				&emsp;    add_header Referrer-Policy "no-referrer" always;<br />
				<br />
				&emsp;    client_max_body_size 10G;
				&emsp;    client_body_buffer_size 400M;
				<br />
				&emsp;    location = /.well-known/carddav &#123;<br />
				&emsp;&emsp;      return 301 $scheme://$host/remote.php/dav;<br />
				&emsp;    &#125;<br />
				<br />
				&emsp;    location = /.well-known/caldav &#123;<br />
				&emsp;&emsp;      return 301 $scheme://$host/remote.php/dav;<br />
				&emsp;    &#125;<br />
				<br />
				&emsp;    location = / &#123;<br />
				&emsp;&emsp;        proxy_headers_hash_max_size 512;<br />
				&emsp;&emsp;        proxy_headers_hash_bucket_size 64;<br />
				&emsp;&emsp;        proxy_set_header Host $host;<br />
				&emsp;&emsp;        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;<br />
				<br />
				&emsp;&emsp;        add_header Front-End-Https on;<br />
				&emsp;&emsp;        proxy_pass http://&lt;your-nextcloud-ip&gt;;<br />
				&emsp;    &#125;<br />			
				&emsp;&#125;
				</code></pre>
				<p className={styles.description}><i>NOTE: This configuration file is designed for a HTTPS connection and will not function correctly until SSL encryption has been configured.</i></p>
			<br /><br /><br />
			<h3>Setting Static IP's for the VM's</h3>
				<p className={styles.description}>To set a static IP on each of the virtual machines boot them up and run the following command to install net-tools.</p>
				<pre><code><code className={styles.unselectable}>$ </code>sudo apt install net-tools</code></pre><br/>
				<p className={styles.description}>Once net-tools is installed run <code>ifconfig</code> and note down the current IP address of the virtual machine.</p><br/><br/>
	  			<p className={styles.description}>Next we will modify the netplan .yaml file.</p>
	  			<pre><code><code className={styles.unselectable}>$ </code>sudo nano /etc/netplan/00-installer-config.yaml</code></pre><br/>
	  			<p className={styles.description}>Modifying the file to appear as follows (replacing &lt;ip-address&gt; and &lt;gateway&gt;):</p>
				<pre><code>network:<br />
				version: 2<br />
				    renderer: network<br />
				&emsp;    ethernets:<br />
				&emsp;        ens3:<br />
				&emsp;            dhcp4: no<br />
				&emsp;            addresses:<br />
				&emsp;                - &lt;ip-address&gt;/24<br />
				&emsp;            gateway4: &lt;gateway&gt;<br />
				&emsp;            nameservers:<br />
				&emsp;                addresses: [8.8.8.8, 1.1.1.1]</code></pre><br/>
				<p className={styles.description}>Ctrl-X, Y, Enter to save and exit. Then type:</p>
				<pre><code><code className={styles.unselectable}>$ </code>sudo netplan apply</code><br /></pre>
			<br /><br />
		
		<h2>Remote Maintenance</h2>
		    	<h3>RealVNC Server Setup</h3>
				<p className={styles.description}>RealVNC Server can be found <a href="https://www.realvnc.com/en/connect/download/vnc/">here</a></p>
			<br /><br /><br />
			<h3>RealVNC Viewer Setup</h3>
				<p className={styles.description}>RealVNC Viewer can be found <a href="https://www.realvnc.com/en/connect/download/viewer/">here</a></p>
			<br /><br /><br />
					
		<h2>Exposing Server to the Internet</h2>
			<h3>Port Forwarding</h3>
				<p className={styles.description}>In your router’s settings, configure port 80 to forward all traffic to the NginX server and port 443 to forward TCP traffic to the NginX server. For additional help please refer to your router's online manual.</p>
			<br /><br /><br />
			<h3>Static IP or Dynamic DNS</h3>
				<p className={styles.description}><strong>Option 1: Static IP & Domain Name</strong></p><br /><br />
				<p className={styles.description}>Configure A records in your domain's DNS configuration portal to point at your static IP address. For help finding your public IP address click <a href="https://www.whatismyip.com">here</a>.</p>
				<br /><br /><br /><br />
				<p className={styles.description}><strong>Option 2: Dynamic DNS</strong></p><br /><br />
				<p className={styles.description}>Free dynamic DNS services such as <a href="https://www.noip.com/">NoIP</a> are available and may provide a suitable replacement for a domain name and static IP.</p>
			<br /><br /><br />
		
		<h2>Securing the Server</h2>
			<h3>Enable Firewall</h3>
				<p className={styles.description}>Enable UFW on the Host, Nextcloud, and NginX server and forward all traffic on port 80 and all TCP traffic on 443.</p>
				<pre><code><code className={styles.unselectable}>$ </code>sudo ufw enable && sudo ufw allow 80 && sudo ufw allow 443/tcp</code></pre><br/>
				<p className={styles.description}>Allow realVNC traffic on the Host machine.</p>
				<pre><code><code className={styles.unselectable}>$ </code>sudo ufw allow realvnc-vnc-server</code></pre>
			<br /><br />
			<h3>SSL Encryption</h3>
				<p className={styles.description}>The last step that should really be done if the nextcloud will be accessed over the internet is to set up SSL encryption so that the server can be accessed through HTTPS. This will ensure that your files etc will be encrypted en route to and from the server though not <em>on</em> the server, which is fine since an account with a password is required to access it.</p><br /><br />
				<p className={styles.description}>This is actually pretty easy to do thanks to <a href="https://letsencrypt.org/">Let's Encrypt</a>. Ensure port 443 is forwarding in your router's configuration as that's the port used for ssl.</p><br /><br />
				<p className={styles.description}>The certificates need to be set up on the nginx server, because that will be the terminal for ssl connections. So log into the nginx server and install Let's Encrypt's certbot by typing:</p><br />
				<pre><code><code className={styles.unselectable}>$ </code>sudo snap install --classic certbot</code></pre><br/>
				<p className={styles.description}>Once certbot is installed, create a config file for NginX.</p>
				<pre><code><code className={styles.unselectable}>$ </code>sudo certbot --nginx -d &lt;your-domain.url&gt;</code></pre><br/>
				<p className={styles.description}>Install the proxy's config file</p>
				<pre><code><code className={styles.unselectable}>$ </code>sudo ln -s /etc/nginx/sites-available/&lt;your-domain.url&gt; /etc/nginx/sites-enabled/</code></pre><br/>
				<p className={styles.description}>Finally, restart nginx</p>
				<pre><code><code className={styles.unselectable}>$ </code>sudo service nginx restart</code></pre>
			<br /><br />
			<h3>Automatic Certificate Renewal</h3>
				<p className={styles.description}>The ssl certificates expire every 90 days, but they can be easily and non-interactively renewed with</p>
				<pre><code><code className={styles.unselectable}>$ </code>sudo certbot renew</code></pre><br/>
				<p className={styles.description}>So just set up a cron job to do this every other month or so.</p>
				<pre><code><code className={styles.unselectable}>$ </code>sudo crontab -e</code></pre><br/>
				<p className={styles.description}>Adding the line</p>
				<pre><code><code className={styles.unselectable}>$ </code>0 0 1 */2 * /usr/bin/certbot -q renew</code></pre><br/>
				<p className={styles.description}>Which will automatically renew the certificates at midnight on the first of every other month.</p>
			<br /><br /><br />
			<h3>Enable 2-Factor Authentication</h3>
				<p className={styles.description}>Install FreeOTP+ from <a href="https://f-droid.org/en/packages/org.liberty.android.freeotpplus/">F-Droid</a> or <a href="https://play.google.com/store/apps/details?id=org.liberty.android.freeotpplus&hl=en_US&gl=US">Playstore</a> or your chosen 2FA code generator.</p>
			<br /><br /><br />
				
		<h2>Android Connectivity</h2>
			<h3>Nextcloud App Code</h3>
				<p className={styles.description}>Navigate to your Nextcloud portal, go to settings -> personal -> Security. Scroll to the bottom of the page and type the name of the app you would like to grant access to. Click create new app password. Go back to the application you want to connect to your Nextcloud server, type in your username and the 29 character one time app password.</p>
			<br /><br /><br />
			<h3>Calendar, Contact, and Task Syncronization Client</h3>
				<p className={styles.description}>Install DAVx⁵ from <a href="https://f-droid.org/en/packages/at.bitfire.davdroid/">F-Droid</a> or <a href="https://play.google.com/store/apps/details?id=at.bitfire.davdroid&hl=en_US&gl=US">Playstore</a>.</p>
			<br /><br /><br />
			<h3>Recommended Applications</h3>
			<p className={styles.description}>A list of useful open-source Android applications that extend the usability of the Nextcloud server.</p><br /><br />
				<ul className={styles.descriptionLeft}>
					<li>Nextcloud Syncronization Client available on <a href="https://f-droid.org/en/packages/com.nextcloud.client/">F-Droid</a></li>
					<li>Nextcloud Notes available on <a href="https://f-droid.org/en/packages/it.niedermann.owncloud.notes/">F-Droid</a></li>
					<li>Tasks.org available on <a href="https://f-droid.org/en/packages/org.tasks/">F-Droid</a></li>
					<li>Simple Calendar Pro available on <a href="https://f-droid.org/en/packages/com.simplemobiletools.calendar.pro/">F-Droid</a></li>
				</ul>
			<br /><br />
				
		<h2>References</h2>
			<ul className={styles.descriptionLeft}>
				<li><a href="https://llazarek.github.io/2018/08/setting-up-a-home-cloud-server-with-nextcloud.html">https://llazarek.github.io/2018/08/setting-up-a-home-cloud-server-with-nextcloud.html</a></li>
				<li><a href="https://linuxize.com/post/how-to-configure-static-ip-address-on-ubuntu-20-04/">https://linuxize.com/post/how-to-configure-static-ip-address-on-ubuntu-20-04/</a></li>
				<li><a href="https://certbot.eff.org/lets-encrypt/ubuntufocal-nginx">https://certbot.eff.org/lets-encrypt/ubuntufocal-nginx</a></li>
			</ul>
        </div>
      </main>
    </div>
  )
}
