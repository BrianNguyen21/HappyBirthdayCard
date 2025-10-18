import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

function BirthdayCard() {
  const [isCardOpen, setIsCardOpen] = useState(false);
  
  // Alan's birthday - October 18, 2000
  const birthdayDate = new Date('2000-10-18');
  const today = new Date();
  const currentYear = today.getFullYear();
  const nextBirthday = new Date(currentYear, 9, 18); // Month is 0-indexed (9 = October)
  
  // If birthday has passed this year, calculate for next year
  if (today > nextBirthday) {
    nextBirthday.setFullYear(currentYear + 1);
  }
  
  // Calculate days until birthday
  const daysUntilBirthday = Math.ceil((nextBirthday - today) / (1000 * 60 * 60 * 24));
  const isBirthdayToday = today.getMonth() === 9 && today.getDate() === 18;
  
  // Calculate current age
  const currentAge = today.getFullYear() - birthdayDate.getFullYear();

  const handleCardClick = () => {
    if (!isCardOpen) {
      setIsCardOpen(true);
    }
  };
  
  // Trigger confetti when card opens
  useEffect(() => {
    if (isCardOpen) {
      // Initial burst
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#3b82f6', '#6366f1', '#8b5cf6', '#06b6d4', '#fbbf24']
      });
      
      // Second burst after a delay
      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#3b82f6', '#6366f1', '#8b5cf6']
        });
      }, 200);
      
      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#06b6d4', '#fbbf24', '#3b82f6']
        });
      }, 400);
    }
  }, [isCardOpen]);

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
              className={`w-full ${!isCardOpen ? 'cursor-pointer' : 'pointer-events-none'}`}
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
                    Happy {currentAge}th Birthday,
                    <br />
                    <span className="text-cyan-300">Alan!</span>
                  </h1>
                  
                  {/* Birthday Countdown */}
                  <div className="mb-8">
                    {isBirthdayToday ? (
                      <div className="bg-yellow-400/90 backdrop-blur-sm rounded-2xl px-6 py-3 inline-block shadow-lg animate-bounce">
                        <p className="text-2xl md:text-3xl font-bold text-indigo-900">
                          🎉 It's Your Birthday! 🎉
                        </p>
                      </div>
                    ) : (
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-3 inline-block border-2 border-white/30">
                        <p className="text-lg md:text-xl font-semibold text-white">
                          {daysUntilBirthday === 1 ? (
                            <>🎂 Birthday Tomorrow! 🎂</>
                          ) : daysUntilBirthday <= 7 ? (
                            <>🎈 {daysUntilBirthday} Days Until Your Birthday! 🎈</>
                          ) : (
                            <>📅 {daysUntilBirthday} Days Until October 18th</>
                          )}
                        </p>
                      </div>
                    )}
                  </div>
                  
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
              className="w-full bg-white"
              style={{
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
                position: 'absolute',
                top: 0,
                left: 0,
              }}
            >
              <div className="bg-white rounded-3xl shadow-2xl overflow-auto border-4 border-blue-300 max-h-[85vh] relative z-10">
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
                          Happy 25th birthday, Alan! You are getting old asf holay.  
                          It feels like just yesterday we were hanging out, playing basketball, corner vs wr, playing 2k COD and smash, and getting into all kinds 
                          of weirdo shit. Time really does fly! Me and you are like lebron vs Kd and Goku vs Vegeta 
                          we will always be competing.  
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          Here's to another year of epic moments, great times, and making unforgettable memories together!
                          Thank you for being such a rock in my life love and appreciate you as always. I have always looked up
                          to you a lot and I am privileged to have you as my best friend and role model.
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

