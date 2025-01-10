import React, { useEffect } from 'react'; // Add React import
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from './lib/theme';
import App from './App';
import './index.css';

// Error Boundary Component (Functional Component)
const ErrorBoundary = ({ children }: { children: React.ReactNode }) => {
  const [hasError, setHasError] = React.useState(false);

  useEffect(() => {
    const errorHandler = (error: ErrorEvent) => {
      console.error('Error caught by ErrorBoundary:', error.error);
      setHasError(true);
      // You can log the error to an error reporting service here (e.g., Sentry)
    };

    window.addEventListener('error', errorHandler);
    return () => window.removeEventListener('error', errorHandler);
  }, []);

  if (hasError) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Something went wrong.
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Please refresh the page or try again later.
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

// Root Render Function
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Failed to find the root element');
}

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    {/* StrictMode helps identify potential issues in development by rendering components twice */}
    <ErrorBoundary>
      {/* ErrorBoundary catches and handles errors in the app */}
      <ThemeProvider>
        {/* ThemeProvider manages the app's light/dark theme */}
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </StrictMode>
);

// Performance Monitoring (Optional)
if (import.meta.env.DEV) {
  console.log('Running in development mode');
  // You can add development-specific logging or debugging tools here
}

if (import.meta.env.PROD) {
  console.log('Running in production mode');
  // Initialize performance monitoring tools (e.g., Google Analytics, Sentry)
  useEffect(() => {
    console.log('Initializing performance monitoring...');
    // Example: Initialize Sentry
    // Sentry.init({ dsn: 'YOUR_SENTRY_DSN' });
  }, []);
}