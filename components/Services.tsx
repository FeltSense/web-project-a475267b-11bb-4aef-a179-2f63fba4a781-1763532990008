import Image from 'next/image';

export default function Services() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
  {/* Animated background elements */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-300/20 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
    <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl animate-pulse delay-500"></div>
  </div>

  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    {/* Section header */}
    <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-24">
      <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full border-2 border-indigo-200 mb-6">
        <span className="w-2 h-2 bg-indigo-500 rounded-full animate-ping"></span>
        <span className="text-sm font-semibold text-indigo-700 uppercase tracking-wide">Powered by AI</span>
      </div>
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
        Homework That Feels Like 
        <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"> Play Time</span>
      </h2>
      <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
        Transform boring assignments into interactive adventures. Our AI turns every homework into a personalized learning game.
      </p>
    </div>

    {/* Services grid - asymmetric layout */}
    <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 max-w-7xl mx-auto">
      
      {/* Service 1 - Large featured */}
      <div className="lg:col-span-7 group relative">
        <div className="relative h-full bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-indigo-500/50">
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-500"></div>
          
          {/* Image section */}
          <div className="relative h-64 sm:h-80 overflow-hidden">
            <Image 
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop" 
              width={800} 
              height={600} 
              alt="Student taking photo of homework with phone"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-600 to-transparent"></div>
            
            {/* Floating badge */}
            <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <span className="text-sm font-bold text-indigo-600">⚡ Instant Upload</span>
            </div>
          </div>

          {/* Content section */}
          <div className="relative p-8 sm:p-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl group-hover:rotate-12 transition-transform duration-500">
                📸
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">AI Assignment Upload</h3>
            </div>
            <p className="text-indigo-100 text-lg leading-relaxed mb-6">
              Snap a photo of any homework—math worksheet, history reading, or science lab. Our AI instantly analyzes it, identifies the learning objectives, and transforms it into an engaging game experience.
            </p>
            
            {/* Feature pills */}
            <div className="flex flex-wrap gap-2">
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white font-medium">
                Photo or PDF
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white font-medium">
                OCR Recognition
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white font-medium">
                30 Second Setup
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Service 2 - Vertical card */}
      <div className="lg:col-span-5 group">
        <div className="relative h-full bg-white rounded-3xl overflow-hidden shadow-xl border-2 border-purple-100 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:border-purple-300">
          <div className="relative h-48 sm:h-56 overflow-hidden bg-gradient-to-br from-pink-400 to-orange-400">
            <Image 
              src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=600&fit=crop" 
              width={800} 
              height={600} 
              alt="Colorful educational game interface with puzzles"
              className="w-full h-full object-cover mix-blend-overlay opacity-80 group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl group-hover:scale-125 transition-transform duration-500">🎮</div>
            </div>
          </div>

          <div className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Multi-Subject Gamification</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Math becomes puzzle-solving quests. History turns into story adventures. Science transforms into exploration missions. Every subject, every grade—gamified.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <span className="text-xl">🧮</span>
                <span className="text-gray-700 font-medium">Math Puzzle Adventures</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="text-xl">📚</span>
                <span className="text-gray-700 font-medium">History Story Quests</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="text-xl">🔬</span>
                <span className="text-gray-700 font-medium">Science Explorations</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="text-xl">✍️</span>
                <span className="text-gray-700 font-medium">Language Word Games</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service 3 - Wide card with split design */}
      <div className="lg:col-span-5 group">
        <div className="relative h-full bg-gradient-to-br from-emerald-400 to-teal-500 rounded-3xl overflow-hidden shadow-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-emerald-500/50">
          <div className="p-8 sm:p-10 relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl group-hover:rotate-12 transition-transform duration-500">
                ✅
              </div>
              <h3 className="text-2xl font-bold text-white">Real-Time Comprehension</h3>
            </div>
            <p className="text-emerald-50 leading-relaxed mb-6">
              No more fake completions. Game mechanics verify actual understanding—students can&apos;t progress until they truly grasp concepts.
            </p>

            {/* Progress visualization */}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between text-white text-sm font-medium">
                <span>Understanding Level</span>
                <span>92%</span>
              </div>
              <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-yellow-300 to-white rounded-full w-[92%] group-hover:w-[100%] transition-all duration-1000"></div>
              </div>
              <div className="grid grid-cols-3 gap-2 text-xs text-emerald-50">
                <div className="bg-white/10 rounded-lg p-2 text-center">
                  <div className="font-bold">8/10</div>
                  <div className="opacity-80">Correct</div>
                </div>
                <div className="bg-white/10 rounded-lg p-2 text-center">
                  <div className="font-bold">15m</div>
                  <div className="opacity-80">Time</div>
                </div>
                <div className="bg-white/10 rounded-lg p-2 text-center">
                  <div className="font-bold">⭐⭐⭐</div>
                  <div className="opacity-80">Mastery</div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative image overlay */}
          <div className="absolute bottom-0 right-0 w-32 h-32 opacity-20 group-hover:opacity-30 transition-opacity">
            <Image 
              src="https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=400&h=400&fit=crop" 
              width={400} 
              height={400} 
              alt="Student celebrating success"
              className="w-full h-full object-cover rounded-tl-3xl"
            />
          </div>
        </div>
      </div>

      {/* Service 4 - Large featured with split layout */}
      <div className="lg:col-span-7 group">
        <div className="relative h-full bg-white rounded-3xl overflow-hidden shadow-xl border-2 border-blue-100 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:border-blue-300">
          <div className="grid md:grid-cols-2 h-full">
            {/* Content side */}
            <div className="p-8 sm:p-10 flex flex-col justify-center order-2 md:order-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-2xl group-hover:rotate-12 transition-transform duration-500">
                  🎯
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Adaptive Learning</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Smart AI adjusts difficulty in real-time based on student performance. Struggling? Get easier challenges. Breezing through? Level up automatically.
              </p>

              {/* Adaptive features */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl transition-all hover:bg-blue-100">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 text-white font-bold">
                    1
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Performance Tracking</div>
                    <div className="text-sm text-gray-600">Monitors speed, accuracy, and comprehension</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-indigo-50 rounded-xl transition-all hover:bg-indigo-100">
                  <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0 text-white font-bold">
                    2
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Dynamic Difficulty</div>
                    <div className="text-sm text-gray-600">Adjusts challenge level every 3-5 questions</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-xl transition-all hover:bg-purple-100">
                  <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0 text-white font-bold">
                    3
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Personalized Path</div>
                    <div className="text-sm text-gray-600">Creates custom learning journey for each student</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image side */}
            <div className="relative h-64 md:h-full order-1 md:order-2 overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=800&fit=crop" 
                width={800} 
                height={800} 
                alt="Student learning with adaptive technology"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
              
              {/* Floating stats */}
              <div className="absolute top-6 left-6 right-6 flex flex-col gap-3">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg transform translate-x-0 group-hover:-translate-x-2 transition-transform">
                  <div className="text-xs text-gray-500 mb-1">Current Level</div>
                  <div className="text-2xl font-bold text-indigo-600">Level 7</div>
                </div>
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg transform translate-x-0 group-hover:-translate-x-2 transition-transform delay-75">
                  <div className="text-xs text-gray-500 mb-1">Mastery Score</div>
                  <div className="text-2xl font-bold text-emerald-600">85%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    {/* Bottom CTA banner */}
    <div className="mt-16 lg:mt-24 max-w-5xl mx-auto">
      <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl overflow-hidden shadow-2xl p-8 sm:p-12">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 text-center">
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Make Homework Fun?
          </h3>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students who&apos;ve transformed their homework from a chore into an adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-white text-indigo-600 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Start Free Trial
            </button>
            <button className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-xl font-bold text-lg border-2 border-white/50 hover:bg-white/30 transition-all duration-300">
              Watch Demo
            </button>
          </div>
          <p className="text-sm text-indigo-200 mt-6">
            ✨ No credit card required • Free for first 5 assignments
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}