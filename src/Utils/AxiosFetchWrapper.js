import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: "https://localhost:44313",  
  timeout: 70000,  
  headers: {
    'Content-Type': 'application/json',  
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
      const response = await axiosInstance(url, requestOptions);
      const data = response.data;

      return data;
    } catch (error) {
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
  const isLoggedIn = !!accessToken;
  const isApiUrl = url.startsWith("https://localhost:44313"); // Replace with your actual API URL

  if (isLoggedIn ) {
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
