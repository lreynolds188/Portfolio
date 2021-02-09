import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <style>body{background-color:#fff;font-family:'Gudea',sans-serif;margin:5% 15% 5% 15%}.name{color:#006400;display:inline-block;font-size:1.4em;letter-spacing:3px;text-transform:uppercase}.contact-information,.links-container{color:#808284;display:inline-block;font-size:.8em;letter-spacing:1px;line-height:.9em;text-transform:uppercase}.contact-deets{color:#58585b;display:inline-block;margin-bottom:2%;margin-top:1.1em;text-decoration:none}.links{color:#58585b;display:inline-block;text-decoration:none}.links:hover{color:#006400}.links img{margin-bottom:-.2em;padding-right:.3em;padding-left:.3em}.primary-titles{color:#006400;display:inline-block;font-size:.9em;letter-spacing:1px;margin-bottom:-1%;text-decoration:none}.location{color:#58585b;display:inline-block;font-size:.8em;letter-spacing:2px;margin-bottom:-1%;margin-top:1em;padding-left:.4em;text-transform:uppercase}.category-headers{color:#006400;font-size:.9em;letter-spacing:2px;margin-top:3em;margin-bottom:.1em;text-transform:uppercase}.category-details{color:#808284;font-size:.9em;font-style:italic;line-height:1.4em;font-weight:400;margin-bottom:1%;margin-left:2%;margin-top:.8em}.category-description-main{color:#808284;font-size:.9em;line-height:1.4em;margin-bottom:1%;margin-left:2%;margin-right:7%;margin-top:1em}.category-description{color:#808284;font-size:.9em;line-height:1.4em;margin-bottom:.2em;margin-left:2%;margin-right:7%;margin-top:.01em}.category-description-center{text-align:center;color:#808284;font-size:.9em;line-height:1.4em;margin-bottom:.2em;margin-left:2%;margin-right:7%;margin-top:.01em}hr{border:1px dotted #a7a9ab;border-style:none none dotted;margin:0 10% 0 0}@media print{body{margin:5% 5% 5% 5%;font-size:90%}hr{border-style:none none solid;border-width:1px}}</style>

    <div className={styles.container}>
      <Head>
        <title>Luke Reynolds</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div>
      <main className={styles.main}>
        <h1 className={styles.title}>
              Luke Reynolds | <h3>github.com/lreynolds188</h3>
        </h1>
      <p class="contact-deets">Brisbane, QLD</p>
      <h2 class="category-headers">Summary</h2><hr>
      <p class="category-description-main">I am a Software Developer currently studying the last semester of a Bachelor's in Computer Science, at the Queensland University of Technology.</p>
      <p class="category-description-main">From 2018 to 2019 I was responsible for developing business applications and supporting the production environment of a large food processing plant. I completed a Diploma of Software Development at Tafe Queensland in 2016 and was employed as a Computer Technician from 2012 to 2015.</p>
      <p class="category-description-main">Upon completion of my degree I plan to have a solid background in a range of development languages and techniques.</p>
      <h2 class="category-headers">Education</h2><hr>
      <a class="primary-titles" href="http://qut.edu.au" target="_blank">Queensland University of Technology | <span class="location">Queensland, AU</span></a>
      <p class="category-details">Bachelor of Computer Science<br/>Gardens Point Campus<br/>2017-2020</p>
      
      <a class="primary-titles" href="http://tafebrisbane.edu.au" target="_blank">Tafe Queensland | <span class="location">Queensland, AU</span></a>
      <p class="category-details">Diploma of Software Development<br/>Loganlea Campus<br/>2016</p>
      <h2 class="category-headers">Experience</h2><hr>
      <a class="primary-titles" href="https://www.kilcoyglobalfoods.com/" target="_blank">Kilcoy Global Foods | <span class="location">Queensland, AU</span></a>
      <p class="category-details">Developer/Technician<br/>Nov 2018 – May 2019</p>
      <p class="category-description"></p>
      <p class="category-description">During my time in this position I was responsible for the development of business applications and support of a production environment. Projects were completed in a full stack agile development environment in which version control and project management tools were utilized.</p>
      
      <a class="primary-titles" href="http://www.actlogistics.com.au/" target="_blank">ACT Logistics / ACT Computers | <span class="location">Queensland, AU</span></a>
      <p class="category-details">Technician<br/>Aug 2014 – Apr 2015</p>
      <p class="category-description">In this position I worked in a computer store and distribution warehouse managing the redistribution of ex-government hardware. My position included such jobs as system reloads, stripping hardware, technical support, computer & phone repairs, and on-site support.</p>
      
      <a class="primary-titles" href="https://ozecomputers.com.au/#Computer%20Repairs%20Caloundra" target="_blank">OzeComputers | <span class="location">Queensland, AU</span></a>
      <p class="category-details">Technician<br/>Aug 2013 – Aug 2014</p>
      <p class="category-description">During my time at this position I ran a computer store in the center of Caloundra upholding the highest in customer service in delivery of all services. I was responsible for running diagnostics, computer & phone repairs, delivering on-site support, building computer systems, server configuration and support.</p>
      <h2 class="category-headers">Skills</h2><hr>
      <p class="category-details"></p>
      <p class="primary-titles">Languages & Technologies</p>
      <p class="category-description">GitHub | Azure | DevOps | C | C# | .NET | Java | Visual Basic | Python | JavaScript | ASP | SQL | HTML | CSS | PHP </p>
      <p class="primary-titles">Tools & Practises</p>
      <p class="category-description">Team Management Systems | Project Management Systems | Version Control | Requirements Gathering | Systems Analysis | Software Development | Runtime Debugging | Technical Documentation | Application Testing | Acceptance Testing | Project Deployment | Computational Mathematics | Rudementary Physics</p>
      <p class="primary-titles">Technical Support</p>
      <p class="category-description">Active Directory | Virtualization | Database Management | SSMS | Networking | Remote Access | VNC | Backup Systems | ERP Management Systems | AX Dynamics | Server Management | Security Systems | X-Ray Systems | Service Management Systems | ServiceDesk Plus | VMWare</p>
      </div>
      </main>
    </div>
  )
}
