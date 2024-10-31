/**
 * Logs detailed information about an error, including HTTP status and response text if available.
 * @param error - The error object caught in the try-catch block.
 */
export const logErrorDetails = (error: any): void => {
  console.error('Login failed:', error);

  if (error?.response) {
    console.log('Error response status:', error.response.status);
    console.log('Error response status text:', error.response.statusText);

    error.response.text()
      .then((body: string) => {
        console.log('Error response body:', body);
      })
      .catch((parseError: any) => {
        console.error('Failed to parse error response body:', parseError);
      });
  } else {
    console.error('An unknown error occurred:', error);
  }
};
