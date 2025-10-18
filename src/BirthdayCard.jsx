import React, { useState } from 'react';

function BirthdayCard() {
  const [isCardOpen, setIsCardOpen] = useState(false);

  const handleCardClick = () => {
    if (!isCardOpen) {
      setIsCardOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-100 to-indigo-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Card Container with 3D perspective */}
        <div 
          className="relative w-full"
          style={{ perspective: '2000px', minHeight: '600px' }}
        >
          {/* The actual card with flip animation */}
          <div
            className={`relative w-full transition-transform duration-1000 ease-in-out`}
            style={{
              transformStyle: 'preserve-3d',
              transform: isCardOpen ? 'rotateY(180deg)' : 'rotateY(0deg)',
            }}
          >
            {/* CARD FRONT (Closed View) */}
            <div
              className={`absolute inset-0 w-full ${!isCardOpen ? 'cursor-pointer' : 'pointer-events-none'}`}
              style={{
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
              }}
              onClick={handleCardClick}
            >
              <div className="bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 rounded-3xl shadow-2xl p-12 md:p-20 min-h-[600px] flex flex-col items-center justify-center text-center border-4 border-white">
                {/* Decorative elements */}
                <div className="absolute top-8 left-8 text-6xl animate-bounce">🎮</div>
                <div className="absolute top-8 right-8 text-6xl animate-bounce delay-100">🎉</div>
                <div className="absolute bottom-8 left-8 text-6xl animate-bounce delay-200">🎂</div>
                <div className="absolute bottom-8 right-8 text-6xl animate-bounce delay-300">🎁</div>
                
                {/* Main content */}
                <div className="relative z-10">
                  <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 drop-shadow-lg leading-tight">
                    Happy 25th Birthday,
                    <br />
                    <span className="text-cyan-300">Alan!</span>
                  </h1>
                  
                  <div className="mt-12 animate-pulse">
                    <p className="text-2xl md:text-3xl font-semibold text-white bg-white/20 backdrop-blur-sm rounded-full px-8 py-4 border-2 border-white/50 shadow-lg">
                      ✨ Click me to open! ✨
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD INTERIOR (Open View) */}
            <div
              className="absolute inset-0 w-full"
              style={{
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
              }}
            >
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-blue-300">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* INSIDE-LEFT PAGE */}
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 md:p-8 border-r-2 border-blue-200">
                    {/* Birthday Cake Section */}
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold text-indigo-800 mb-4 flex items-center">
                        <span className="mr-2">🎂</span>
                        Birthday Cake
                      </h2>
                      <div className="mb-6">
                        <div className="relative group overflow-hidden rounded-xl shadow-lg bg-white">
                          <img 
                            src="/cake.jpg"
                            alt="Birthday Cake with Sports Theme"
                            className="w-full h-64 object-contain transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                            <p className="text-white text-sm font-semibold">Your Epic Sports Cake! 🏀⚾⚽🏈</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Photo Gallery Section */}
                    <div>
                      <h2 className="text-2xl font-bold text-indigo-800 mb-4 flex items-center justify-center">
                        <span className="mr-2">📸</span>
                        Our Favorite Memories
                      </h2>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {[
                          { src: '/memory1.jpg', caption: 'Lakers Squad 💜💛' },
                          { src: '/memory2.jpg', caption: 'Way Back When 🎋' },
                          { src: '/memory3.jpg', caption: 'UCI Grad! 🎓' },
                          { src: '/memory4.jpg', caption: 'Formal Vibes 🤵' },
                          { src: '/memory5.jpg', caption: 'Summer Hangout ☀️' },
                          { src: '/memory6.jpg', caption: 'Concert Nights 🎵' },
                        ].map((memory, index) => (
                          <div 
                            key={index}
                            className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                            style={{
                              animation: isCardOpen ? `fadeInUp 0.6s ease-out ${index * 0.1}s both` : 'none'
                            }}
                          >
                            <img 
                              src={memory.src}
                              alt={memory.caption}
                              className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-125 group-hover:rotate-2"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-3">
                              <span className="text-white text-sm font-bold drop-shadow-lg">{memory.caption}</span>
                            </div>
                            <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <span className="text-lg">❤️</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* INSIDE-RIGHT PAGE */}
                  <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 md:p-8">
                    {/* Personal Message Section */}
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold text-indigo-800 mb-4 flex items-center">
                        <span className="mr-2">💌</span>
                        A Little Note For You...
                      </h2>
                      <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-md border border-blue-200">
                        <p className="text-gray-700 leading-relaxed mb-4">
                          Happy 25th birthday, Alan! You are getting old asf, this wild! 
                          It feels like just yesterday we were hanging out, playing games, and getting into all kinds 
                          of weirdo shit. Time really does fly! Me and you are like lebron vs Kd and Goku vs Vegeta 
                          we will always be competing. 
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          Here's to another year of epic moments, great times, and making unforgettable memories together!
                        </p>
                        <p className="text-gray-700 leading-relaxed font-semibold text-blue-700">
                          Wishing you all the best and always. Cheers to 25! 🍻
                        </p>
                      </div>
                    </div>

                    {/* Spotify Player Section */}
                    <div>
                      <h2 className="text-2xl font-bold text-indigo-800 mb-4 flex items-center">
                        <span className="mr-2">🎵</span>
                        Your Birthday Anthem!
                      </h2>
                      <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-md border border-blue-200">
                        <iframe 
                          src="https://open.spotify.com/embed/track/09CtPGIpYB4BrO8qb1RGsF?utm_source=generator"
                          width="100%"
                          height="152"
                          frameBorder="0"
                          allowFullScreen=""
                          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                          loading="lazy"
                          className="rounded-lg"
                        ></iframe>
                      </div>
                    </div>

                    {/* Close button */}
                    <div className="mt-8 text-center">
                      <button
                        onClick={() => setIsCardOpen(false)}
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                      >
                        Close Card
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BirthdayCard;

