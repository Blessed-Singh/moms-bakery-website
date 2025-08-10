import React, { useState } from 'react';
// We're using lucide-react for modern icons.
import { Home, Cake, Mail, MapPin } from 'lucide-react';
import './App.css';

// The main component of our application.
const App = () => {
  // State hook to manage which page is currently being displayed.
  const [currentPage, setCurrentPage] = useState('home');

  // This function renders the correct page component based on the currentPage state.
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
    // The main application container with a light gray background and a modern font.
    // We've added "light" to the className to force light mode and override OS settings.
    // It's a flexbox column to ensure the header, main content, and footer are stacked.
    <div className="light flex flex-col min-h-screen bg-pink-50 font-sans text-gray-800">
      <header className="bg-white shadow-lg p-4">
        <nav className="flex justify-between items-center max-w-7xl mx-auto px-4">
          {/* Main logo and title for the bakery */}
          <div className="text-3xl font-extrabold text-pink-600 tracking-wider">
            Ammy Bakers 🎂
          </div>
          
          {/* Navigation links for larger screens */}
          <div className="hidden md:flex space-x-6 items-center">
            <button 
              onClick={() => setCurrentPage('home')} 
              className={`flex items-center space-x-2 text-lg font-medium transition duration-300 transform hover:scale-110 hover:text-pink-600 
                ${currentPage === 'home' ? 'text-pink-600 font-bold' : 'text-gray-600'}`}
            >
              <Home className="w-5 h-5" />
              <span>Home</span>
            </button>
            <button 
              onClick={() => setCurrentPage('menu')} 
              className={`flex items-center space-x-2 text-lg font-medium transition duration-300 transform hover:scale-110 hover:text-pink-600 
                ${currentPage === 'menu' ? 'text-pink-600 font-bold' : 'text-gray-600'}`}
            >
              <Cake className="w-5 h-5" />
              <span>Menu</span>
            </button>
            <button 
              onClick={() => setCurrentPage('contact')} 
              className={`flex items-center space-x-2 text-lg font-medium transition duration-300 transform hover:scale-110 hover:text-pink-600 
                ${currentPage === 'contact' ? 'text-pink-600 font-bold' : 'text-gray-600'}`}
            >
              <Mail className="w-5 h-5" />
              <span>Contact</span>
            </button>
          </div>
          
          {/* Mobile menu button, not implemented but ready for expansion */}
          <div className="md:hidden">
            <button className="text-pink-600 p-2 rounded-lg hover:bg-pink-100 transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Main content area where the different pages will be rendered */}
      <main className="flex-grow p-8 max-w-7xl mx-auto w-full">
        {renderPage()}
      </main>

      {/* Footer section with the copyright notice */}
      <footer className="bg-pink-600 text-white p-4 text-center mt-8">
        <p>&copy; {new Date().getFullYear()} Ammy Bakers. All rights reserved.</p>
      </footer>
    </div>
  );
};

// Component for the Home page.
const HomePage = () => (
  <div className="text-center p-8 bg-white rounded-3xl shadow-xl transform transition-all duration-500 hover:scale-105">
    <h1 className="text-5xl font-extrabold text-pink-700 mb-4">
      Welcome to Ammy Bakers!
    </h1>
    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
      Baked with love, creativity, and the finest ingredients for every special occasion.
    </p>
    <div className="flex justify-center space-x-6">
      <div className="bg-pink-100 p-6 rounded-full transform transition duration-300 hover:scale-110 shadow-md">
        <Cake className="w-16 h-16 text-pink-500" />
      </div>
      <div className="bg-pink-100 p-6 rounded-full transform transition duration-300 hover:scale-110 shadow-md">
        <Home className="w-16 h-16 text-pink-500" />
      </div>
    </div>
  </div>
);

// Component for the Menu page.
const MenuPage = () => (
  <div className="text-center p-8 bg-white rounded-3xl shadow-xl">
    <h2 className="text-4xl font-bold text-pink-700 mb-6">Our Delicious Menu</h2>
    <p className="text-lg text-gray-600 mb-10">
      Hand-crafted cakes and desserts for every sweet tooth.
    </p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Example Cake Item 1 */}
      <div className="bg-gray-50 rounded-xl p-6 shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
        <img 
          src="https://placehold.co/400x300/F4C2C2/white?text=Chocolate+Cake" 
          alt="Chocolate Cake" 
          className="w-full h-auto rounded-lg mb-4" 
        />
        <h3 className="text-2xl font-semibold text-gray-800">Chocolate Cake</h3>
        <p className="text-xl font-bold text-pink-600 mt-2">$50</p>
      </div>

      {/* Example Cake Item 2 */}
      <div className="bg-gray-50 rounded-xl p-6 shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
        <img 
          src="https://placehold.co/400x300/F4C2C2/white?text=Vanilla+Cake" 
          alt="Vanilla Cake" 
          className="w-full h-auto rounded-lg mb-4" 
        />
        <h3 className="text-2xl font-semibold text-gray-800">Vanilla Cake</h3>
        <p className="text-xl font-bold text-pink-600 mt-2">$45</p>
      </div>
      
      {/* Example Cake Item 3 */}
      <div className="bg-gray-50 rounded-xl p-6 shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
        <img 
          src="https://placehold.co/400x300/F4C2C2/white?text=Red+Velvet+Cake" 
          alt="Red Velvet Cake" 
          className="w-full h-auto rounded-lg mb-4" 
        />
        <h3 className="text-2xl font-semibold text-gray-800">Red Velvet Cake</h3>
        <p className="text-xl font-bold text-pink-600 mt-2">$55</p>
      </div>
    </div>
  </div>
);

// Component for the Contact page.
const ContactPage = () => (
  <div className="text-center p-8 bg-white rounded-3xl shadow-xl transform transition-all duration-500 hover:scale-105">
    <h2 className="text-4xl font-bold text-pink-700 mb-6">Contact Us</h2>
    <p className="text-lg text-gray-600 mb-8">
      Get in touch for custom orders, questions, or just to say hello!
    </p>
    
    <div className="flex flex-col items-center space-y-4">
      {/* Contact information section */}
      <div className="flex items-center space-x-3 text-lg font-semibold text-gray-700">
        <MapPin className="w-6 h-6 text-pink-500" />
        <span>31 Horwood Drive, Brampton, ON</span>
      </div>
      <div className="flex items-center space-x-3 text-lg font-semibold text-gray-700">
        <Mail className="w-6 h-6 text-pink-500" />
        <a href="mailto:blessedsingh8@gmail.com" className="hover:text-pink-600 transition">blessedsingh8@gmail.com</a>
      </div>
    </div>
  </div>
);

export default App;
