import React from 'react';

const FloatingButton = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
  <a href="https://wa.me/7350633397?text=Hello%20from%20NurseryMart!" target="_blank" rel="noopener noreferrer">
    <button className="bg-green-500 text-white p-4 shadow-lg hover:bg-green-600 transition-all 
      relative rounded-full before:absolute before:left-[-25px] before:bottom-[-10px] before:w-0 before:h-0 before:border-l-12 before:border-b-12 before:border-l-transparent before:border-b-green-500">
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
        alt="WhatsApp" 
        className="w-8 h-8 
          transform transition-all 
          hover:animate-bounce hover:opacity-80 
          hover:animate-pulse 
          border-2 border-transparent hover:border-green-400" 
      />
    </button>
  </a>
</div>

  
  
  );
};

export default FloatingButton;
