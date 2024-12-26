interface ErrorLog {
  message: string;
  stack?: string;
  timestamp: string;
  url: string;
}

export function logError(error: Error, info: { componentStack: string }) {
  const errorLog: ErrorLog = {
    message: error.message,
    stack: error.stack,
    timestamp: new Date().toISOString(),
    url: window.location.href
  };

  // In development, log to console
  if (process.env.NODE_ENV === 'development') {
    console.error('Error occurred:', errorLog);
    console.error('Component stack:', info.componentStack);
  }

  // In production, you would send this to your error tracking service
  // Example: sendToErrorTracking(errorLog);
}