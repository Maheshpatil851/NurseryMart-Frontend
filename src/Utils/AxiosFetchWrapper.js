import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: "https://localhost:44313",  // Set your base API URL
  timeout: 70000,  // Timeout for requests (optional)
  headers: {
    'Content-Type': 'application/json',  // Default header for JSON
  },
});

export const axiosWrapper = {
  get: request('GET'),
  post: request('POST'),
  put: request('PUT'),
  patch: request('PATCH'),
  delete: request('DELETE'),
};

function request(method) {
  return async (url, body = null, loading = true) => {
    const requestOptions = {
      method,
      headers: authHeader(url, body),
      data: null,
      showLoading: loading,
    };

    if (body) {
      // If it's not a FormData instance, convert to JSON
      if (!(body instanceof FormData)) {
        requestOptions.data = JSON.stringify(body);
      } else {
        requestOptions.data = body;  // Use the FormData as-is
      }
    }

    try {
      console.log("here in axios", url);
      const response = await axiosInstance(url, requestOptions);
      const data = response.data;

      return data;
    } catch (error) {
      // Handle specific response errors like 401 (Unauthorized)
      if (error.response) {
        if (error.response.status === 401) {
          // Unauthorized: Handle this in the slice or component
          return Promise.reject('Unauthorized');
        }

        // Handle error response data
        const errorData = error.response.data || {};
        const errorMessage = errorData.message || 'Unknown error occurred';

        return Promise.reject({
          message: errorMessage,
          status: error.response.status,
        });
      }

      // If no response, it's a network error
      return Promise.reject({
        message: error.message || 'Network error',
        status: null,
      });
    }
  };
}

function authHeader(url, body) {
  const accessToken = localStorage.getItem('accessToken'); 
  console.log("accessToken in axios",accessToken)  // Get the access token from local storage
  const isLoggedIn = !!accessToken;
  const isApiUrl = url.startsWith("https://localhost:44313"); // Replace with your actual API URL
  console.log("isloggedin",isLoggedIn ,isApiUrl)

  if (isLoggedIn ) {
    console.log("inside authheader")
    // If authenticated, set Authorization header with the token
    return {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': body instanceof FormData ? 'multipart/form-data' : 'application/json',
    };
  }

  // If not authenticated, just send the Content-Type header
  return {
    'Content-Type': 'application/json',
  };
}
