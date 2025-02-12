import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CreateNewPassword } from "../Features/AuthSlice";

function ForgerPasswordModel(props) {
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState('');
  const [data, setData] = useState({
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });
  var dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.password !== data.confirmPassword) {
        setErrorMessage('Passwords do not match');
        return;
      }
    await dispatch(CreateNewPassword(data));
    props.handleModel();
  };

  return (
    <div>
      {props.isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 text-black bg-opacity-50 flex justify-center items-center z-50 backdrop-blur-sm">
          <div className="bg-white rounded-lg p-6 max-w-xl w-full shadow-lg">
            <h2 className="text-xl font-bold mb-4">Create New Password</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={data.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="userName" className="block text-sm font-medium">
                  UserName
                </label>
                <input
                  type="text"
                  name="userName"
                  placeholder="Enter your UserName"
                  value={data.userName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium">
                  New Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your New Password"
                  value={data.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm your password"
                    value={data.confirmPassword}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10" // pr-10 for space for the SVGs
                    required
                  />
                  <span className="absolute right-2 top-1/2 transform -translate-y-1/2">
                    {data.password &&
                    data.confirmPassword &&
                    data.password === data.confirmPassword ? (
                      // Green checkmark SVG
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-green-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 4.293a1 1 0 00-1.414 0L8 11.586 4.707 8.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      // Red cross SVG
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-red-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 11-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 11-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </span>
                </div>
              </div>

              {errorMessage && (
                <div className="text-sm text-red-500 mb-4">{errorMessage}</div>
              )}

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={props.handleModel}
                  className="text-gray-600 hover:text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ForgerPasswordModel;
