export function getErrorMessage(error: Error): string {
  // Handle specific error types
  if (error instanceof TypeError) {
    return 'There was a problem with the data type. Please try again.';
  }
  
  if (error instanceof ReferenceError) {
    return 'There was a problem with the application. Please try again.';
  }

  // Network errors
  if (error.name === 'NetworkError') {
    return 'Unable to connect to the server. Please check your internet connection.';
  }

  // Authentication errors
  if (error.message.includes('401') || error.message.includes('403')) {
    return 'You are not authorized to perform this action.';
  }

  // Return original message if no specific handling
  return error.message || 'An unexpected error occurred.';
}