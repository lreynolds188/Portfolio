import Head from 'next/head'
import styles from '../styles/Resume.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Luke Reynolds</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
        <div>
          <div>
            <h1 className={styles.name}>Luke Reynolds |&nbsp;</h1>
            <a className={styles.contactDeets} href="https://goo.gl/maps/uz7s2XdAUTmpstBA8" target="_blank">QUEENSLAND, AU</a>
          </div>
          <a className={styles.links} href="https://thereynolds.com.au" target="_blank">THEREYNOLDS.COM.AU</a>
          <p className={styles.contactDeets}>&nbsp;|&nbsp;</p>
          <a className={styles.contactDeets} href="mailto: luke@thereynolds.com" target="_blank">LUKE@THEREYNOLDS.COM.AU</a>
          <p className={styles.contactDeets}>&nbsp;|&nbsp;</p>
          <a className={styles.contactDeets} href="https://www.github.com/lreynolds188" target="_blank">GITHUB.COM/LREYNOLDS188</a>
    
          <h2 className={styles.categoryHeaders}>Summary</h2>
          <hr />
          <p className={styles.categoryDescriptionMain}>
            I am a Computer Scientist currently employed at Ridgeline Manufacturing as a Project and Operations Manager.
            I am responsible for maintaining the production environment and designing and implenting an automation system for the main reactor.
            <br /><br />
            In 2020 I was the project manager for a university based start-up with the goal of implementing a cloud
            based portal for QUT. In 2018 and 2019 I was responsible for developing business applications and supporting
            the production environment of a large food processing plant. In 2016 I completed a Diploma of Software Development
            at Tafe Queensland and from 2012 to 2015 was employed as a Computer Technician.
            <br /><br />
            Upon completion of my degree I plan to have a solid foundation in a range of differnet development
            languages and techniques, with a keen interest on cyber security, microsystems, and artificial intelligence.
            My hope is to work advancing the functionality, affordability, and sustainability of futuristic technological applications.
          </p>
    
          <h2 className={styles.categoryHeaders}>Education</h2><hr />
          <a className={styles.primaryTitles} href="http://qut.edu.au" target="_blank">Queensland University of Technology | Queensland, AU</a>
          <p className={styles.categoryDetails}>Bachelor of Computer Science<br/>Gardens Point Campus<br/>2017-2020</p>
          <br />
          <a className={styles.primaryTitles} href="http://tafebrisbane.edu.au" target="_blank">Tafe Queensland | Queensland, AU</a>
          <p className={styles.categoryDetails}>Diploma of Software Development<br/>Loganlea Campus<br/>2016</p>
                             
          <h2 className={styles.categoryHeaders}>Experience</h2><hr />
          <a className={styles.primaryTitles} href="http://www.98alive.com/">Ridgeline Manufacturing | Queensland, AU</a>
          <p className={styles.categoryDetails}>Project/Operations Manager, May 2020 - Present</p>
          <p className={styles.categoryDescription}>While in this position I was granted the tools to achieve a task and a large amount of freedom to self manage which allowed to me to excel. I was responsible for seeing that operations run as normal and look to for any opportunities for improvement. In addition to these duties I was also required to design and implement an automation system for one of the companies reactors.</p>
          <br />
          <a className={styles.primaryTitles} href="https://www.kilcoyglobalfoods.com/" target="_blank">Kilcoy Global Foods | Queensland, AU</a>
          <p className={styles.categoryDetails}>Developer/Technician, Nov 2018 – May 2019</p>
          <p className={styles.categoryDescription}>During my time in this position I was responsible for the development of business applications and support of a production environment. Projects were completed in a full stack agile development environment in which version control and project management tools were utilized.</p>
          <br />
          <a className={styles.primaryTitles} href="http://www.actlogistics.com.au/" target="_blank">ACT Logistics / ACT Computers | Queensland, AU</a>
          <p className={styles.categoryDetails}>Technician, Aug 2014 – Apr 2015</p>
          <p className={styles.categoryDescription}>In this position I worked in a computer store and distribution warehouse managing the redistribution of ex-government hardware. My position included such jobs as system reloads, stripping hardware, technical support, computer & phone repairs, and on-site support.</p>
          <br />
          <a className={styles.primaryTitles} href="https://ozecomputers.com.au/#Computer%20Repairs%20Caloundra" target="_blank">OzeComputers | Queensland, AU</a>
          <p className={styles.categoryDetails}>Technician, Aug 2013 – Aug 2014</p>
          <p className={styles.categoryDescription}>During my time at this position I ran a computer store in the center of Caloundra upholding the highest in customer service in delivery of all services. I was responsible for running diagnostics, computer & phone repairs, delivering on-site support, building computer systems, server configuration and support.</p>
          
          <h2 className={styles.categoryHeaders}>Skills</h2><hr />
          <p className={styles.primaryTitles}>Languages & Frameworks</p>
          <p className={styles.categoryDescription}>C | C# | .NET | Python | Java | JavaScript | VisualBasic | ASP | SQL | HTML | CSS | PHP </p>
          <br />
          <p className={styles.primaryTitles}>Tools & Practices</p>
          <p className={styles.categoryDescription}>Windows | Android | Ubuntu | Linux | GitHub | DevOps | Team Management Systems | Project Management Systems | Version Control | Requirements Gathering | Systems Analysis | Software Development | Runtime Debugging | Technical Documentation | Application Testing | Acceptance Testing | Project Deployment | Computational Mathematics | Rudementary Physics</p>
          <br />
          <p className={styles.primaryTitles}>Technical Knowledge</p>
          <p className={styles.categoryDescription}>Active Directory | Virtualization | Server Administration | Database Management | SSMS | Networking | Remote Access | VNC | Backup Systems | ERP Management Systems | AX Dynamics | Server Management | Security Systems | X-Ray Systems | Service Management Systems | ServiceDesk Plus | VMWare | VirtualBox</p>
        </div>
      </main>
    </div>
  )
}
