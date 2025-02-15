import React, { useState } from 'react';

function ProductFeatures({ features }) {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleTab = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mt-8">
      <h3 
  className={`text-xl font-semibold text-gray-800 cursor-pointer py-2 px-4 border-b-2 transition-all duration-300 ease-in-out ${
    isOpen ? 'border-blue-500 text-blue-500' : 'border-transparent hover:border-blue-300 hover:text-blue-600'
  }`} 
  onClick={toggleTab}
>
  Product Features
</h3>


      {/* Tab content visibility toggle */}
      {isOpen && (
        <table className="min-w-full mt-4 border-collapse">
          <thead>
            <tr>
              <th className="border-b-2 border-gray-300 px-4 py-2 text-left">Feature</th>
              <th className="border-b-2 border-gray-300 px-4 py-2 text-left">Details</th>
            </tr>
          </thead>
          <tbody>
                    {Object.entries(features || {}).map(([key, value]) => (
                        <tr key={key}>
                        <td className="border-b border-gray-300 px-4 py-2 font-semibold">{key}</td>
                        <td className="border-b border-gray-300 px-4 py-2">
                            {typeof value === 'boolean' ? (value ? 'Yes' : 'No') : value}
                        </td>
                        </tr>
                    ))}
                    </tbody>

        </table>
      )}
    </div>
  );
}

export default ProductFeatures;
