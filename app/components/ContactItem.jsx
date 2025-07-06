import React from 'react';
import styles from '../desktop.module.css';

export const ContactItem = ({ contact }) => {
  return (
    <div key={contact.type} className={styles.contactItem}>
      <span className={styles.contactIcon}>{contact.icon}</span>
      <div className={styles.contactDetails}>
        <strong>{contact.type}</strong>
        {contact.href ? (
          <a
            href={contact.href}
            target="_blank"
            rel={
              contact.type === "LinkedIn" || contact.type === "Portfolio"
                ? "me noopener noreferrer"
                : "noopener noreferrer"
            }
          >
            {contact.value}
          </a>
        ) : (
          <span>{contact.value}</span>
        )}
      </div>
    </div>
  );
}; 