const BASE_URL = import.meta.env.VITE_REACT_APP_API_URL;
import { setLoading } from '../Features/LoadingSlice'; 
import { useDispatch } from 'react-redux';
// export const fetchWrapper = {
//     get: request('GET'),
//     post: request('POST'),
//     put: request('PUT'),
//     patch: request('PATCH'),
//     delete: request('DELETE')
//   }

//   function request(method: string) {
  
//     return (url: string, body: any , loading : any = true) => {
//       const requestOptions = {
//         method,
//         headers: authHeader(url, body ),
//         body: null ,
//         showLoading : loading
//       }
//       if (body) {
//         //   requestOptions.headers["Content-Type"] = "application/json";
//         if (!(body instanceof FormData)) requestOptions.body = JSON.stringify(body)
//         else requestOptions.body = body
//       }
//       if ( requestOptions.showLoading) {
//       const {setLoading} = useAuthStore()  
//       setLoading(true); 
//       }
//       return fetch(url, requestOptions).then(handleResponse)
//     }
//   }

//   function authHeader(url: string, body: any ) {
//     // return auth header with jwt if user is logged in and request is to the api url
//     const {  accessToken } = useAuthStore()  
//     const isLoggedIn = !!accessToken
//     const isApiUrl = url.startsWith(import.meta.env.VITE_API_URL)
//     if (isLoggedIn && isApiUrl) {
//       const contentType = 'application/json'
//       if (body instanceof FormData) {      
//         return { Authorization: `Bearer ${accessToken}` }
//       }
//       return { Authorization: `Bearer ${accessToken}`, 'Content-Type': contentType }
//     } else {
//       return { 'Content-Type': 'application/json' }
//     }
//   }

//   async function handleResponse(response: any) {
//     const isJson =
//       response.headers?.get('content-type')?.includes('application/json') ||
//       response.headers?.get('content-type')?.includes('application/problem+json')
//     const data = isJson ? await response.json() : response  
//     // check for error response
//     const {setLoading} = useAuthStore() ;
//       setLoading(false);  
//     if (!response.ok) {
//       const auth = useAuthStore()  
        
//       if ([401].includes(response.status)) {
//         // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
//         auth.clearAccessToken();
//         router.push({name:'login'})
//       }
//       // get error message from body or default to response status
      
//       const error = (data && data.message) || (data && data.title) || response.status
//       return Promise.reject(error)
//     } 
//     return data
//   }

// Function to handle API requests
export const fetchData = async (endpoint, options = {}) => {
  const dispatch = useDispatch(); 
  try {
    dispatch(setLoading(true));
    const response = await fetch(`https://localhost:44313${endpoint}`, {
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
    dispatch(setLoading(false));
    return await response.json();
  } catch (error) {
    dispatch(setLoading(false));
    throw error;
  }
};

// // Example of a specific API call
// export const fetchUserData = async (userId) => {
//   return fetchData(`/users/${userId}`);
// };