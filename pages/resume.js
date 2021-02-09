import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Luke Reynolds</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
        <div>
          <h1 className={styles.title}>
                Luke Reynolds | 
          </h1><h3>github.com/lreynolds188</h3>
          <p>Brisbane, QLD</p>
    
          <h2>Summary</h2><hr></hr>
          <p>
            I am a Computer Scientist currently employed at Ridgeline Manufacturing as a Project and Operations Manager
            working to automate their reactor equipment and increase production efficiency.
          </p>
          <p>
            In 2020, I was the project manager for a university based start-up with the goal of implementing a cloud
            based portal for QUT. From 2018 to 2019, I was responsible for developing business applications and supporting
            the production environment of a large food processing plant. In 2016, I completed a Diploma of Software Development
            at Tafe Queensland and from 2012 to 2015 was employed as a Computer Technician.
          </p>
          <p>
            Upon completion of my degree I plan to have a solid background of understanding in a range of development
            languages and techniques, with a sound knowledge of cyber security and artificial intelligence.
            My hope is to work advancing the functionality, affordability, and sustainability of futuristic technological applications.
          </p>
    
          <h2>Education</h2><hr></hr>
            
                   
          <h2>Experience</h2><hr></hr>
          <a href="https://www.kilcoyglobalfoods.com/" target="_blank">Kilcoy Global Foods | Queensland, AU</a>
          <p>Developer/Technician, Nov 2018 – May 2019</p>
          <p></p>
          <p>During my time in this position I was responsible for the development of business applications and support of a production environment. Projects were completed in a full stack agile development environment in which version control and project management tools were utilized.</p>

          <a href="http://www.actlogistics.com.au/" target="_blank">ACT Logistics / ACT Computers | Queensland, AU</a>
          <p>Technician, Aug 2014 – Apr 2015</p>
          <p>In this position I worked in a computer store and distribution warehouse managing the redistribution of ex-government hardware. My position included such jobs as system reloads, stripping hardware, technical support, computer & phone repairs, and on-site support.</p>

          <a href="https://ozecomputers.com.au/#Computer%20Repairs%20Caloundra" target="_blank">OzeComputers | Queensland, AU</a>
          <p> Technician, Aug 2013 – Aug 2014</p>
          <p> During my time at this position I ran a computer store in the center of Caloundra upholding the highest in customer service in delivery of all services. I was responsible for running diagnostics, computer & phone repairs, delivering on-site support, building computer systems, server configuration and support.</p>
          
          <h2>Skills</h2><hr></hr>
          <p></p>
          <h3>Languages & Technologies</h3>
          <p>GitHub | Azure | DevOps | C | C# | .NET | Java | Visual Basic | Python | JavaScript | ASP | SQL | HTML | CSS | PHP </p>
          <h3>Tools & Practises</h3>
          <p>Team Management Systems | Project Management Systems | Version Control | Requirements Gathering | Systems Analysis | Software Development | Runtime Debugging | Technical Documentation | Application Testing | Acceptance Testing | Project Deployment | Computational Mathematics | Rudementary Physics</p>
          <h3>Technical Support</h3>
          <p>Active Directory | Virtualization | Database Management | SSMS | Networking | Remote Access | VNC | Backup Systems | ERP Management Systems | AX Dynamics | Server Management | Security Systems | X-Ray Systems | Service Management Systems | ServiceDesk Plus | VMWare</p>
        </div>
      </main>
    </div>
  )
}
