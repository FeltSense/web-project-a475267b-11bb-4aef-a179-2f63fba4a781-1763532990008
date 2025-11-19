export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 overflow-hidden">
  {/* Animated background elements */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
    <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
    <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
  </div>

  {/* Floating game icons */}
  <div className="absolute top-32 right-1/4 text-6xl animate-float">🎮</div>
  <div className="absolute top-1/2 left-12 text-5xl animate-float animation-delay-1000">🧩</div>
  <div className="absolute bottom-1/4 right-16 text-5xl animate-float animation-delay-2000">⭐</div>
  <div className="absolute top-1/3 right-12 text-4xl animate-float animation-delay-3000">🚀</div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pt-28 sm:pb-32">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Left content */}
      <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-purple-100">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
          </span>
          <span className="text-sm font-medium text-purple-700">AI-Powered EdTech Platform</span>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600">
            Homework
          </span>
          <br />
          <span className="text-gray-900">Meets Adventure</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
          Transform any homework assignment into an <span className="font-semibold text-purple-600">interactive game</span> that students actually <span className="font-semibold text-pink-600">want to complete</span>
        </p>

        {/* Feature pills */}
        <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border border-purple-100">
            <span className="text-2xl">📸</span>
            <span className="text-sm font-medium text-gray-700">Snap & Play</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border border-indigo-100">
            <span className="text-2xl">🎯</span>
            <span className="text-sm font-medium text-gray-700">Real Comprehension</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border border-pink-100">
            <span className="text-2xl">🌟</span>
            <span className="text-sm font-medium text-gray-700">All Subjects</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
          <button 
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => e.preventDefault()}
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Start Free Trial
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button 
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => e.preventDefault()}
            className="px-8 py-4 bg-white text-gray-800 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl border-2 border-purple-200 hover:border-purple-400 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
            Watch Demo
          </button>
        </div>

        {/* Social proof */}
        <div className="pt-8 flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
          <div className="flex -space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-2 border-white shadow-md"></div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-indigo-400 border-2 border-white shadow-md"></div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-teal-400 border-2 border-white shadow-md"></div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 border-2 border-white shadow-md"></div>
          </div>
          <div className="text-center sm:text-left">
            <div className="flex items-center gap-1 justify-center sm:justify-start">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <p className="text-sm text-gray-600 mt-1">
              <span className="font-bold text-gray-900">10,000+</span> students learning through play
            </p>
          </div>
        </div>
      </div>

      {/* Right visual */}
      <div className="relative lg:h-[600px] animate-fade-in-up animation-delay-300">
        {/* Main device mockup */}
        <div className="relative mx-auto max-w-md lg:max-w-none">
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl p-3 transform lg:rotate-3 hover:rotate-0 transition-transform duration-500">
            {/* Phone frame */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-inner">
              {/* Status bar */}
              <div className="bg-gray-50 px-6 py-3 flex items-center justify-between border-b border-gray-200">
                <span className="text-xs font-medium text-gray-600">9:41</span>
                <div className="flex gap-1">
                  <div className="w-1 h-1 bg-purple-500 rounded-full"></div>
                  <div className="w-1 h-1 bg-purple-500 rounded-full"></div>
                  <div className="w-1 h-1 bg-purple-500 rounded-full"></div>
                </div>
              </div>
              
              {/* App content */}
              <div className="bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 p-6 min-h-[500px]">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-xs text-purple-600 font-semibold">MATH ADVENTURE</p>
                    <h3 className="text-lg font-bold text-gray-900">Algebra Quest</h3>
                  </div>
                  <div className="bg-white rounded-full px-3 py-1 shadow-md">
                    <span className="text-sm font-bold text-purple-600">Level 5</span>
                  </div>
                </div>

                {/* Game card */}
                <div className="bg-white rounded-2xl shadow-xl p-6 mb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center text-2xl">
                      🧮
                    </div>
                    <div className="flex-1">
                      <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-2" style={{width: '65%'}}></div>
                      <p className="text-xs text-gray-600">65% Complete</p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 mb-4">
                    <p className="text-sm font-medium text-gray-800 mb-3">Solve to unlock the treasure:</p>
                    <p className="text-lg font-bold text-purple-700 text-center">2x + 5 = 13</p>
                  </div>

                  {/* Answer options */}
                  <div className="grid grid-cols-2 gap-3">
                    {['x = 4', 'x = 8', 'x = 6', 'x = 9'].map((answer, idx) => (
                      <button
                        key={idx}
                        onClick={(e: React.MouseEvent<HTMLButtonElement>) => e.preventDefault()}
                        className={`py-3 rounded-xl font-semibold text-sm transition-all ${
                          idx === 0
                            ? 'bg-gradient-to-br from-green-400 to-emerald-500 text-white shadow-lg'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {answer}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-white rounded-xl p-3 text-center shadow-md">
                    <p className="text-2xl mb-1">🎯</p>
                    <p className="text-xs text-gray-600">Accuracy</p>
                    <p className="text-sm font-bold text-purple-600">92%</p>
                  </div>
                  <div className="bg-white rounded-xl p-3 text-center shadow-md">
                    <p className="text-2xl mb-1">⚡</p>
                    <p className="text-xs text-gray-600">Streak</p>
                    <p className="text-sm font-bold text-pink-600">7 days</p>
                  </div>
                  <div className="bg-white rounded-xl p-3 text-center shadow-md">
                    <p className="text-2xl mb-1">⭐</p>
                    <p className="text-xs text-gray-600">Points</p>
                    <p className="text-sm font-bold text-indigo-600">2,450</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating elements */}
          <div className="absolute -top-8 -right-8 bg-white rounded-2xl shadow-xl p-4 transform rotate-6 hover:rotate-0 transition-transform animate-float hidden lg:block">
            <p className="text-xs text-gray-600 mb-1">Assignment Uploaded</p>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✅</span>
              <span className="text-sm font-bold text-green-600">Converted!</span>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 transform -rotate-6 hover:rotate-0 transition-transform animate-float animation-delay-2000 hidden lg:block">
            <p className="text-xs text-gray-600 mb-2">Learning Progress</p>
            <div className="flex gap-2">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-xs font-bold text-purple-600">📐</span>
              </div>
              <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center">
                <span className="text-xs font-bold text-pink-600">🔬</span>
              </div>
              <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                <span className="text-xs font-bold text-indigo-600">📚</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Trust indicators */}
    <div className="mt-20 pt-12 border-t border-purple-200/50">
      <p className="text-center text-sm text-gray-600 mb-8 font-medium">TRUSTED BY LEADING EDUCATORS</p>
      <div className="flex flex-wrap items-center justify-center gap-12 opacity-60">
        <div className="text-2xl font-bold text-gray-400">🏫 250+ Schools</div>
        <div className="text-2xl font-bold text-gray-400">👨‍🏫 1,500+ Teachers</div>
        <div className="text-2xl font-bold text-gray-400">📈 98% Completion</div>
      </div>
    </div>
  </div>
</div>

<style jsx>{`
  @keyframes blob {
    0%, 100% { transform: translate(0, 0) scale(1); }
    25% { transform: translate(20px, -50px) scale(1.1); }
    50% { transform: translate(-20px, 20px) scale(0.9); }
    75% { transform: translate(20px, 50px) scale(1.05); }
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }
  
  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-blob {
    animation: blob 7s infinite;
  }
  
  .animation-delay-2000 {
    animation-delay: 2s;
  }
  
  .animation-delay-4000 {
    animation-delay: 4s;
  }
  
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
  
  .animation-delay-1000 {
    animation-delay: 1s;
  }
  
  .animation-delay-2000 {
    animation-delay: 2s;
  }
  
  .animation-delay-3000 {
    animation-delay: 3s;
  }
  
  .animate-fade-in-up {
    animation: fade-in-up 0.8s ease-out forwards;
  }
  
  .animation-delay-300 {
    animation-delay: 0.3s;
    opacity: 0;
  }
`}</style>
  );
}