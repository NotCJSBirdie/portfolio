import React from 'react';
import styles from '../desktop.module.css';

export const LoadingSpinner = ({ size = 'medium', color = 'primary' }) => {
  const sizeClass = {
    small: '20px',
    medium: '40px',
    large: '60px',
  }[size];

  const colorClass = {
    primary: 'var(--primary-green)',
    accent: 'var(--accent-red)',
    white: 'var(--white)',
  }[color];

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
      }}
    >
      <div
        style={{
          width: sizeClass,
          height: sizeClass,
          border: `3px solid rgba(85, 124, 85, 0.1)`,
          borderTop: `3px solid ${colorClass}`,
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
        }}
      />
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}; 