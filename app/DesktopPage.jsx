import React, { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { InView } from "react-intersection-observer";
import styles from "./desktop.module.css";
import { Gothic_A1 } from "next/font/google";
import Head from "next/head";

const gothicA1 = Gothic_A1({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const projects = [
  {
    title: "Token Metrics Loyalty Program",
    image: "/showcase/token-metrics-loyalty.png",
    alt: "Loyalty Program Website screenshot",
    link: "https://www.tokenmetrics.com/",
    description:
      "Comprehensive loyalty platform with 15% customer retention increase",
  },
  {
    title: "Deca Dental Booking Website",
    image: "/showcase/deca-dental.png",
    alt: "Deca Dental screenshot",
    link: "https://www.myidealdental.com/",
    description: "Patient booking tool serving dental patients across the US",
  },
  {
    title: "Food Cost Manager App",
    image: "/showcase/food-cost-manager.png",
    alt: "Food Cost Manager App screenshot",
    link: "https://frontend-food-cost.vercel.app/",
    description:
      "Full-stack application reducing food waste by 10% through analytics",
  },
  {
    title: "Flexisource IT Employee Portal",
    image: "/showcase/flexisource-portal.png",
    alt: "HRIS Portal screenshot",
    link: "https://flexisourceit.com.au/",
    description: "Employee portal improving HR workflow efficiency by 25%",
  },
  {
    title: "Token Metrics 3.0",
    image: "/showcase/token-metrics.png",
    alt: "Token Metrics 3.0 screenshot",
    link: "https://www.tokenmetrics.com/",
    description:
      "Platform enabling 200,000+ users to make informed investment decisions",
  },
  {
    title: "Paradox Interactive Gaming Store",
    image: "/showcase/paradox-store.png",
    alt: "Gaming Store website screenshot",
    link: "https://www.paradoxinteractive.com/our-games/discover",
    description: "E-commerce platform driving 25% revenue increase",
  },
  {
    title: "Novari Collective Interior Design",
    image: "/showcase/novari.png",
    alt: "Interior Design Website screenshot",
    link: "https://novaricollective.com.au/",
    description: "Responsive website improving client engagement by 40%",
  },
  {
    title: "Recime Recipe Website",
    image: "/showcase/recime.png",
    alt: "Recipe App screenshot",
    link: "https://www.recime.app/",
    description: "Recipe platform attracting 15% more active users",
  },
];

const experiences = [
  {
    title: "Frontend Engineer II",
    company: "Outliant",
    location: "Remote (Austin, Texas)",
    date: "December 2024 - Present",
    highlights: [
      "Developed and launched the DECA Dental website, a patient booking tool built with Webflow, HTML, CSS, and JavaScript, serving dental patients across the US with streamlined appointment scheduling.",
      "Designed and implemented a new Careers Page for DECA Dental, creating a job board from scratch using HTML, CSS, JavaScript, the Ashby Job Board API, and Cloudflare Workers, enhancing hiring interactions through an improved UI.",
      "Contributed to the Location Finder module using the MapBox API, enabling users to locate the nearest dental offices on an interactive map, improving accessibility and user engagement.",
    ],
    technologies: [
      "Webflow",
      "HTML",
      "CSS",
      "JavaScript",
      "Cloudflare Workers",
      "MapBox API",
      "Ashby API",
    ],
  },
  {
    title: "Frontend Web Developer",
    company: "Token Metrics LLC",
    location: "Remote (Austin, Texas)",
    date: "March 2024 - August 2024",
    highlights: [
      "Developed and launched a loyalty program website, increasing customer retention by 15% and reaching over 200,000 users.",
      "Built the Token Metrics 3.0 platform, enabling over 200,000 users to make informed investment decisions, resulting in a 20% boost in user engagement.",
      "Integrated personalized token evaluation features on the TokenLists Page, enhancing the platform's user interaction and data analysis capabilities.",
    ],
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Snowflake SQL",
      "React.js",
      "TypeScript",
    ],
  },
  {
    title: "Developer",
    company: "Paradox Interactive AB",
    location: "Stockholm, Sweden",
    date: "August 2023 - January 2024",
    highlights: [
      "Contributed to the development of a gaming store website, driving a 25% revenue increase by improving user experience and functionality.",
      "Enhanced product sales by 18% through the creation of a webshop using modern web technologies, leading to higher customer satisfaction.",
      "Refined SDK documentation, increasing development efficiency by 30% and supporting the successful delivery of numerous ongoing projects.",
    ],
    technologies: [
      "React.js",
      "TypeScript",
      "Modern Web Technologies",
      "SDK Documentation",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Flexisource IT",
    location: "Makati, Philippines",
    date: "April 2022 - June 2023",
    highlights: [
      "Developed a comprehensive website for an interior design company, streamlining client interactions by 40% through improved online services.",
      "Built an employee portal, improving HR workflow efficiency by 25% and simplifying administrative processes.",
      "Created a recipe and food ingredients website, attracting 15% more active users by delivering a user-friendly interface and engaging content.",
    ],
    technologies: [
      "Next.js",
      "Ant-Design",
      "React.js",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Self-Employed/Freelance",
    location: "Dumaguete, Philippines",
    date: "March 2018 - April 2022",
    highlights: [
      "Delivered a scalable e-library platform for a startup within 6 months, supporting the company's growth and content management needs.",
      "Migrated UI components to a modern design system, improving codebase maintainability by 35% and reducing future development time.",
      "Developed multiple e-commerce platforms, increasing performance by 20% through the integration of REST and GraphQL APIs.",
    ],
    technologies: [
      "React.js",
      "Redux",
      "REST APIs",
      "GraphQL APIs",
      "Modern Design Systems",
    ],
  },
];

const skillCategories = [
  {
    category: "Technical Skills",
    skills: [
      "Next.js",
      "React.js",
      "Vue.js",
      "Nuxt.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "REST and GraphQL APIs",
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "Firebase",
      "Webflow",
      "Cloudflare",
      "AWS RDS",
      "AWS Lambda",
      "AWS AppSync",
      "AWS SageMaker",
      "AWS Bedrock",
      "Generative AI",
      "Prompt Engineering",
      "Solution Architecture",
      "Serverless Applications",
      "Cloud Security",
      "Data Management",
      "GitHub CI/CD",
      "Data Ethics",
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      "Problem-solving",
      "Team Collaboration",
      "Adaptability",
      "Communication",
      "Project Management",
      "Leadership",
    ],
  },
  {
    category: "Other Skills",
    skills: [
      "Agile Methodologies",
      "Unit Testing (Jest)",
      "CMS (Sanity.io, Headless CMS)",
      "Performance Optimization",
      "Documentation",
      "SDK Development",
    ],
  },
];

const certifications = [
  {
    name: "AWS Generative AI Applications Specialization",
    issuer: "Amazon Web Services (Coursera)",
    date: "July 2025",
    description:
      "Mastered AI fundamentals, prompt engineering, and solution architecture with hands-on experience in Amazon Bedrock, PartyRock, and AWS AI services for scalable business solutions.",
  },
  {
    name: "AWS Fundamentals Specialization",
    issuer: "Amazon Web Services (Coursera)",
    date: "June 2025",
    description:
      "Gained proficiency in AWS core services, security concepts, workload migration, and serverless application development through hands-on labs.",
  },
  {
    name: "Google Project Management Certificate",
    issuer: "Coursera",
    date: "December 2024",
    description:
      "Enhanced expertise in managing complex projects and leading teams effectively.",
  },
  {
    name: "Certificate of Recognition",
    issuer: "Local Government Unit of Dumaguete City",
    date: "May 2022",
    description:
      "Served as a Resource Lecturer for the CSC Career Service Examination Review, conducting 16 hours of training on Numerical Competency and English at NORSU Main Campus.",
  },
];

const contactInfo = [
  {
    type: "Phone",
    value: "+63 (965) 791-9686",
    href: "tel:+639657919686",
    icon: "📱",
  },
  {
    type: "Location",
    value: "Dumaguete City, Philippines",
    icon: "📍",
  },
  {
    type: "Email",
    value: "carlserquina.dev@gmail.com",
    href: "mailto:carlserquina.dev@gmail.com",
    icon: "✉️",
  },
  {
    type: "LinkedIn",
    value: "linkedin.com/in/carl-serquiña-ab5509201",
    href: "https://linkedin.com/in/carl-serquiña-ab5509201",
    icon: "💼",
  },
  {
    type: "Portfolio",
    value: "www.carlserquina.com",
    href: "https://www.carlserquina.com",
    icon: "🌐",
  },
];

export default function DesktopPage() {
  // Memoizations as before
  const memoizedProjects = useMemo(() => projects, []);
  const memoizedExperiences = useMemo(() => experiences, []);
  const memoizedSkillCategories = useMemo(() => skillCategories, []);
  const memoizedCertifications = useMemo(() => certifications, []);
  const memoizedContactInfo = useMemo(() => contactInfo, []);

  // Structured Data (JSON-LD)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Carl Serquiña",
    jobTitle: "Full Stack Web Developer",
    url: "https://www.carlserquina.com",
    email: "carlserquina.dev@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dumaguete City",
      addressCountry: "PH",
    },
    sameAs: [
      "https://linkedin.com/in/carl-serquiña-ab5509201",
      "https://www.carlserquina.com",
    ],
  };

  return (
    <>
      <Head>
        <title>
          Carl Serquiña | Full Stack Developer Portfolio in Dumaguete,
          Philippines
        </title>
        <meta
          name="description"
          content="Carl Serquiña is a Full Stack Web Developer from Dumaguete City, Philippines. Explore projects, skills, and experiences in modern web development using TypeScript, React, Node.js, Next.js, AWS, and more."
        />
        <meta
          property="og:title"
          content="Carl Serquiña | Full Stack Developer"
        />
        <meta
          property="og:description"
          content="Portfolio of Carl Serquiña, experienced web developer specializing in React, Next.js, and cloud platforms. Based in Dumaguete City, Philippines."
        />
        <meta
          property="og:image"
          content="/showcase/token-metrics-loyalty.png"
        />
        <meta property="og:url" content="https://www.carlserquina.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Carl Serquiña | Full Stack Developer"
        />
        <meta
          name="twitter:description"
          content="See the portfolio and projects of Carl Serquiña, full stack developer from Dumaguete City, Philippines."
        />
        <meta
          name="twitter:image"
          content="/showcase/token-metrics-loyalty.png"
        />
        <link rel="canonical" href="https://www.carlserquina.com/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <main className={styles.pageContainer}>
        <header className={styles.header}>
          <h1 style={{ color: "white" }}>Carl Serquiña</h1>
          <p className={gothicA1.className}>
            Experienced Full Stack Web Developer based in Dumaguete City,
            Philippines. 6+ years developing scalable web applications with
            TypeScript, React, Next.js, and AWS. Skilled in building responsive,
            high-performance websites that boost engagement and streamline
            workflows.
          </p>
        </header>

        {/* Projects Section */}
        <section
          className={styles.projectsContainer}
          aria-labelledby="projects-heading"
        >
          <h2 id="projects-heading">Projects</h2>
          <div className={styles.projectsGrid}>
            {memoizedProjects.map((project, idx) => (
              <InView key={project.title} triggerOnce>
                {({ inView, ref }) => (
                  <article
                    ref={ref}
                    className={styles.projectCard}
                    tabIndex={0}
                    aria-label={project.title}
                    style={{
                      opacity: inView ? 1 : 0,
                      transform: inView ? "none" : "translateY(40px)",
                      transition: "all 0.5s",
                    }}
                  >
                    <div className={styles.projectImageContainer}>
                      <Image
                        src={project.image}
                        alt={project.alt}
                        fill
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={idx < 2}
                        className={styles.projectImage}
                      />
                    </div>
                    <div className={styles.projectContent}>
                      <h3>
                        <Link
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.projectLink}
                        >
                          {project.title}
                        </Link>
                      </h3>
                      <p>{project.description}</p>
                    </div>
                  </article>
                )}
              </InView>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section
          className={styles.experienceSection}
          aria-labelledby="experience-heading"
        >
          <h2 id="experience-heading">Experience</h2>
          <div className={styles.experienceGrid}>
            {memoizedExperiences.map((exp) => (
              <article
                key={exp.title + exp.company}
                className={styles.experienceCard}
              >
                <div className={styles.experienceHeader}>
                  <h3>{exp.title}</h3>
                </div>
                <div className={styles.companyInfo}>
                  <span className={styles.company}>{exp.company}</span>
                  <span className={styles.location}>{exp.location}</span>
                  <span className={styles.date}>{exp.date}</span>
                </div>
                <ul className={styles.highlights}>
                  {exp.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
                <div className={styles.techStack}>
                  <h4>Technologies</h4>
                  <div className={styles.techGrid}>
                    {exp.technologies.map((tech) => (
                      <span key={tech} className={styles.techBadge}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section
          className={styles.certificationsSection}
          aria-labelledby="certifications-heading"
        >
          <h2 id="certifications-heading">Certifications</h2>
          <div className={styles.certificationsGrid}>
            {memoizedCertifications.map((cert) => (
              <article key={cert.name} className={styles.certificationCard}>
                <div className={styles.certHeader}>
                  <h3>{cert.name}</h3>
                </div>
                <div className={styles.certMeta}>
                  <span className={styles.issuer}>{cert.issuer}</span>
                  <span className={styles.certDate}>{cert.date}</span>
                </div>
                <p className={styles.certDescription}>{cert.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section
          className={styles.skillsSection}
          aria-labelledby="skills-heading"
        >
          <h2 id="skills-heading">Skills</h2>
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
          aria-labelledby="contact-heading"
        >
          <h2 id="contact-heading">Contact</h2>
          <div className={styles.contactGrid}>
            {memoizedContactInfo.map((info) => (
              <div key={info.type} className={styles.contactItem}>
                <span className={styles.contactIcon}>{info.icon}</span>
                <div className={styles.contactDetails}>
                  <strong>{info.type}</strong>
                  {info.href ? (
                    <a
                      href={info.href}
                      target="_blank"
                      rel={
                        info.type === "LinkedIn" || info.type === "Portfolio"
                          ? "me noopener noreferrer"
                          : "noopener noreferrer"
                      }
                    >
                      {info.value}
                    </a>
                  ) : (
                    <span>{info.value}</span>
                  )}
                </div>
              </div>
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
  );
}
