// /src/api/apiWrapper.js
const BASE_URL = process.env.REACT_APP_API_URL;  

// Function to handle API requests
export const fetchData = async (endpoint, options = {}) => {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: options.method || 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`, 
      ...options.headers,
    },
    body: JSON.stringify(options.body),
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }

  return await response.json();
};

// // Example of a specific API call
// export const fetchUserData = async (userId) => {
//   return fetchData(`/users/${userId}`);
// };