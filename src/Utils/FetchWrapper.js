const BASE_URL = import.meta.env.VITE_REACT_APP_API_URL;


// Function to handle API requests
export const fetchData = async (url, options = {}) => {
  try {
    const response = await fetch(`https://localhost:44313${url}`, {
      method: options.method || 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        ...options.headers,
      },
      body: options.body ? JSON.stringify(options.body) : null,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Something went wrong');
    }

    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error(err.message || 'Network error');
  }
};

