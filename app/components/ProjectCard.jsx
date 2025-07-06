import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { InView } from 'react-intersection-observer';
import styles from '../desktop.module.css';

export const ProjectCard = ({ project, index }) => {
  return (
    <InView triggerOnce>
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
              priority={index < 2}
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
  );
}; 