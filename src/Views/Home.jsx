import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
      {/* Hero Section */}
      <section
  className="relative w-full min-h-screen flex justify-center items-center bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFkZHklMjBmaWVsZHN8ZW58MHx8MHx8fDA%3D')",
  }}
>
  <div className="absolute inset-0 bg-black opacity-40"></div>
  <div className="relative z-10 text-center text-white p-8 sm:p-12">
  <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-6 bg-gradient-to-r text-green-100  bg-clip-text animate__animated animate__fadeIn group">
    <span className="relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:translate-x-2">
        Welcome to NurseryMart
      </span>
    </h1>
    <p className="text-lg md:text-2xl mb-8 font-semibold text-green-200 animate__animated animate__fadeIn animate__delay-1s">
      Your one-stop solution for gardening and agriculture supplies
    </p>
    <div className="space-x-6">
  <Link
    to={"/product"}
    className="px-8 py-4 bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold text-xl rounded-lg shadow-2xl transition-all transform hover:scale-110 hover:bg-green-700 hover:shadow-3xl hover:rotate-1 duration-300"
  >
    Explore Our Plants
  </Link>
  <Link
    to={"/about"}
    className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-semibold text-xl rounded-lg shadow-2xl transition-all transform hover:scale-110 hover:bg-yellow-700 hover:shadow-3xl hover:rotate-1 duration-300"
  >
    Learn About Us
  </Link>
</div>

  </div>
</section>


      {/* Featured Plants Section */}
      <section id="plants" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-12 text-gray-800">Featured Plants</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plant Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-xl duration-300">
              <img src="https://media.istockphoto.com/id/480313345/photo/lemon-seedlings-ready-to-be-planted.jpg?s=612x612&w=0&k=20&c=Yc7b_qZF0xZS03mWD1xQu_t8u68RQYhWVxaDepS-rsM=" alt="Plant 1" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">Apple Bor</h3>
              <p className="text-gray-600 mb-4">Apple Bor is a popular fruit plant recently generationg a more that 10LPA+ per hecter revenue for Farmers.</p>
              <Link href="/product" className="text-green-500 font-semibold hover:text-green-600 transition-colors">Learn More</Link>
            </div>

            {/* Plant Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-xl duration-300">
              <img src="https://media.istockphoto.com/id/1320131362/photo/dragon-fruit-tree-with-ripe-red-fruit-on-the-tree-for-harvest.jpg?s=612x612&w=0&k=20&c=zuUzT0PsVI5KbUgk35dxQ94IZ-qZGrMlj7S9Q0Mna8M=" alt="Plant 2" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">Dragon Fruit</h3>
              <p className="text-gray-600 mb-4">Dragon ruit name suggest that it is a king in fruit market now once visit and see more.</p>
              <Link href="/product" className="text-green-500 font-semibold hover:text-green-600 transition-colors">Learn More</Link>
              </div>

            {/* Plant Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-xl duration-300">
              <img src="https://media.istockphoto.com/id/1397694785/photo/coconut-saplings-in-the-nursery.jpg?s=612x612&w=0&k=20&c=TAHqPM-NFzBq96QiJueb9-KjMRYsPdMin5j3BUgMcIU=" alt="Plant 3" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">Coconut Tree</h3>
              <p className="text-gray-600 mb-4">Coconut Tree known as a beauty plus nature with fruits visit and explore more.</p>
              <Link href="/product" className="text-green-500 font-semibold hover:text-green-600 transition-colors">Learn More</Link>
              </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-500 py-16 text-center text-white">
        <h2 className="text-3xl font-semibold mb-4">Get Started with Your Gardening Journey</h2>
        <p className="text-xl mb-6">Join NurseryMart today to access a wide range of plants and gardening tools to help you grow your dream garden.</p>
        <Link to={"/product"} className="px-8 py-3 bg-blue-500 text-white font-semibold text-lg rounded-lg shadow-lg transition-transform transform hover:scale-110 hover:bg-blue-600 duration-300">
          Start Shopping
        </Link>
      </section>

     
    </div>
  );
}
