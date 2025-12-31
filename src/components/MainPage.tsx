function MainPage() {
  return (
    <div className="relative flex-1 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/surf-bg.jpg"
          alt="Surf background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-purple-900/70 to-slate-900/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        <main className="flex-grow flex flex-col justify-center container mx-auto px-6 py-8">
          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 animate-pulse">
              Welcome to Hallow Boards
            </h2>

            <div className="flex gap-4 justify-center">
              <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-purple-500/50">
                Start Your Board
              </button>
              <button className="px-8 py-3 rounded-xl border-2 border-purple-500 text-purple-200 font-bold text-lg hover:bg-purple-500/10 transition-all">
                Learn More
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default MainPage;
