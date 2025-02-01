import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
      {/* Hero Section */}
      <section
  className="relative w-full h-screen flex justify-center items-center bg-cover bg-center"
  // style={{
  //   backgroundImage:
  //     "url('https://www.truesdalelandscaping.com/content/uploads/2017/10/Nursery-1.jpg')",
  // }}
>
  <div className="absolute inset-0 bg-black opacity-50"></div>
  <div className="relative z-10 text-center text-white p-4">
    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4 animate__animated animate__fadeIn">
      Welcome to NurseryMart
    </h1>
    <p className="text-xl md:text-2xl mb-8 animate__animated animate__fadeIn animate__delay-1s">
      Your one-stop solution for gardening and agriculture supplies
    </p>
    <a
      href="#plants"
      className="px-6 py-3 bg-green-500 text-white font-semibold text-lg rounded-lg shadow-lg transition-transform transform hover:scale-110 hover:bg-green-600 duration-300"
    >
      Explore Our Plants
    </a>
  </div>
</section>

      {/* Featured Plants Section */}
      <section id="plants" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-12 text-gray-800">Featured Plants</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plant Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-xl duration-300">
              <img src="https://images.unsplash.com/photo-1576030145505-d7c5f9a9173b" alt="Plant 1" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">Aloe Vera</h3>
              <p className="text-gray-600 mb-4">Aloe Vera is a popular succulent known for its medicinal properties and easy care.</p>
              <a href="#!" className="text-green-500 font-semibold hover:text-green-600 transition-colors">Learn More</a>
            </div>

            {/* Plant Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-xl duration-300">
              <img src="https://images.unsplash.com/photo-1605080058944-e83cc11fe0e3" alt="Plant 2" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fern</h3>
              <p className="text-gray-600 mb-4">A lush green fern that adds a tropical feel to any home or garden.</p>
              <a href="#!" className="text-green-500 font-semibold hover:text-green-600 transition-colors">Learn More</a>
            </div>

            {/* Plant Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-xl duration-300">
              <img src="https://images.unsplash.com/photo-1570927129261-2ba70b31bdf4" alt="Plant 3" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">Rose</h3>
              <p className="text-gray-600 mb-4">Roses are one of the most popular flowers, known for their beauty and fragrance.</p>
              <a href="#!" className="text-green-500 font-semibold hover:text-green-600 transition-colors">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-500 py-16 text-center text-white">
        <h2 className="text-3xl font-semibold mb-4">Get Started with Your Gardening Journey</h2>
        <p className="text-xl mb-6">Join NurseryMart today to access a wide range of plants and gardening tools to help you grow your dream garden.</p>
        <a href="#!" className="px-8 py-3 bg-blue-500 text-white font-semibold text-lg rounded-lg shadow-lg transition-transform transform hover:scale-110 hover:bg-blue-600 duration-300">
          Start Shopping
        </a>
      </section>

     
    </div>
  );
}
