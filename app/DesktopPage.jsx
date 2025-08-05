import React, { useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { InView } from 'react-intersection-observer'
import styles from './desktop.module.css'
import { Gothic_A1 } from 'next/font/google'
import Head from 'next/head'

// Import data
import { projects } from './data/projects'
import { experiences } from './data/experiences'
import { skillCategories } from './data/skills'
import { certifications } from './data/certifications'
import { contactInfo } from './data/contact'

// Import components
import { ProjectCard } from './components/ProjectCard'
import { ExperienceCard } from './components/ExperienceCard'
import { CertificationCard } from './components/CertificationCard'
import { ContactItem } from './components/ContactItem'

const gothicA1 = Gothic_A1({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export default function DesktopPage() {
  // Memoizations for performance optimization
  const memoizedProjects = useMemo(() => projects, [])
  const memoizedExperiences = useMemo(() => experiences, [])
  const memoizedSkillCategories = useMemo(() => skillCategories, [])
  const memoizedCertifications = useMemo(() => certifications, [])
  const memoizedContactInfo = useMemo(() => contactInfo, [])

  // Structured Data (JSON-LD) for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Carl Serquiña',
    jobTitle: 'Full Stack Software Engineer',
    url: 'https://www.carlserquina.com',
    email: 'carlserquina.dev@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dumaguete City',
      addressCountry: 'PH',
    },
    sameAs: [
      'https://linkedin.com/in/carl-serquiña-ab5509201',
      'https://www.carlserquina.com',
    ],
  }

  return (
    <>
      <Head>
        <title>
          Carl Serquiña | Full Stack Developer Portfolio in Dumaguete,
          Philippines
        </title>
        <meta
          name='description'
          content='Carl Serquiña is a Full Stack Software Engineer from Dumaguete City, Philippines. Explore projects, skills, and experiences in modern web development using TypeScript, React, Node.js, Next.js, AWS, and more.'
        />
        <meta
          property='og:title'
          content='Carl Serquiña | Full Stack Developer'
        />
        <meta
          property='og:description'
          content='Portfolio of Carl Serquiña, experienced software engineer specializing in React, Next.js, and cloud platforms. Based in Dumaguete City, Philippines.'
        />
        <meta
          property='og:image'
          content='/showcase/token-metrics-loyalty.png'
        />
        <meta property='og:url' content='https://www.carlserquina.com' />
        <meta property='og:type' content='website' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content='Carl Serquiña | Full Stack Developer'
        />
        <meta
          name='twitter:description'
          content='See the portfolio and projects of Carl Serquiña, full stack developer from Dumaguete City, Philippines.'
        />
        <meta
          name='twitter:image'
          content='/showcase/token-metrics-loyalty.png'
        />
        <link rel='canonical' href='https://www.carlserquina.com/' />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <main className={styles.pageContainer}>
        <header className={styles.header}>
          <h1>Carl Serquiña</h1>
          <p className={gothicA1.className}>
            Experienced Full Stack Software Engineer based in Dumaguete City,
            Philippines. 6+ years developing scalable web applications with
            TypeScript, React, Next.js, and AWS. Skilled in building responsive,
            high-performance websites that boost engagement and streamline
            workflows.
          </p>
        </header>

        {/* Projects Section */}
        <section
          className={styles.projectsContainer}
          aria-labelledby='projects-heading'
        >
          <h2 id='projects-heading'>Projects</h2>
          <div className={styles.projectsGrid}>
            {memoizedProjects.map((project, idx) => (
              <ProjectCard key={project.title} project={project} index={idx} />
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section
          className={styles.experienceSection}
          aria-labelledby='experience-heading'
        >
          <h2 id='experience-heading'>Experience</h2>
          <div className={styles.experienceGrid}>
            {memoizedExperiences.map((exp) => (
              <ExperienceCard key={exp.title + exp.company} experience={exp} />
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section
          className={styles.certificationsSection}
          aria-labelledby='certifications-heading'
        >
          <h2 id='certifications-heading'>Certifications</h2>
          <div className={styles.certificationsGrid}>
            {memoizedCertifications.map((cert) => (
              <CertificationCard key={cert.name} certification={cert} />
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section
          className={styles.skillsSection}
          aria-labelledby='skills-heading'
        >
          <h2 id='skills-heading'>Skills</h2>
          {memoizedSkillCategories.map((cat) => (
            <div key={cat.category} className={styles.skillCategory}>
              <h3>{cat.category}</h3>
              <div className={styles.skillsGrid}>
                {cat.skills.map((skill) => (
                  <span key={skill} className={styles.skillCell}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Contact Section */}
        <section
          className={styles.contactSection}
          aria-labelledby='contact-heading'
        >
          <h2 id='contact-heading'>Contact</h2>
          <div className={styles.contactGrid}>
            {memoizedContactInfo.map((info) => (
              <ContactItem key={info.type} contact={info} />
            ))}
          </div>
        </section>

        <footer className={styles.footer}>
          <p>
            &copy; {new Date().getFullYear()} Carl Serquiña. All rights
            reserved.
          </p>
        </footer>
      </main>
    </>
  )
}
