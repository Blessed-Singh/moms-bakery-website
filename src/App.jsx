import React, { useState } from 'react';
import { Home, Cake, Mail, MapPin, Phone, Instagram, Star, Plus, Minus, Upload, MessageCircle, Heart, Users, Layers } from 'lucide-react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCake, setSelectedCake] = useState(null);
  const [cakeBuilder, setCakeBuilder] = useState({
    size: '6-inch',
    layers: 2,
    servings: '6-8',
    flavor: '',
    description: '',
    images: []
  });

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'menu':
        return <MenuPage setSelectedCake={setSelectedCake} setCurrentPage={setCurrentPage} />;
      case 'contact':
        return <ContactPage />;
      case 'builder':
        return <CakeBuilder selectedCake={selectedCake} cakeBuilder={cakeBuilder} setCakeBuilder={setCakeBuilder} setCurrentPage={setCurrentPage} />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50 font-sans text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
          <div className="text-3xl font-extrabold text-pink-600 tracking-wider cursor-pointer" onClick={() => setCurrentPage('home')}>
            Ammy Bakers 🎂
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <button 
              onClick={() => setCurrentPage('home')} 
              className={`flex items-center space-x-2 text-lg font-medium transition duration-300 transform hover:scale-110 hover:text-pink-600 
                ${currentPage === 'home' ? 'text-pink-600 font-bold border-b-2 border-pink-600 pb-1' : 'text-gray-600'}`}
            >
              <Home className="w-5 h-5" />
              <span>Home</span>
            </button>
            <button 
              onClick={() => setCurrentPage('menu')} 
              className={`flex items-center space-x-2 text-lg font-medium transition duration-300 transform hover:scale-110 hover:text-pink-600 
                ${currentPage === 'menu' ? 'text-pink-600 font-bold border-b-2 border-pink-600 pb-1' : 'text-gray-600'}`}
            >
              <Cake className="w-5 h-5" />
              <span>Menu</span>
            </button>
            <button 
              onClick={() => setCurrentPage('contact')} 
              className={`flex items-center space-x-2 text-lg font-medium transition duration-300 transform hover:scale-110 hover:text-pink-600 
                ${currentPage === 'contact' ? 'text-pink-600 font-bold border-b-2 border-pink-600 pb-1' : 'text-gray-600'}`}
            >
              <Mail className="w-5 h-5" />
              <span>Contact</span>
            </button>
          </div>
          
          {/* WhatsApp Button */}
          <a href="https://wa.me/1234567890" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 transition duration-300 transform hover:scale-105">
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </nav>
      </header>

      <main className="min-h-screen">
        {renderPage()}
      </main>

      <footer className="bg-gradient-to-r from-pink-600 to-rose-600 text-white p-6 text-center">
        <div className="max-w-7xl mx-auto">
          <p className="text-lg font-medium">&copy; {new Date().getFullYear()} Ammy Bakers. All rights reserved.</p>
          <p className="text-pink-100 mt-2">Baked with love, served with pride 💖</p>
        </div>
      </footer>
    </div>
  );
};

const HomePage = ({ setCurrentPage }) => {
  const reviews = [
    {
      name: "Sarah M.",
      rating: 5,
      text: "The most delicious eggless cake I've ever had! Perfect for my daughter's birthday.",
      date: "2 weeks ago"
    },
    {
      name: "Rajesh P.",
      rating: 5,
      text: "Amazing quality and taste. The custom design was exactly what we wanted!",
      date: "1 month ago"
    },
    {
      name: "Maria L.",
      rating: 5,
      text: "Fresh, beautiful, and so tasty! Will definitely order again.",
      date: "3 weeks ago"
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pink-600 via-rose-500 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-6xl font-extrabold mb-6 leading-tight">
            Welcome to Ammy Bakers
          </h1>
          <p className="text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Crafting delicious, fresh, and completely eggless cakes made with love for every special occasion
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setCurrentPage('menu')}
              className="bg-white text-pink-600 px-8 py-4 rounded-full text-xl font-bold hover:bg-pink-50 transform hover:scale-105 transition duration-300 shadow-lg"
            >
              View Our Menu
            </button>
            <button 
              onClick={() => setCurrentPage('contact')}
              className="border-2 border-white text-white px-8 py-4 rounded-full text-xl font-bold hover:bg-white hover:text-pink-600 transform hover:scale-105 transition duration-300"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-xl p-12 transform hover:scale-105 transition duration-500">
          <h2 className="text-4xl font-bold text-pink-700 mb-8 text-center">Why Choose Ammy Bakers?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-pink-100 p-6 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <Heart className="w-12 h-12 text-pink-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">100% Eggless</h3>
              <p className="text-gray-600">All our cakes and desserts are completely eggless, perfect for everyone to enjoy!</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-pink-100 p-6 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <Cake className="w-12 h-12 text-pink-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Made Fresh</h3>
              <p className="text-gray-600">Everything is baked fresh to order with the finest ingredients and lots of love.</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-pink-100 p-6 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <Users className="w-12 h-12 text-pink-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Custom Designs</h3>
              <p className="text-gray-600">We create personalized cakes for every occasion - birthdays, weddings, and more!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-pink-700 mb-12 text-center">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-500">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-500">{review.date}</span>
              </div>
              <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
              <p className="font-semibold text-pink-600">- {review.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-3xl text-white p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Order Your Perfect Cake?</h2>
          <p className="text-xl mb-8">Contact us on WhatsApp for custom orders or browse our delicious menu!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/1234567890" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-xl font-bold transform hover:scale-105 transition duration-300 flex items-center justify-center space-x-2">
              <MessageCircle className="w-6 h-6" />
              <span>WhatsApp Us</span>
            </a>
            <button 
              onClick={() => setCurrentPage('menu')}
              className="bg-white text-pink-600 px-8 py-4 rounded-full text-xl font-bold hover:bg-pink-50 transform hover:scale-105 transition duration-300"
            >
              Browse Menu
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const MenuPage = ({ setSelectedCake, setCurrentPage }) => {
  const cakes = [
    {
      id: 1,
      name: "Chocolate Delight",
      basePrice: 50,
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop&crop=center",
      description: "Rich, moist chocolate cake with premium cocoa",
      popular: true
    },
    {
      id: 2,
      name: "Vanilla Dream",
      basePrice: 45,
      image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=300&fit=crop&crop=center",
      description: "Classic vanilla sponge with smooth vanilla frosting"
    },
    {
      id: 3,
      name: "Red Velvet Romance",
      basePrice: 55,
      image: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=400&h=300&fit=crop&crop=center",
      description: "Elegant red velvet with cream cheese frosting"
    },
    {
      id: 4,
      name: "Strawberry Bliss",
      basePrice: 60,
      image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop&crop=center",
      description: "Fresh strawberry cake with strawberry compote"
    },
    {
      id: 5,
      name: "Lemon Zest",
      basePrice: 48,
      image: "https://images.unsplash.com/photo-1519869325930-281384150729?w=400&h=300&fit=crop&crop=center",
      description: "Tangy lemon cake with lemon buttercream"
    },
    {
      id: 6,
      name: "Funfetti Celebration",
      basePrice: 52,
      image: "https://images.unsplash.com/photo-1558312657-b2dead2bc985?w=400&h=300&fit=crop&crop=center",
      description: "Colorful birthday cake with rainbow sprinkles"
    }
  ];

  const handleCakeSelect = (cake) => {
    setSelectedCake(cake);
    setCurrentPage('builder');
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-pink-700 mb-6">Our Delicious Menu</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          All our cakes are 100% eggless and baked fresh to order. Click on any cake to customize your perfect order!
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {cakes.map((cake) => (
          <div key={cake.id} className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-xl transition duration-300 cursor-pointer"
               onClick={() => handleCakeSelect(cake)}>
            {cake.popular && (
              <div className="bg-pink-500 text-white px-3 py-1 text-sm font-bold absolute z-10 m-4 rounded-full">
                Popular!
              </div>
            )}
            <div className="relative">
              <img src={cake.image} alt={cake.name} className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition duration-300 flex items-center justify-center">
                <button className="bg-pink-600 text-white px-6 py-2 rounded-full opacity-0 hover:opacity-100 transition duration-300 transform hover:scale-105">
                  Customize Now
                </button>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{cake.name}</h3>
              <p className="text-gray-600 mb-4">{cake.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-pink-600">Starting at ${cake.basePrice}</span>
                <button className="bg-pink-100 text-pink-600 px-4 py-2 rounded-full hover:bg-pink-200 transition duration-300">
                  Customize →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Order Section */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl text-white p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Don't See What You Want?</h2>
        <p className="text-lg mb-6">We can make almost anything! Heart shapes, long cakes, muffins, pastries, and more.</p>
        <a href="https://wa.me/1234567890" className="bg-white text-pink-600 px-8 py-3 rounded-full text-lg font-bold hover:bg-pink-50 transform hover:scale-105 transition duration-300 inline-flex items-center space-x-2">
          <MessageCircle className="w-5 h-5" />
          <span>Request Custom Order</span>
        </a>
      </div>
    </div>
  );
};

const CakeBuilder = ({ selectedCake, cakeBuilder, setCakeBuilder, setCurrentPage }) => {
  const sizes = [
    { name: '6-inch', servings: '6-8', priceMultiplier: 1 },
    { name: '8-inch', servings: '10-12', priceMultiplier: 1.5 },
    { name: '10-inch', servings: '15-20', priceMultiplier: 2 },
    { name: '12-inch', servings: '25-30', priceMultiplier: 2.5 }
  ];

  const calculatePrice = () => {
    const basePrice = selectedCake?.basePrice || 50;
    const sizeMultiplier = sizes.find(s => s.name === cakeBuilder.size)?.priceMultiplier || 1;
    const layerMultiplier = cakeBuilder.layers;
    return Math.round(basePrice * sizeMultiplier * layerMultiplier);
  };

  const handleOrderSubmit = () => {
    const orderDetails = `
🎂 CAKE ORDER - Ammy Bakers

Cake: ${selectedCake.name}
Size: ${cakeBuilder.size} (${cakeBuilder.servings} servings)
Layers: ${cakeBuilder.layers}
Special Instructions: ${cakeBuilder.description}

Estimated Price: $${calculatePrice()}

Please confirm the final price and design details. Thank you!
    `;
    
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(orderDetails)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!selectedCake) {
    setCurrentPage('menu');
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="bg-white rounded-3xl shadow-xl p-8">
        <div className="flex items-center mb-8">
          <button 
            onClick={() => setCurrentPage('menu')}
            className="text-pink-600 hover:text-pink-700 font-medium flex items-center space-x-2"
          >
            ← Back to Menu
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img src={selectedCake.image} alt={selectedCake.name} className="w-full h-64 object-cover rounded-2xl mb-4" />
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{selectedCake.name}</h1>
            <p className="text-gray-600 mb-4">{selectedCake.description}</p>
            <div className="bg-pink-50 p-4 rounded-xl">
              <h3 className="font-bold text-pink-700 mb-2">Your Customization:</h3>
              <ul className="space-y-1 text-gray-700">
                <li>Size: {cakeBuilder.size} ({cakeBuilder.servings} servings)</li>
                <li>Layers: {cakeBuilder.layers}</li>
                <li className="text-2xl font-bold text-pink-600 mt-4">Total: ${calculatePrice()}</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            {/* Size Selection */}
            <div>
              <label className="block text-lg font-semibold text-gray-800 mb-3">Choose Size:</label>
              <div className="grid grid-cols-2 gap-3">
                {sizes.map((size) => (
                  <button
                    key={size.name}
                    onClick={() => setCakeBuilder({...cakeBuilder, size: size.name, servings: size.servings})}
                    className={`p-3 rounded-xl border-2 transition duration-300 ${
                      cakeBuilder.size === size.name 
                        ? 'border-pink-500 bg-pink-50 text-pink-700' 
                        : 'border-gray-300 hover:border-pink-300'
                    }`}
                  >
                    <div className="font-semibold">{size.name}</div>
                    <div className="text-sm text-gray-600">{size.servings}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Layers */}
            <div>
              <label className="block text-lg font-semibold text-gray-800 mb-3">Number of Layers:</label>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setCakeBuilder({...cakeBuilder, layers: Math.max(1, cakeBuilder.layers - 1)})}
                  className="bg-pink-100 text-pink-600 p-2 rounded-full hover:bg-pink-200 transition duration-300"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <div className="bg-pink-50 px-6 py-2 rounded-xl">
                  <span className="text-xl font-bold text-pink-700 flex items-center space-x-2">
                    <Layers className="w-5 h-5" />
                    <span>{cakeBuilder.layers}</span>
                  </span>
                </div>
                <button
                  onClick={() => setCakeBuilder({...cakeBuilder, layers: Math.min(5, cakeBuilder.layers + 1)})}
                  className="bg-pink-100 text-pink-600 p-2 rounded-full hover:bg-pink-200 transition duration-300"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Special Instructions */}
            <div>
              <label className="block text-lg font-semibold text-gray-800 mb-3">Special Instructions:</label>
              <textarea
                value={cakeBuilder.description}
                onChange={(e) => setCakeBuilder({...cakeBuilder, description: e.target.value})}
                placeholder="Describe any special decorations, colors, or text you'd like..."
                className="w-full p-4 border-2 border-gray-300 rounded-xl focus:border-pink-500 focus:outline-none transition duration-300"
                rows={4}
              />
            </div>

            {/* Image Upload Placeholder */}
            <div>
              <label className="block text-lg font-semibold text-gray-800 mb-3">Reference Images (Optional):</label>
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center">
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500">You can share reference images via WhatsApp</p>
              </div>
            </div>

            {/* Order Button */}
            <button
              onClick={handleOrderSubmit}
              className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-4 rounded-xl text-xl font-bold hover:from-pink-600 hover:to-rose-600 transform hover:scale-105 transition duration-300 flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-6 h-6" />
              <span>Send Order via WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactPage = () => (
  <div className="max-w-4xl mx-auto px-6 py-12">
    <div className="bg-white rounded-3xl shadow-xl p-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-pink-700 mb-6">Get In Touch</h1>
        <p className="text-xl text-gray-600">
          Ready to order? Have questions? We'd love to hear from you!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="flex items-start space-x-4">
            <div className="bg-pink-100 p-3 rounded-full">
              <MapPin className="w-6 h-6 text-pink-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Address</h3>
              <p className="text-gray-600">
                31 Horwood Dr<br />
                Brampton, ON L6X 2C2<br />
                Canada
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-green-100 p-3 rounded-full">
              <Phone className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">WhatsApp</h3>
              <a href="https://wa.me/1234567890" className="text-green-600 hover:text-green-700 transition duration-300">
                +1 (234) 567-8900
              </a>
              <p className="text-gray-500 text-sm mt-1">Click to chat with us!</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-purple-100 p-3 rounded-full">
              <Instagram className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Instagram</h3>
              <p className="text-gray-600">@ammybakers (coming soon!)</p>
              <p className="text-gray-500 text-sm mt-1">Follow us for daily cake inspiration</p>
            </div>
          </div>

          <div className="bg-pink-50 p-6 rounded-xl">
            <h3 className="font-bold text-pink-700 mb-3">Business Hours</h3>
            <div className="space-y-2 text-gray-700">
              <div className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>9:00 AM - 7:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span>10:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span>12:00 PM - 5:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-6">Ready to Order?</h3>
          <p className="mb-6">
            The easiest way to place an order is through WhatsApp. We'll help you create the perfect cake for your special occasion!
          </p>
          <div className="space-y-4">
            <a href="https://wa.me/1234567890" className="block w-full bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-xl text-center font-semibold transform hover:scale-105 transition duration-300">
              <div className="flex items-center justify-center space-x-2">
                <MessageCircle className="w-5 h-5" />
                <span>Start WhatsApp Chat</span>
              </div>
            </a>
            <div className="text-center">
              <p className="text-pink-100">or</p>
            </div>
            <button 
              className="block w-full bg-white text-pink-600 py-3 px-6 rounded-xl text-center font-semibold hover:bg-pink-50 transform hover:scale-105 transition duration-300"
              onClick={() => window.location.href = 'tel:+12345678900'}
            >
              Call Us Directly
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default App;