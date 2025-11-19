export default function Testimonials() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
  {/* Floating game elements background */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-20 left-10 text-6xl animate-bounce">🎮</div>
    <div className="absolute top-40 right-20 text-5xl animate-pulse">⭐</div>
    <div className="absolute bottom-32 left-1/4 text-7xl" style={{ animation: 'float 6s ease-in-out infinite' }}>🏆</div>
    <div className="absolute bottom-20 right-1/3 text-5xl animate-bounce" style={{ animationDelay: '1s' }}>✨</div>
  </div>

  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    {/* Header */}
    <div className="text-center mb-16 md:mb-20">
      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg transform hover:scale-105 transition-transform">
        <span className="animate-pulse">⚡</span>
        Real Results from Real Families
      </div>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
        <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Homework Battles
        </span>
        <br />
        <span className="text-gray-900">Transformed Into Victories</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        See how students went from homework stress to learning success—with measurable improvements in completion rates, grades, and confidence.
      </p>
    </div>

    {/* Testimonials Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      {/* Testimonial 1 - Parent */}
      <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-indigo-200 transform hover:-translate-y-2">
        <div className="flex items-start gap-4 mb-6">
          <div className="relative">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-2xl shadow-lg">
              👩‍💼
            </div>
            <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full w-6 h-6 flex items-center justify-center text-white text-xs font-bold border-2 border-white">
              ✓
            </div>
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-gray-900 text-lg">Jennifer Martinez</h4>
            <p className="text-sm text-indigo-600 font-medium">Parent of 4th Grader</p>
            <div className="flex gap-1 mt-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-lg">★</span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute -left-2 -top-2 text-6xl text-indigo-200 opacity-50 leading-none">"</div>
          <p className="text-gray-700 leading-relaxed relative z-10 italic mb-4">
            My daughter Emma used to spend 2 hours crying through math homework. Now she completes it in 35 minutes—while laughing! Her quiz scores jumped from 72% to 91% in just 6 weeks.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-gray-100">
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">+19% Grade Improvement</span>
          <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">85min Saved Daily</span>
        </div>
      </div>

      {/* Testimonial 2 - Educator */}
      <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-purple-200 transform hover:-translate-y-2">
        <div className="flex items-start gap-4 mb-6">
          <div className="relative">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-2xl shadow-lg">
              👨‍🏫
            </div>
            <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center text-white text-xs font-bold border-2 border-white">
              ✓
            </div>
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-gray-900 text-lg">Michael Chen</h4>
            <p className="text-sm text-purple-600 font-medium">5th Grade Teacher, Lincoln Elementary</p>
            <div className="flex gap-1 mt-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-lg">★</span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute -left-2 -top-2 text-6xl text-purple-200 opacity-50 leading-none">"</div>
          <p className="text-gray-700 leading-relaxed relative z-10 italic mb-4">
            Homework completion in my class went from 68% to 94% after implementing Homework Gamifier. The comprehension analytics showed me exactly which concepts students were struggling with—saved me hours of grading time.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-gray-100">
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">94% Completion Rate</span>
          <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-semibold">5hrs Saved/Week</span>
        </div>
      </div>

      {/* Testimonial 3 - Student */}
      <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-pink-200 transform hover:-translate-y-2 md:col-span-2 lg:col-span-1">
        <div className="flex items-start gap-4 mb-6">
          <div className="relative">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-2xl shadow-lg">
              🎓
            </div>
            <div className="absolute -bottom-1 -right-1 bg-purple-500 rounded-full w-6 h-6 flex items-center justify-center text-white text-xs font-bold border-2 border-white">
              ✓
            </div>
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-gray-900 text-lg">Alex Thompson</h4>
            <p className="text-sm text-pink-600 font-medium">7th Grade Student</p>
            <div className="flex gap-1 mt-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-lg">★</span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute -left-2 -top-2 text-6xl text-pink-200 opacity-50 leading-none">"</div>
          <p className="text-gray-700 leading-relaxed relative z-10 italic mb-4">
            I used to hate history homework. Now I literally race my friends to finish assignments first because the story mode is so cool. My history grade went from a C+ to an A- in one semester!
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-gray-100">
          <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-semibold">C+ to A- Grade</span>
          <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-xs font-semibold">100% Completion</span>
        </div>
      </div>
    </div>

    {/* Bottom Featured Testimonial - Full Width */}
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-1 shadow-2xl">
      <div className="bg-white rounded-[22px] p-8 md:p-12">
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="flex-shrink-0">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-4xl shadow-xl">
              👨‍👩‍👧‍👦
            </div>
          </div>
          
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-2xl">★</span>
              ))}
              <span className="ml-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                School District Success Story
              </span>
            </div>
            
            <h4 className="font-bold text-gray-900 text-2xl mb-2">Sarah Williams</h4>
            <p className="text-indigo-600 font-semibold mb-4">Parent of 3 Students & PTA President, Oakwood School District</p>
            
            <div className="relative">
              <div className="absolute -left-4 -top-2 text-7xl text-indigo-100 opacity-50 leading-none">"</div>
              <p className="text-gray-700 text-lg leading-relaxed relative z-10 italic mb-6">
                With three kids in different grades (2nd, 5th, and 8th), homework time was chaos. Between tears, arguments, and confusion, we were spending 4+ hours every night just managing assignments. Homework Gamifier changed everything. My 2nd grader now finishes independently in 20 minutes, my 5th grader's math scores improved by 23 points, and my 8th grader actually asks to do homework early. We've gone from 4 hours of stress to 90 minutes of engaged learning. Our family dinners are peaceful again, and I finally have my evenings back. When I shared this with our PTA, 47 families signed up within a week.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
                <div className="text-3xl font-bold text-green-600 mb-1">2.5hrs</div>
                <div className="text-sm text-gray-600 font-medium">Time Saved Daily</div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200">
                <div className="text-3xl font-bold text-blue-600 mb-1">+23pts</div>
                <div className="text-sm text-gray-600 font-medium">Math Score Increase</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-4 border border-purple-200">
                <div className="text-3xl font-bold text-purple-600 mb-1">100%</div>
                <div className="text-sm text-gray-600 font-medium">Completion Rate</div>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-4 border border-pink-200">
                <div className="text-3xl font-bold text-pink-600 mb-1">47</div>
                <div className="text-sm text-gray-600 font-medium">Families Referred</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Trust Indicators */}
    <div className="mt-16 text-center">
      <div className="inline-flex flex-wrap justify-center items-center gap-6 md:gap-12 text-gray-600">
        <div className="flex items-center gap-2">
          <span className="text-3xl">🏫</span>
          <div className="text-left">
            <div className="font-bold text-2xl text-gray-900">127</div>
            <div className="text-sm">Schools Using</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-3xl">👨‍👩‍👧‍👦</span>
          <div className="text-left">
            <div className="font-bold text-2xl text-gray-900">15,000+</div>
            <div className="text-sm">Happy Families</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-3xl">📈</span>
          <div className="text-left">
            <div className="font-bold text-2xl text-gray-900">89%</div>
            <div className="text-sm">Avg. Completion Rate</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-3xl">⭐</span>
          <div className="text-left">
            <div className="font-bold text-2xl text-gray-900">4.9/5</div>
            <div className="text-sm">Parent Rating</div>
          </div>
        </div>
      </div>
    </div>

    {/* CTA */}
    <div className="mt-16 text-center">
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 shadow-2xl">
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Transform Homework Time?
        </h3>
        <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
          Join thousands of families who&apos;ve turned homework stress into learning success
        </p>
        <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:bg-gray-50">
          Start Free Trial Today →
        </button>
        <p className="text-indigo-100 text-sm mt-4">
          ✨ No credit card required • 5 assignments free • Cancel anytime
        </p>
      </div>
    </div>
  </div>

  <style jsx>{`
    @keyframes float {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-20px);
      }
    }
  `}</style>
</section>
  );
}