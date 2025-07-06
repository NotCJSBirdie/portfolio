import React from "react";
import Link from "next/link";
import styles from "./desktop.module.css";

const palette = ["#F2FFE9", "#A6CF98", "#557C55", "#FA7070"];

const getTextColor = (bg) => {
  switch (bg) {
    case "#F2FFE9":
    case "#A6CF98":
      return "#557C55";
    case "#557C55":
      return "#F2FFE9";
    case "#FA7070":
      return "#FFFFFF";
    default:
      return "#000000";
  }
};

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

function DesktopPage() {
  return (
    <div className={styles.pageContainer}>
      {/* Header */}
      <header className={styles.header}>
        <h1>Carl Serquiña</h1>
        <p>
          Experienced Full Stack Web Developer with 6+ years of expertise in
          building responsive and scalable web applications using TypeScript,
          React, Node.js, PostgreSQL, and AWS. Proven ability to enhance user
          engagement by 20% and streamline workflows by 30%.
        </p>
      </header>

      {/* Projects Section */}
      <section className={styles.projectsContainer}>
        <h2>Featured Projects</h2>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => {
            const bgColor = palette[index % palette.length];
            const textColor = getTextColor(bgColor);

            return (
              <Link
                key={index}
                href={project.link}
                className={styles.projectLink}
              >
                <div
                  className={styles.projectCard}
                  style={{
                    backgroundColor: bgColor,
                    color: textColor,
                  }}
                >
                  <div className={styles.projectImage}>
                    <img src={project.image} alt={project.alt} />
                  </div>
                  <div className={styles.projectContent}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Work Experience */}
      <section className={styles.experienceSection}>
        <h2>Work Experience</h2>
        <div className={styles.experienceGrid}>
          {experiences.map((exp, index) => (
            <div key={index} className={styles.experienceCard}>
              <div className={styles.experienceHeader}>
                <h3>{exp.title}</h3>
                <div className={styles.companyInfo}>
                  <span className={styles.company}>{exp.company}</span>
                  <span className={styles.location}>{exp.location}</span>
                </div>
                <p className={styles.date}>{exp.date}</p>
              </div>

              <div className={styles.experienceContent}>
                <ul className={styles.highlights}>
                  {exp.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>

                <div className={styles.techStack}>
                  <h4>Technologies:</h4>
                  <div className={styles.techGrid}>
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className={styles.techBadge}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section className={styles.certificationsSection}>
        <h2>Certifications & Achievements</h2>
        <div className={styles.certificationsGrid}>
          {certifications.map((cert, index) => (
            <div key={index} className={styles.certificationCard}>
              <div className={styles.certHeader}>
                <h3>{cert.name}</h3>
                <div className={styles.certMeta}>
                  <span className={styles.issuer}>{cert.issuer}</span>
                  <span className={styles.certDate}>{cert.date}</span>
                </div>
              </div>
              <p className={styles.certDescription}>{cert.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className={styles.skillsSection}>
        <h2>Skills & Expertise</h2>
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className={styles.skillCategory}>
            <h3>{category.category}</h3>
            <div className={styles.skillsGrid}>
              {category.skills.map((skill, skillIndex) => {
                const globalIndex = categoryIndex * 20 + skillIndex;
                const bgColor = palette[globalIndex % palette.length];
                const textColor = getTextColor(bgColor);
                return (
                  <div
                    key={skillIndex}
                    className={styles.skillCell}
                    style={{
                      backgroundColor: bgColor,
                      color: textColor,
                    }}
                  >
                    {skill}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </section>

      {/* Contact Section */}
      <section className={styles.contactSection}>
        <h2>Get In Touch</h2>
        <div className={styles.contactGrid}>
          {contactInfo.map((info, index) => (
            <div key={index} className={styles.contactItem}>
              <span className={styles.contactIcon}>{info.icon}</span>
              <div className={styles.contactDetails}>
                <strong>{info.type}:</strong>
                {info.href ? (
                  <a href={info.href} target="_blank" rel="noopener noreferrer">
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

      {/* Footer */}
      <footer className={styles.footer}>
        <p>
          © 2025 Carl Serquiña. Built with React, Next.js, and passion for great
          web experiences.
        </p>
      </footer>
    </div>
  );
}

export default DesktopPage;
