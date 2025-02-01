import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { UserRegister } from '../Features/AuthSlice';

function Register() {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [formData, setFormData] = useState({
    mobile : "",
    userName : "",
    email : "",
    country : country,
    state : state,
    city : city,
    password : "",
    confirmPassword : "",
    firstName: "string",
    lastName: "string",
    address: "string",
    pincode: "121212",
    gender: 'M'
  });
  const [errors, setErrors] = useState({
    password: '',
    confirmPassword: '',
  });

  var dispatch = useDispatch();
  var navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target; 
    setFormData((prevData) => ({
      ...prevData, 
      [name]: value, 
    }));

    if (name === 'password' || name === 'confirmPassword') {
      validatePasswords();
    }
  };


  const validatePasswords = () => {
    const newErrors = { ...errors };

    if (formData.password && formData.confirmPassword) {
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match.';
      } else {
        newErrors.confirmPassword = ''; 
      }
    }
    setErrors(newErrors);
  };

  const handleSubmit =(e)=> {
      e.preventDefault();
      setFormData((prevData) => ({
        ...prevData,
        country: country, 
        state: state,     
        city: city,       
      }));
      validatePasswords();
      if (!errors.password && !errors.confirmPassword) {
         dispatch(UserRegister(formData));  
          console.log('Form submitted:', formData);
          navigate("/home");
      }
  }



  const countries = ["USA", "Canada", "India"];

  useEffect(() => {
    if (country) {
      if (country === "USA") {
        setStates(["California", "Texas", "Florida"]);
      } else if (country === "Canada") {
        setStates(["Ontario", "Quebec", "Alberta"]);
      } else if (country === "India") {
        setStates(["Delhi", "Maharashtra", "Tamil Nadu"]);
      }
    } else {
      setStates([]);
    }
  }, [country]);

  useEffect(() => {
    if (state) {
      if (state === "California") {
        setCities(["Los Angeles", "San Francisco", "San Diego"]);
      } else if (state === "Ontario") {
        setCities(["Toronto", "Ottawa", "Hamilton"]);
      } else if (state === "Delhi") {
        setCities(["New Delhi", "Faridabad", "Gurgaon"]);
      } else if (state === "Maharashtra") {
        setCities(["pune", "mumbai", "ahemadnager", "shevgaon", "sangmaner"]);
      }
    } else {
      setCities([]);
    }
  }, [state]);

  return (
    <div className="relative bg-white dark:bg-gray-900 text-white min-h-screen">
  <div className="bg-gradient-to-r flex items-center justify-center min-h-screen">
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-md w-full">
      <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
        Create an Account
      </h2>
      <form id="registrationForm" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="mobile"
            className="block text-gray-700 dark:text-gray-300 font-semibold mb-2"
          >
            Mobile
          </label>
          <input
            type="number"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
            placeholder="Enter your mobile number"
            required
          />
          <p className="text-red-500 text-sm mt-2 hidden" id="mobileError">
            Mobile is required.
          </p>
        </div>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 dark:text-gray-300 font-semibold mb-2"
          >
            Username
          </label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
            placeholder="Enter your username"
            required
          />
          <p className="text-red-500 text-sm mt-2 hidden" id="usernameError">
            Username is required.
          </p>
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 dark:text-gray-300 font-semibold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
            placeholder="Enter your email"
            required
          />
          <p className="text-red-500 text-sm mt-2 hidden" id="emailError">
            Please enter a valid email.
          </p>
        </div>
        <div className="mb-4">
          <label
            htmlFor="country"
            className="block text-gray-700 dark:text-gray-300 font-semibold mb-2"
          >
            Country
          </label>
          <select
            id="country"
            name="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
          >
            <option value="">Select a country</option>
            {countries.map((c, index) => (
              <option key={index} value={c}>
                {c}
              </option>
            ))}
          </select>
          <p className="text-red-500 text-sm mt-2 hidden" id="countryError">
            Country is required.
          </p>
        </div>

        <div className="mb-4">
          <label
            htmlFor="state"
            className="block text-gray-700 dark:text-gray-300 font-semibold mb-2"
          >
            State
          </label>
          <select
            id="state"
            name="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
          >
            <option value="">Select a state</option>

            {states.map((s, index) => (
              <option key={index} value={s}>
                {s}
              </option>
            ))}
          </select>
          <p className="text-red-500 text-sm mt-2 hidden" id="stateError">
            State is required.
          </p>
        </div>

        <div className="mb-4">
          <label
            htmlFor="city"
            className="block text-gray-700 dark:text-gray-300 font-semibold mb-2"
          >
            City
          </label>
          <select
            id="city"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
          >
            <option value="">Select a city</option>

            {cities.map((c, index) => (
              <option key={index} value={c}>
                {c}
              </option>
            ))}
          </select>
          <p className="text-red-500 text-sm mt-2 hidden" id="cityError">
            City is required.
          </p>
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 dark:text-gray-300 font-semibold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
            placeholder="Enter your password"
            required
          />
          <p className="text-red-500 text-sm mt-2 hidden" id="passwordError">
            Password is required.
          </p>
        </div>
        <div className="mb-4">
          <label
            htmlFor="confirm-password"
            className="block text-gray-700 dark:text-gray-300 font-semibold mb-2"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
            placeholder="Confirm your password"
            required
          />
          {formData.password !== formData.confirmPassword && (
            <p className="text-red-500 text-sm mt-2">{errors.confirmPassword}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
        >
          Register
        </button>
      </form>
      <p className="text-center text-gray-600 dark:text-gray-300 mt-4">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-500 font-semibold">
          Sign In
        </Link>
      </p>
    </div>
  </div>
</div>

  );
}

export default Register;
