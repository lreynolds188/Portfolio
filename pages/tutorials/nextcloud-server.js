import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Luke Reynolds</title>
	<meta charset="utf-8" />
	<meta name="description" content="In my desire to regain my privacy from big tech and their constant tracking, I have set up a Nextcloud server so that I can finally gain some peace of mind." />
    	<meta name="author" content="Luke Reynolds" />
    	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
    	<meta name="keywords" content="Nextcloud, Ubuntu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
	  <div>
	  	<h1 className={styles.title}>Nextcloud Server Ubuntu 20.04</h1>
	    	<p>15/02/21</p>
            	<p>In my desire to regain my privacy from big tech and their constant tracking, I have set up a Nextcloud server so that I can finally gain somepeace of mind. It features RealVNC for remote maintenance, an NginX remote proxy</p>
	    	<h>Requirements:</h>
	  	<ol>
	 	  <li>A computer to use as a server (I'm using a SurfacePro 3).</li>
	  	  <li>A static IP and Domain name or DynamicDNS (if static IP is unavailable)</li>
	  	  <li>Access to your router's control panel</li>
		</ol>
		<br />
		<br />
		<h2>Local cloud setup with remote connectivity</h2>
			
	  	<h3>Two virtual machines</h3>
	
	  	<h3>Nextcloud server setup</h3>
	
	  	<h3>Reverse proxy server setup</h3>
		
		<h3>RealVNC Server Setup</h3>
		<code>sudo openvpn --config linux-client.ovpn</code>
			
		<h3>Setting static ips for the VMs</h3>
	
		<br />
		<br />

		<h2>Exposing the server to the internet</h2>
		<p>Exposing the nextcloud server to the internet makes it much more convenient. For example, with a domain name it can be made accessible through a url instead of an ip address.</p>
		<p>There are a few steps involved in making this happen: 1. Forwarding internet traffic from the router to the server 2. Setting up dynamic dns 3. Setting up ssl encryption</p>
		<h3>Port forwarding</h3>
		<p>Back in the router&rsquo;s settings, configure port forwarding as follows: 1. Forward traffic of any kind on port 80 to the nginx server. 2. Forward TCP traffic on port 443 to the nginx server.</p>
		<p>Restart the router and now navigating to your public ip (find it with <a href="https://www.whatismyip.com/">whatismyip</a>) should take you to the nextcloud.</p>
		<h2>Dynamic DNS</h2>
		<p>Setting up dynamic dns will make the nextcloud accessible from a url instead of a public ip, which ISPs change regularly anyway. If you have a google domain like me, then Google provides a free dynamic dns service along with the domain; that is what I used. Setting it up on Google&rsquo;s end is pretty easy following <a href="https://support.google.com/domains/answer/6147083?hl%3Den">their instructions</a>. There are many dynamic dns services, such as no-ip etc, all of which will have a similar process to what I describe below.</p>
		<pre><code>sudo apt update &amp;&amp; sudo apt install ddclient</code></pre>
		<p>With <code>ddclient</code> installed, I set up the config as described in <a href="https://support.google.com/domains/answer/6147083?hl%3Den">Google&rsquo;s instructions</a> using the &ldquo;ddclient without Google Domains support&rdquo; config. One thing to note is that the username and password in the config should be in &lsquo;single quotes&rsquo;. Once that is done, test that the configuration works</p>
		<pre><code>sudo ddclient -daemon=0 -debug -verbose -noquiet</code></pre>
		<p>and if all is well you should be able to go to your configured domain to access the nextcloud server!</p>
		<h2>Adding the nextcloud&rsquo;s external url as a trusted proxy</h2>
		<pre><code>"trusted_proxies"   =&gt; ['&lt;nextcloud-ip&gt;', '&lt;your-domain.url&gt;'],</code></pre>
		<h3 id="ssl-encryption">SSL encryption</h3>
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
		<h2>Setting up automatic certificate renewal</h2>
		<p>The ssl certificates expire every 90 days, but they can be easily and non-interactively renewed with</p>
		<pre><code>sudo certbot renew</code></pre>
		<p>So just set up a cron job to do this every other month or so.</p>
		<pre><code>sudo crontab -e</code></pre>
		<p>Adding the line</p>
		<pre><code>0 0 1 */2 * /usr/bin/certbot -q renew</code></pre>
		<p>Which will automatically renew the certificates at midnight on the first of every other month.</p>
									  
		<h2>References</h2>
		<ul>
			<li><a href="https://llazarek.github.io/2018/08/setting-up-a-home-cloud-server-with-nextcloud.html">https://llazarek.github.io/2018/08/setting-up-a-home-cloud-server-with-nextcloud.html</a></li>
		</ul>
        </div>
      </main>
    </div>
  )
}
