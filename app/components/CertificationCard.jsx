import React from 'react';
import styles from '../desktop.module.css';

export const CertificationCard = ({ certification }) => {
  return (
    <article key={certification.name} className={styles.certificationCard}>
      <div className={styles.certHeader}>
        <h3>{certification.name}</h3>
      </div>
      <div className={styles.certMeta}>
        <span className={styles.issuer}>{certification.issuer}</span>
        <span className={styles.certDate}>{certification.date}</span>
      </div>
      <p className={styles.certDescription}>{certification.description}</p>
    </article>
  );
}; 