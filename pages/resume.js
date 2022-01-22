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

          <h2 className={styles.categoryHeaders}>Summary</h2><hr />
          <p className={styles.contact}>
            At the start of my career I worked as a computer technician for a range of different companies between 2012 and 2015.
            In 2016 I received a diploma of software development from Tafe Queensland. In 2018 and '19 I was employed by a large food 
            processing plant and was responsible for developing business applications and supporting the production environment.
            In 2020 I was the project manager for a university based start-up with the goal of implementing a cloud based portal for QUT.
            In my last position as a project and operations manager I was responsible for implementing an IoT automation system for the 
            company's primary concentrator and supporting the production environment.  In 2021 I received a Bachelor's Degree in 
            Computer Science from the Queensland University of Technology.
            <br /><br />
            I have a solid foundation in a range of different development languages and techniques with a keen focus on privacy & security, 
            blockchain technology, and IoT automation devices. In addition to a rudimentary understanding of mathematics, physics, business, 
            economics, psychology, philosophy, and politics. My goal is to work on the automation of everyday jobs and tasks.
          </p>
    
          <h2 className={styles.categoryHeaders}>Education</h2><hr /><br/>
          <a className={styles.primaryTitles} href="http://qut.edu.au" target="_blank">Queensland University of Technology | Queensland, AU</a>
          <p className={styles.categoryDetails}>Bachelor of Computer Science<br/>Gardens Point Campus<br/>2017 - 2021</p>
          <br />
          <a className={styles.primaryTitles} href="http://tafebrisbane.edu.au" target="_blank">Tafe Queensland | Queensland, AU</a>
          <p className={styles.categoryDetails}>Diploma of Software Development<br/>Loganlea Campus<br/>2016</p>
          <br />
          <h2 className={styles.categoryHeaders}>Experience</h2><hr /><br/>
          <p className={styles.primaryTitles}>Ridgeline Manufacturing | Queensland, AU</p>
          <p className={styles.categoryDetails}>Project/Operations Manager, May 2020 - May 2021</p>
          <p className={styles.categoryDescription}>While in this position I was granted the required tools to achieve a set task along with the freedom to self-manage the resolution process. I was responsible for seeing that operations run as normal and to seek out any opportunities for improvement. In addition to these duties I was also in charge of designing and implementing an automation system for the company's primary concentrator.</p>
          <br />
          <a className={styles.primaryTitles} href="https://www.kilcoyglobalfoods.com/" target="_blank">Kilcoy Global Foods | Queensland, AU</a>
          <p className={styles.categoryDetails}>Developer/Technician, Nov 2018 – May 2019</p>
          <p className={styles.categoryDescription}>During my time in this position I was responsible for the development of business applications and support of a production environment. Projects were completed in a full stack agile development environment in which version control and project management tools were utilized.</p>
          <br />
          <a className={styles.primaryTitles} href="https://actlogistics.com.au/" target="_blank">ACT Logistics | Queensland, AU</a>
          <p className={styles.categoryDetails}>Technician, January 2015 - July 2016</p>
          <p className={styles.categoryDescription}>Responsible for diagnostics, maintenance, and deployment of computer systems. System identification, installations, and secure asset deletion</p>

          <h2 className={styles.categoryHeaders}>Skills</h2><hr />
          <p className={styles.primaryTitles}>Languages & Frameworks</p>
          <p className={styles.categoryDescription}>C | C++ | C# | Python | Java | JavaScript | React | VisualBasic | .NET | SQL | HTML | CSS | PHP </p>
          <br />
          <p className={styles.primaryTitles}>Tools & Practices</p>
          <p className={styles.categoryDescription}>Version Control | Team Management Systems | Computational Mathematics | Requirements Gathering | Systems Analysis | Software Design | Development | Debugging | Documentation | Testing | Deployment</p>
          <br />
          <p className={styles.primaryTitles}>Platforms & Technologies</p>
          <p className={styles.categoryDescription}>Linux | Windows | Android | GitHub | DevOps | Active Directory | Virtualization | Server Administration | Database Management | Networking | Remote Access | Backup Systems | Security Systems | Service Management Systems | 3D Modeling | 3D Printing</p>
          <h2 className={styles.categoryHeaders}>Licences</h2><hr /><br/>
          <ul>
            <li className={styles.categoryDescription}>LF Forklift Licence</li>
            <li className={styles.categoryDescription}>High Risk Work Licence</li>
            <li className={styles.categoryDescription}>C & RE Drivers Licence</li>
            <li className={styles.categoryDescription}>Responsible Service of Alcohol Certified</li>
          </ul>
        </div>
      </main>
    </div>
  )
}
