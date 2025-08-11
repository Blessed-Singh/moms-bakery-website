import React, { useState } from 'react';
import { Home, Cake, Mail, MapPin, Phone, Instagram, Star, Plus, Minus, Upload, MessageCircle, Heart, Users, ChevronLeft, ChevronRight } from 'lucide-react';

// Floating Particles Component (Desktop Only)
const FloatingParticles = () => {
  const [particles, setParticles] = useState([]);

  React.useEffect(() => {
    const createParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 15; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 20 + 10,
          delay: Math.random() * 5,
          duration: Math.random() * 10 + 15,
          icon: ['🎂', '🧁', '🍰', '🎈', '✨', '💕', '🌟'][Math.floor(Math.random() * 7)]
        });
      }
      setParticles(newParticles);
    };

    createParticles();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 hidden lg:block">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute animate-bounce opacity-30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            fontSize: `${particle.size}px`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`
          }}
        >
          {particle.icon}
        </div>
      ))}
    </div>
  );
};
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCake, setSelectedCake] = useState(null);
  const [cakeBuilder, setCakeBuilder] = useState({
    size: '6-inch',
    servings: '5-6',
    flavor: '',
    description: ''
  });

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'gallery':
        return <GalleryPage setSelectedCake={setSelectedCake} setCurrentPage={setCurrentPage} />;
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
            Ammy Bakers 111 🎂
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
              onClick={() => setCurrentPage('gallery')} 
              className={`flex items-center space-x-2 text-lg font-medium transition duration-300 transform hover:scale-110 hover:text-pink-600 
                ${currentPage === 'gallery' ? 'text-pink-600 font-bold border-b-2 border-pink-600 pb-1' : 'text-gray-600'}`}
            >
              <Cake className="w-5 h-5" />
              <span>Cake Gallery</span>
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
          <a href="https://wa.me/14274301131" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 transition duration-300 transform hover:scale-105">
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
          <p className="text-lg font-medium">&copy; {new Date().getFullYear()} Ammy Bakers 111. All rights reserved.</p>
          <p className="text-pink-100 mt-2">Baked with love, served with pride 💖</p>
        </div>
      </footer>
    </div>
  );
};

const HomePage = ({ setCurrentPage }) => {
  const reviews = [
    {
      name: "Puranjay Malik",
      rating: 5,
      text: "This is my goto place to get cake for every occasion and it’s absolutely delicious. I haven’t ate this type of cake in my life.",
      date: "2 months ago"
    },
    {
      name: "Komal Agarwal",
      rating: 5,
      text: "I ordered a butterscotch cake from Ammy Bakers111 and it was hands down one of the best eggless cakes we've ever had! The buttercream was perfectly balanced—not too sweet—and 		the flavor was just right. All of our guests absolutely loved it! Ammy is not only talented but also incredibly sweet and attentive. She kept me updated with pictures and 		videos throughout the process, making sure every detail was perfect, from the making to the final look of the cake. I highly recommend her cakes and will definitely be 		ordering more from her in the future!",
      date: "5 days ago"
    },
    {
      name: "Vanshika Mehta",
      rating: 5,
      text: "Best cake in affordable price you can get here . The quality, taste and services all were good thanks",
      date: "4 months ago"
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pink-600 via-rose-500 to-pink-600 text-white py-20">
<FloatingParticles />
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-6xl font-extrabold mb-6 leading-tight">
            Welcome to Ammy Bakers 111
          </h1>
          <p className="text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Crafting delicious, fresh, and completely eggless cakes made with love for every special occasion
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setCurrentPage('gallery')}
              className="bg-white text-pink-600 px-8 py-4 rounded-full text-xl font-bold hover:bg-pink-50 transform hover:scale-105 transition duration-300 shadow-lg"
            >
              View Cake Gallery
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
{/* Instagram Promotion Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 rounded-3xl text-white p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">See All Our Amazing Cakes!</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Our gallery shows just a few flavors, but we've made hundreds of beautiful custom cakes! 
            Follow our Instagram to see them all - from birthday cakes to wedding masterpieces.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <Instagram className="w-12 h-12" />
              </div>
              <p className="text-lg font-semibold">100+ Custom Cakes</p>
              <p className="text-pink-100">See our latest creations</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <Heart className="w-12 h-12" />
              </div>
              <p className="text-lg font-semibold">Happy Customers</p>
              <p className="text-pink-100">Real photos, real reviews</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <Cake className="w-12 h-12" />
              </div>
              <p className="text-lg font-semibold">Behind the Scenes</p>
              <p className="text-pink-100">Watch the magic happen</p>
            </div>
          </div>

          <a 
            href="https://instagram.com/ammybakers111" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-white text-pink-600 px-8 py-4 rounded-full text-xl font-bold hover:bg-pink-50 transform hover:scale-105 transition duration-300 shadow-lg"
          >
            <Instagram className="w-6 h-6" />
            <span>Follow @ammybakers111 on Instagram</span>
          </a>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-xl p-12 transform hover:scale-105 transition duration-500">
<FloatingParticles />
          <h2 className="text-4xl font-bold text-pink-700 mb-8 text-center">Why Choose Ammy Bakers 111?</h2>
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
              <h3 className="text-xl font-bold text-gray-800 mb-3">Made Fresh Daily</h3>
              <p className="text-gray-600">Everything is baked fresh to order with the finest ingredients and lots of love.</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-pink-100 p-6 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <Users className="w-12 h-12 text-pink-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Custom Designs</h3>
              <p className="text-gray-600">We create personalized cakes for every occasion - 3 layers, cream decorations included!</p>
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
          <p className="text-xl mb-8">Contact us on WhatsApp for custom orders or browse our delicious cake gallery!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/14274301131" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-xl font-bold transform hover:scale-105 transition duration-300 flex items-center justify-center space-x-2">
              <MessageCircle className="w-6 h-6" />
              <span>WhatsApp Us</span>
            </a>
            <button 
              onClick={() => setCurrentPage('gallery')}
              className="bg-white text-pink-600 px-8 py-4 rounded-full text-xl font-bold hover:bg-pink-50 transform hover:scale-105 transition duration-300"
            >
              Browse Gallery
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const GalleryPage = ({ setSelectedCake, setCurrentPage }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const cakes = [
    {
      id: 1,
      name: "Chocolate",
      basePrice: 45,
      cheesecakePrice: 55,
      image: "https://i.ibb.co/YT1k9fhn/chocolate-CAKE.webp",
      description: "Rich, moist chocolate cake with premium cocoa"
    },
    {
      id: 2,
      name: "Vanilla",
      basePrice: 45,
      cheesecakePrice: 55,
      image: "https://i.ibb.co/R4gfwqjn/vanilla-CAKE.webp",
      description: "Classic vanilla sponge with smooth vanilla frosting"
    },
    {
      id: 3,
      name: "Red Velvet",
      basePrice: 45,
      cheesecakePrice: 55,
      image: "https://i.ibb.co/wh6M4Vdm/image.png",
      description: "Elegant red velvet with cream cheese frosting"
    },
    {
      id: 4,
      name: "Butterscotch",
      basePrice: 45,
      cheesecakePrice: 55,
      image: "https://i.ibb.co/fZYVwgp/image.png",
      description: "Sweet butterscotch cake with caramel notes"
    },
    {
      id: 5,
      name: "Mix Fruit",
      basePrice: 45,
      cheesecakePrice: 55,
      image: "https://i.ibb.co/5XBLxy2j/image.png",
      description: "Fresh fruit cake with seasonal fruits"
    },
    {
      id: 6,
      name: "Strawberry",
      basePrice: 45,
      cheesecakePrice: 55,
      image: "https://i.ibb.co/hxB3BhqB/image.png",
      description: "Fresh strawberry cake with strawberry compote"
    },
    {
      id: 7,
      name: "Mango",
      basePrice: 45,
      cheesecakePrice: 55,
      image: "https://i.ibb.co/d01HH81M/image.png",
      description: "Tropical mango cake with mango frosting"
    },
    {
      id: 8,
      name: "Lotus Biscoff",
      basePrice: 45,
      cheesecakePrice: 55,
      image: "https://i.ibb.co/0wBXgjH/image.png",
      description: "Cookie butter cake with Lotus Biscoff crumbs"
    },
    {
      id: 9,
      name: "Black Forest",
      basePrice: 45,
      cheesecakePrice: 55,
      image: "https://i.ibb.co/LD9hxpmy/image.png",
      description: "Chocolate cake with cherries and whipped cream"
    },
    {
      id: 10,
      name: "Dry Cake",
      basePrice: 45,
      cheesecakePrice: 55,
      image: "https://i.ibb.co/MyvRbx76/image.png",
      description: "Traditional dry cake perfect for tea time"
    },
    {
      id: 11,
      name: "Rasmalai Cake",
      basePrice: 45,
      cheesecakePrice: 55,
      image: "https://i.ibb.co/B5M5dsXq/image.png",
      description: "Indian fusion cake with rasmalai flavors"
    },
    {
      id: 12,
      name: "Gulab Jamun Cake",
      basePrice: 45,
      cheesecakePrice: 55,
      image: "https://i.ibb.co/sJHPMTF9/image.png",
      description: "Sweet gulab jamun flavored cake"
    },
    {
      id: 13,
      name: "Rose Cake",
      basePrice: 45,
      cheesecakePrice: 55,
      image: "https://i.ibb.co/zVDjXZGc/image.png",
      description: "Delicate rose flavored cake with floral notes"
    },
    {
      id: 14,
      name: "Cheesecake",
      basePrice: 55,
      cheesecakePrice: 55,
      image: "https://i.ibb.co/Y7RmZ4Yv/image.png",
      description: "Creamy, rich cheesecake - our special recipe",
      special: true
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(cakes.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(cakes.length / 3)) % Math.ceil(cakes.length / 3));
  };

  const handleCakeSelect = (cake) => {
    setSelectedCake(cake);
    setCurrentPage('builder');
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-pink-700 mb-6">Cake Gallery</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          All our cakes are 100% eggless, made with 3 layers, and baked fresh to order. Click on any cake to customize your perfect order!
        </p>
      </div>

      {/* Interactive Gallery Slider */}
      <div className="relative mb-12">
        <div className="overflow-hidden rounded-2xl">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {Array.from({ length: Math.ceil(cakes.length / 3) }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="grid md:grid-cols-3 gap-6 px-4">
                  {cakes.slice(slideIndex * 3, slideIndex * 3 + 3).map((cake) => (
                    <div key={cake.id} className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-xl transition duration-300 cursor-pointer"
                         onClick={() => handleCakeSelect(cake)}>
                      {cake.special && (
                        <div className="bg-purple-500 text-white px-3 py-1 text-sm font-bold absolute z-10 m-4 rounded-full">
                          Special Recipe!
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
                            Order →
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-pink-50 transition duration-300"
        >
          <ChevronLeft className="w-6 h-6 text-pink-600" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-pink-50 transition duration-300"
        >
          <ChevronRight className="w-6 h-6 text-pink-600" />
        </button>

        {/* Slide indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: Math.ceil(cakes.length / 3) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition duration-300 ${
                currentSlide === index ? 'bg-pink-600' : 'bg-pink-200'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Custom Order Section */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl text-white p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Don't See Your Flavor?</h2>
        <p className="text-lg mb-6">We can make almost any flavor! Heart shapes, long cakes, special designs, and more.</p>
        <a href="https://wa.me/14274301131" className="bg-white text-pink-600 px-8 py-3 rounded-full text-lg font-bold hover:bg-pink-50 transform hover:scale-105 transition duration-300 inline-flex items-center space-x-2">
          <MessageCircle className="w-5 h-5" />
          <span>Request Custom Order</span>
        </a>
      </div>
    </div>
  );
};

const CakeBuilder = ({ selectedCake, cakeBuilder, setCakeBuilder, setCurrentPage }) => {
  const sizes = [
    { name: '6-inch', servings: '5-6', priceMultiplier: 1 },
    { name: '8-inch', servings: '10-12', priceMultiplier: 1.33 },
    { name: '10-inch', servings: '15-20', priceMultiplier: 1.78 },
    { name: '12-inch', servings: '25-30', priceMultiplier: 2.22 }
  ];

  const calculatePrice = () => {
    if (!selectedCake) return 0;
    
    const basePrice = selectedCake.name === 'Cheesecake' ? selectedCake.cheesecakePrice : selectedCake.basePrice;
    const sizeMultiplier = sizes.find(s => s.name === cakeBuilder.size)?.priceMultiplier || 1;
    
    if (selectedCake.name === 'Cheesecake') {
      // Special pricing for cheesecake
      if (cakeBuilder.size === '6-inch') return 55;
      if (cakeBuilder.size === '8-inch') return 75; // 55 + 20
      if (cakeBuilder.size === '10-inch') return 95; // 55 + 40
      if (cakeBuilder.size === '12-inch') return 115; // 55 + 60
    }
    
    return Math.round(basePrice * sizeMultiplier);
  };

  const handleOrderSubmit = () => {
    const orderDetails = `
🎂 CAKE ORDER - Ammy Bakers 111

Cake Flavor: ${selectedCake.name}
Size: ${cakeBuilder.size} (${cakeBuilder.servings} servings)
Layers: 3 layers (standard)
Special Instructions: ${cakeBuilder.description || 'None'}

Estimated Price: $${calculatePrice()}

Please confirm the final price and design details. Thank you!
    `;
    
    const whatsappUrl = `https://wa.me/14274301131?text=${encodeURIComponent(orderDetails)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!selectedCake) {
    setCurrentPage('gallery');
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="bg-white rounded-3xl shadow-xl p-8">
        <div className="flex items-center mb-8">
          <button 
            onClick={() => setCurrentPage('gallery')}
            className="text-pink-600 hover:text-pink-700 font-medium flex items-center space-x-2"
          >
            ← Back to Gallery
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img src={selectedCake.image} alt={selectedCake.name} className="w-full h-64 object-cover rounded-2xl mb-4" />
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{selectedCake.name} Cake</h1>
            <p className="text-gray-600 mb-4">{selectedCake.description}</p>
            <div className="bg-pink-50 p-4 rounded-xl">
              <h3 className="font-bold text-pink-700 mb-2">Your Order:</h3>
              <ul className="space-y-1 text-gray-700">
                <li>Flavor: {selectedCake.name}</li>
                <li>Size: {cakeBuilder.size} ({cakeBuilder.servings} servings)</li>
                <li>Layers: 3 layers (standard)</li>
                <li>Decorations: Cream frosting included</li>
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
                    <div className="text-sm text-gray-600">{size.servings} servings</div>
                    <div className="text-sm font-bold text-pink-600">
                      ${selectedCake.name === 'Cheesecake' 
                        ? (() => {
                            if (size.name === '6-inch') return 55;
                            if (size.name === '8-inch') return 75;
                            if (size.name === '10-inch') return 95;
                            if (size.name === '12-inch') return 115;
                          })()
                        : Math.round(selectedCake.basePrice * size.priceMultiplier)
                      }
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Special Instructions */}
            <div>
              <label className="block text-lg font-semibold text-gray-800 mb-3">Special Instructions:</label>
              <textarea
                value={cakeBuilder.description}
                onChange={(e) => setCakeBuilder({...cakeBuilder, description: e.target.value})}
                placeholder="Describe any special decorations, colors, text, fondant work, or designs you'd like..."
                className="w-full p-4 border-2 border-gray-300 rounded-xl focus:border-pink-500 focus:outline-none transition duration-300"
                rows={4}
              />
              <p className="text-sm text-gray-500 mt-2">
                💡 Base price includes 3 layers with cream decorations. Mention if you want fondant work or special designs!
              </p>
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
    <div className="bg-white rounded-3xl shadow-xl p-12 relative overflow-hidden">
        <FloatingParticles />
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
              <a 
                href="https://share.google/lUtx7y1hy1ozOGatb" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-600 transition duration-300 cursor-pointer"
              >
                31 Horwood Dr<br />
                Brampton, ON L6X 2C2<br />
                Canada
              </a>
              <p className="text-gray-500 text-sm mt-1">Click to open in Google Maps</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-green-100 p-3 rounded-full">
              <Phone className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">WhatsApp</h3>
              <a href="https://wa.me/14274301131" className="text-green-600 hover:text-green-700 transition duration-300">
                (427) 430-1131
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
              <a href="https://instagram.com/ammybakers111" className="text-purple-600 hover:text-purple-700 transition duration-300">
                @ammybakers111
              </a>
              <p className="text-gray-500 text-sm mt-1">Follow us for daily cake inspiration</p>
            </div>
          </div>

          <div className="bg-pink-50 p-6 rounded-xl">
            <h3 className="font-bold text-pink-700 mb-3">Business Hours</h3>
            <div className="space-y-2 text-gray-700">
              <div className="flex justify-between">
                <span>Every Day:</span>
                <span>7:00 AM - 7:00 PM</span>
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
            <a href="https://wa.me/14274301131" className="block w-full bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-xl text-center font-semibold transform hover:scale-105 transition duration-300">
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
              onClick={() => window.location.href = 'tel:+14274301131'}
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