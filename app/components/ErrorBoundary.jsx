import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '2rem',
          textAlign: 'center',
          backgroundColor: 'var(--bg-light)',
          borderRadius: '12px',
          margin: '1rem',
          border: '1px solid var(--accent-red)',
        }}>
          <h2 style={{ color: 'var(--accent-red)', marginBottom: '1rem' }}>
            Something went wrong
          </h2>
          <p style={{ color: 'var(--primary-green)', marginBottom: '1rem' }}>
            We&apos;re sorry, but there was an error loading this content.
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              background: 'var(--primary-green)',
              color: 'var(--white)',
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '1rem',
            }}
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 