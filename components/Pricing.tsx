export default function Pricing() {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4">
  <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
    {/* Header */}
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Retail Business</h2>
      <p className="text-gray-600 text-sm">General Plan</p>
    </div>

    {/* Price */}
    <div className="text-center mb-8">
      <div className="text-5xl font-bold text-blue-600 mb-2">$29</div>
      <p className="text-gray-600 text-lg">one-time payment</p>
    </div>

    {/* Features */}
    <div className="space-y-4 mb-8">
      <div className="flex items-start gap-3">
        <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <div>
          <p className="font-semibold text-gray-900">AI Assignment Upload</p>
          <p className="text-sm text-gray-600">Photo any homework, instantly converted to games</p>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <div>
          <p className="font-semibold text-gray-900">Multi-Subject Gamification</p>
          <p className="text-sm text-gray-600">Math puzzles, history adventures, science explorations</p>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <div>
          <p className="font-semibold text-gray-900">Real-Time Comprehension</p>
          <p className="text-sm text-gray-600">Game mechanics verify understanding, not just completion</p>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <div>
          <p className="font-semibold text-gray-900">Adaptive Learning</p>
          <p className="text-sm text-gray-600">Adjusts difficulty based on student performance</p>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <div>
          <p className="font-semibold text-gray-900">Time Management</p>
          <p className="text-sm text-gray-600">AI estimates duration, tracks progress, suggests breaks</p>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <div>
          <p className="font-semibold text-gray-900">Parent Dashboard</p>
          <p className="text-sm text-gray-600">See progress, time spent, comprehension analytics</p>
        </div>
      </div>
    </div>

    {/* Button */}
    <button onClick={() => window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00?client_reference_id=a475267b-11bb-4aef-a179-2f63fba4a781'} className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors">
      Get Your Website - $29
    </button>
  </div>
</section>
  );
}