import React, { useEffect, useRef } from "react";
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
    featured: true,
    link: "https://www.tokenmetrics.com/",
  },
  {
    title: "Flexisource IT Employee Portal",
    image: "/showcase/flexisource-portal.png",
    alt: "HRIS Portal screenshot",
    featured: true,
    link: "https://flexisourceit.com.au/",
  },
  {
    title: "Token Metrics 3.0",
    image: "/showcase/token-metrics.png",
    alt: "Token Metrics 3.0 screenshot",
    link: "https://www.tokenmetrics.com/",
  },
  {
    title: "Paradox Interactive Gaming Store",
    image: "/showcase/paradox-store.png",
    alt: "Gaming Store website screenshot",
    link: "https://www.paradoxinteractive.com/our-games/discover",
  },
  {
    title: "Novari Collective Interior Design",
    image: "/showcase/novari.png",
    alt: "Interior Design Website screenshot",
    link: "https://novaricollective.com.au/",
  },
  {
    title: "Recime Recipe Website",
    image: "/showcase/recime.png",
    alt: "Recipe App screenshot",
    link: "https://www.recime.app/",
  },
];

const experiences = [
  {
    title: "Frontend Engineer II",
    company: "Outliant",
    location: "Remote (Austin, Texas)",
    date: "December 2024 - Present",
  },
  {
    title: "Frontend Web Developer",
    company: "Token Metrics LLC",
    location: "Remote (Austin, Texas)",
    date: "March 2024 - August 2024",
  },
  {
    title: "Developer",
    company: "Paradox Interactive AB",
    location: "Stockholm, Sweden",
    date: "August 2023 - January 2024",
  },
  {
    title: "Frontend Developer",
    company: "Flexisource IT",
    location: "Makati, Philippines",
    date: "April 2022 - June 2023",
  },
  {
    title: "Frontend Developer",
    company: "Self-Employed/Freelance",
    location: "Dumaguete, Philippines",
    date: "March 2018 - April 2022",
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
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      "Problem-solving",
      "Team Collaboration",
      "Adaptability",
      "Communication",
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
    ],
  },
];

const contactInfo = [
  {
    type: "Phone",
    value: "+63 (965) 791-9686",
    href: "tel:+639657919686",
  },
  {
    type: "Location",
    value: "Dumaguete City, Philippines",
  },
  {
    type: "Email",
    value: "carlserquina.dev@gmail.com",
    href: "mailto:carlserquina.dev@gmail.com",
  },
  {
    type: "LinkedIn",
    value: "linkedin.com/in/carl-serquiña-ab5509201",
    href: "https://linkedin.com/in/carl-serquiña-ab5509201",
  },
  {
    type: "Portfolio",
    value: "www.carlserquina.com",
    href: "www.carlserquina.com",
  },
];

function DesktopPage() {
  const projectRefs = useRef([]);
  const skillRefs = useRef([]);

  useEffect(() => {
    const aliveInterval = setInterval(() => {
      const index = Math.floor(Math.random() * projectRefs.current.length);
      const tile = projectRefs.current[index];
      if (tile && !tile.classList.contains(styles.alive)) {
        tile.classList.add(styles.alive);
        setTimeout(() => {
          tile.classList.remove(styles.alive);
        }, 1000);
      }
    }, 5000 + Math.random() * 5000);

    const pulseInterval = setInterval(() => {
      const index = Math.floor(Math.random() * skillRefs.current.length);
      const cell = skillRefs.current[index];
      if (cell && !cell.classList.contains(styles.pulse)) {
        cell.classList.add(styles.pulse);
        setTimeout(() => {
          cell.classList.remove(styles.pulse);
        }, 1000);
      }
    }, 3000 + Math.random() * 5000);

    return () => {
      clearInterval(aliveInterval);
      clearInterval(pulseInterval);
    };
  }, []);

  return (
    <div>
      <header className={styles.header}>
        <h1>CARL SERQUIÑA</h1>
        <p>
          Full Stack Web Developer specializing in Next.js, React.js, and
          Vue.js. Passionate about creating engaging and efficient web
          applications.
        </p>
      </header>
      <div className={styles.projectsContainer}>
        <h2 className={styles.projectsHeading}>Projects</h2>
        <div className={styles.gridContainer}>
          {projects.map((project, index) => {
            const bgColor = palette[index % palette.length];
            const textColor = getTextColor(bgColor);
            return (
              <Link
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.tileLink} ${
                  index === 0
                    ? styles.featured1
                    : index === 1
                    ? styles.featured2
                    : ""
                }`}
              >
                <div
                  ref={(el) => (projectRefs.current[index] = el)}
                  className={`${styles.tile} ${
                    project.featured ? styles.featured : ""
                  } ${
                    bgColor === "#F2FFE9" || bgColor === "#A6CF98"
                      ? styles.shadow
                      : ""
                  }`}
                  style={{
                    "--background": bgColor,
                    "--color": textColor,
                    "--index": index,
                  }}
                >
                  <div className={styles.imageContainer}>
                    <img src={project.image} alt={project.alt} />
                  </div>
                  <div className={styles.textContainer}>
                    <h3>{project.title}</h3>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className={styles.experiencesContainer}>
        <h2>Experiences</h2>
        <div className={styles.experiencesGrid}>
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={styles.experienceCard}
              style={{ "--index": index }}
            >
              <h3>
                {exp.title} at {exp.company}
              </h3>
              <p>
                {exp.location} | {exp.date}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.skillsContainer}>
        <h2>Skills</h2>
        {skillCategories.map((cat, catIndex) => (
          <div key={catIndex} className={styles.skillCategory}>
            <h3>{cat.category}</h3>
            <div className={styles.skillsGrid}>
              {cat.skills.map((skill, i) => {
                const bgColor = palette[i % palette.length];
                const textColor = getTextColor(bgColor);
                return (
                  <div
                    key={i}
                    ref={(el) =>
                      (skillRefs.current[catIndex * cat.skills.length + i] = el)
                    }
                    className={`${styles.skillCell} ${
                      bgColor === "#F2FFE9" || bgColor === "#A6CF98"
                        ? styles.skillShadow
                        : ""
                    }`}
                    style={{
                      backgroundColor: bgColor,
                      color: textColor,
                      "--index": i,
                    }}
                  >
                    {skill}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.contactContainer}>
        <h2>Contact Me</h2>
        <div className={styles.contactGrid}>
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className={styles.contactItem}
              style={{ "--index": index }}
            >
              <strong>{info.type}:</strong>{" "}
              {info.href ? (
                <a href={info.href} target="_blank" rel="noopener noreferrer">
                  {info.value}
                </a>
              ) : (
                info.value
              )}
            </div>
          ))}
        </div>
      </div>
      <footer className={styles.footer}>© Carl Serquiña 2025</footer>
    </div>
  );
}

export default DesktopPage;
