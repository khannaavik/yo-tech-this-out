import { Component } from 'react';

/**
 * ErrorBoundary Component
 * Catches component errors and displays fallback UI
 */
export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error details
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI
      return (
        <div style={{
          padding: '2rem',
          backgroundColor: '#ff0000',
          color: '#ffffff',
          minHeight: '100vh',
          fontFamily: 'system-ui, sans-serif',
        }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
            ⚠️ Component Error
          </h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
            A component failed to render, but the rest of the app should still work.
          </p>
          {this.state.error && (
            <details style={{ marginTop: '1rem' }}>
              <summary style={{ cursor: 'pointer', marginBottom: '0.5rem' }}>
                Error Details (click to expand)
              </summary>
              <pre style={{
                backgroundColor: '#000',
                padding: '1rem',
                overflow: 'auto',
                fontSize: '0.9rem',
              }}>
                {this.state.error.toString()}
                {this.state.errorInfo?.componentStack}
              </pre>
            </details>
          )}
          <button
            onClick={() => {
              this.setState({ hasError: false, error: null, errorInfo: null });
              window.location.reload();
            }}
            style={{
              marginTop: '1rem',
              padding: '0.5rem 1rem',
              fontSize: '1rem',
              cursor: 'pointer',
              backgroundColor: '#fff',
              color: '#000',
              border: 'none',
              borderRadius: '4px',
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

