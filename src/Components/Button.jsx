import { useState } from 'react';

const Button = ({ onClick, disabled, children }) => {
    console.log("button",disabled )
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    if (onClick) {
      setIsLoading(true);
      await onClick();
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled || isLoading}
      className={`relative px-6 mx-5 py-3 rounded-full font-semibold transition-all duration-300 ease-in-out 
        ${disabled || isLoading ? 'bg-gray-300 cursor-not-allowed' : 'bg-gradient-to-r from-blue-400 to-indigo-500 hover:from-blue-500 hover:to-indigo-600 text-white'}
        hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 w-full sm:w-auto`}
    >
      {/* Spinner for loading state */}
      {isLoading ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-5 h-5 border-4 border-t-4 border-white border-solid rounded-full animate-spin"></div>
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
