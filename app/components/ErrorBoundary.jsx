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
          backgroundColor: '#fef6e4',
          borderRadius: '12px',
          margin: '1rem',
          border: '1px solid #fa7070',
        }}>
          <h2 style={{ color: '#fa7070', marginBottom: '1rem' }}>
            Something went wrong
          </h2>
          <p style={{ color: '#557c55', marginBottom: '1rem' }}>
            We're sorry, but there was an error loading this content.
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              background: '#557c55',
              color: 'white',
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