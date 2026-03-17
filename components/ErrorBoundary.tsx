import React from 'react';
import Link from 'next/link';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

/**
 * Error Boundary Component
 * Catches React component errors and displays a fallback UI
 */
export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    }
    // In production, you could send to error tracking service (e.g., Sentry)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-b from-primary to-gray-900 flex items-center justify-center px-4">
          <div className="max-w-md w-full text-center">
            <div className="mb-8">
              <h1 className="text-5xl font-bold text-gold mb-4">Oops!</h1>
              <p className="text-xl text-gray-300 mb-4">Something went wrong</p>
              <p className="text-gray-400 mb-8">
                {this.state.error?.message ||
                  'An unexpected error occurred. Please try refreshing the page.'}
              </p>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => window.location.reload()}
                className="w-full bg-accent hover:bg-gold text-primary py-3 rounded-lg font-bold transition"
              >
                Refresh Page
              </button>
              <Link
                href="/"
                className="block w-full border-2 border-gold text-gold hover:bg-gold hover:text-primary py-3 rounded-lg font-bold transition"
              >
                Go to Home
              </Link>
            </div>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-8 text-left bg-gray-800 p-4 rounded border border-red-500">
                <summary className="cursor-pointer text-red-400 font-bold mb-2">
                  Error Details (Development Only)
                </summary>
                <pre className="text-xs text-red-300 overflow-auto max-h-48">
                  {this.state.error.stack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
