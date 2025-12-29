function MainPage() {
  return (
    <main className="flex-grow flex flex-col justify-evenly container mx-auto px-6 py-12">
      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 animate-pulse">
          Welcome to Hallow Boards
        </h2>
        <p className="text-xl text-purple-200 mb-12 leading-relaxed">
          Transform your workflow with our intuitive board system. Organize,
          collaborate, and achieve more together.
        </p>

        <div className="flex gap-4 justify-center">
          <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-purple-500/50">
            Start Your Board
          </button>
          <button className="px-8 py-4 rounded-xl border-2 border-purple-500 text-purple-200 font-bold text-lg hover:bg-purple-500/10 transition-all">
            Learn More
          </button>
        </div>
      </div>

      {/* Feature Card */}
      <div className="flex justify-center">
        <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-900/70 to-pink-900/70 backdrop-blur-md border border-purple-500/30 hover:border-purple-500/50 transition-all max-w-md">
          <div className="text-4xl mb-4">🎨</div>
          <h3 className="text-2xl font-bold text-purple-100 mb-3">
            Proven Designs
          </h3>
          <p className="text-purple-300">
            Choose from a curated collection of designs that have been already
            proven to work. Collaborate with confidence using battle-tested
            layouts.
          </p>
        </div>
      </div>
    </main>
  );
}

export default MainPage;
