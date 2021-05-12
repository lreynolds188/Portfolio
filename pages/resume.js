import Head from 'next/head'
import styles from '../styles/Main.module.css'

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
            <h1 className={styles.name}>Luke Reynolds&nbsp;</h1><a className={styles.contact} href="https://goo.gl/maps/uz7s2XdAUTmpstBA8" target="_blank">QUEENSLAND, AU</a><br/>
            <p className={styles.contact}>LUKE [AT] <a className={styles.contact} href="https://thereynolds.com.au" target="_blank">THEREYNOLDS.COM.AU</a></p>
          </div>

          <h2 className={styles.categoryHeaders}>Summary</h2>
          <hr />
          <p className={styles.description}>
            I am a Computer Scientist and owner of <a href="https://automatedtechnicalsolutions.com">Automated Tech Solutions</a>&nbsp;
            a technical consulting firm based in Queensland, Australia.
            I currently have one subject remaining to receive my degree and am the sole member of my business
            working to implement infrastructure and build the customer base.
          </p><br /><br />
          <p className={styles.description}>
            In 2021 I was employed as a project and operations manager responsible for supporting the production environment 
            and implementing an IoT automation system for the company's primary reactor. 
            In 2020 I was the project manager for a university based start-up with the goal of implementing a cloud
            based portal for QUT. In 2018 and 2019 I was responsible for developing business applications and supporting
            the production environment of a large food processing plant. In 2016 I completed a Diploma of Software Development
            at Tafe Queensland and from 2012 to 2015 was employed as a Computer Technician.
          </p><br /><br />
          <p className={styles.description}>
            Upon completion of my degree I plan to have a solid foundation in a range of different development
            languages and techniques with a keen focus on cyber security, blockchain technology, and IoT automation devices. In addition to a
            basic foundation of mathematics, physics, business, psychology, and philosophy.
            My goal is to work toward advancing the functionality, affordability, and sustainability of futuristic technological applications.
          </p>
    
          <h2 className={styles.categoryHeaders}>Education</h2><hr />
          <a className={styles.primaryTitles} href="http://qut.edu.au" target="_blank">Queensland University of Technology | Queensland, AU</a>
          <p className={styles.categoryDetails}>Bachelor of Computer Science<br/>Gardens Point Campus<br/>2017-Present</p>
          <br />
          <a className={styles.primaryTitles} href="http://tafebrisbane.edu.au" target="_blank">Tafe Queensland | Queensland, AU</a>
          <p className={styles.categoryDetails}>Diploma of Software Development<br/>Loganlea Campus<br/>2016</p>
                             
          <h2 className={styles.categoryHeaders}>Experience</h2><hr />
          <p className={styles.primaryTitles}>Automated Tech Solutions | Queensland, AU</p>
          <p className={styles.categoryDetails}>Sole Proprietor, May 2021 - Present</p>
          <p className={styles.categoryDescription}>I'm the owner of Automated Tech Solutions and am currently working to implement infrastructure, comply with requirements, and build a customer base.</p>
          <br />    
          <p className={styles.primaryTitles}>Ridgeline Manufacturing | Queensland, AU</p>
          <p className={styles.categoryDetails}>Project/Operations Manager, May 2020 - May 2021</p>
          <p className={styles.categoryDescription}>While in this position I was granted the required tools to achieve a set task along with the freedom to self manage which allowed to me to resolve without issue. I was responsible for seeing that operations run as normal and to seek out any opportunities for improvement. In addition to these duties I was also required to design and implement an automation system for the company's primary reactor.</p>
          <br />
          <a className={styles.primaryTitles} href="https://www.kilcoyglobalfoods.com/" target="_blank">Kilcoy Global Foods | Queensland, AU</a>
          <p className={styles.categoryDetails}>Developer/Technician, Nov 2018 – May 2019</p>
          <p className={styles.categoryDescription}>During my time in this position I was responsible for the development of business applications and support of a production environment. Projects were completed in a full stack agile development environment in which version control and project management tools were utilized.</p>

          <h2 className={styles.categoryHeaders}>Skills</h2><hr />
          <p className={styles.primaryTitles}>Languages & Frameworks</p>
          <p className={styles.categoryDescription}>C | C++ | C# | Python | Java | JavaScript | VisualBasic | .NET | SQL | HTML | CSS | PHP </p>
          <br />
          <p className={styles.primaryTitles}>Tools & Practices</p>
          <p className={styles.categoryDescription}>Version Control | Team Management Systems | Computational Mathematics | Requirements Gathering | Systems Analysis | Software Design | Development | Debugging | Documentation | Testing | Deployment</p>
          <br />
          <p className={styles.primaryTitles}>Platforms & Technologies</p>
          <p className={styles.categoryDescription}>Linux | Windows | Android | GitHub | DevOps | Active Directory | Virtualization | Server Administration | Database Management | Networking | Remote Access | Backup Systems | Security Systems | Service Management Systems</p>
        </div>
      </main>
    </div>
  )
}
