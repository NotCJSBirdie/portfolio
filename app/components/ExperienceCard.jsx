import React from 'react';
import styles from '../desktop.module.css';

export const ExperienceCard = ({ experience }) => {
  return (
    <article
      key={experience.title + experience.company}
      className={styles.experienceCard}
    >
      <div className={styles.experienceHeader}>
        <h3>{experience.title}</h3>
      </div>
      <div className={styles.companyInfo}>
        <span className={styles.company}>{experience.company}</span>
        <span className={styles.location}>{experience.location}</span>
        <span className={styles.date}>{experience.date}</span>
      </div>
      <ul className={styles.highlights}>
        {experience.highlights.map((highlight, i) => (
          <li key={i}>{highlight}</li>
        ))}
      </ul>
      <div className={styles.techStack}>
        <h4>Technologies</h4>
        <div className={styles.techGrid}>
          {experience.technologies.map((tech) => (
            <span key={tech} className={styles.techBadge}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}; 