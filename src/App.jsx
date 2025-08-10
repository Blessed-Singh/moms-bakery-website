import React, { useState } from 'react';
// The original import might be causing issues with Vite's dependency resolution.
// We're updating it to a more explicit path to help Vite find the component.
// This is a common workaround for issues with certain libraries in Vite.
import { Home, Coffee, Menu } from 'lucide-react';
import './App.css';

// We'll use a switch statement to handle page navigation instead of a router.
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'menu':
        return <MenuPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 font-sans text-gray-800">
      <header className="bg-white shadow-md p-4">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="text-2xl font-bold text-pink-600">Mom's Bakery</div>
          <div className="hidden md:flex space-x-6">
            <button onClick={() => setCurrentPage('home')} className="hover:text-pink-600 transition duration-300 ease-in-out">
              Home
            </button>
            <button onClick={() => setCurrentPage('menu')} className="hover:text-pink-600 transition duration-300 ease-in-out">
              Menu
            </button>
            <button onClick={() => setCurrentPage('contact')} className="hover:text-pink-600 transition duration-300 ease-in-out">
              Contact
            </button>
          </div>
          <div className="md:hidden">
            {/* You could add a mobile menu here */}
            <Menu className="text-pink-600 w-6 h-6" />
          </div>
        </nav>
      </header>

      <main className="flex-grow p-8 max-w-7xl mx-auto w-full">
        {renderPage()}
      </main>

      <footer className="bg-gray-800 text-white p-4 text-center mt-8">
        <p>&copy; {new Date().getFullYear()} Mom's Bakery. All rights reserved.</p>
      </footer>
    </div>
  );
};

const HomePage = () => (
  <div className="text-center">
    <h1 className="text-4xl font-extrabold text-pink-700 mb-4">Welcome to Mom's Bakery!</h1>
    <p className="text-lg text-gray-600 mb-8">
      Baked with love, just like mom used to make.
    </p>
    <div className="flex justify-center space-x-4">
      <Coffee className="w-12 h-12 text-pink-500" />
      <Home className="w-12 h-12 text-pink-500" />
    </div>
  </div>
);

const MenuPage = () => (
  <div className="text-center">
    <h2 className="text-3xl font-bold text-pink-700 mb-4">Our Delicious Menu</h2>
    <p className="text-lg text-gray-600">
      Check out our freshly baked goods.
    </p>
    {/* You can add a list of menu items here */}
  </div>
);

const ContactPage = () => (
  <div className="text-center">
    <h2 className="text-3xl font-bold text-pink-700 mb-4">Contact Us</h2>
    <p className="text-lg text-gray-600">
      Get in touch with us for special orders or questions.
    </p>
    {/* You can add contact information here */}
  </div>
);

export default App;
