import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-purple-500/20 backdrop-blur-sm bg-black/20">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Hallow Boards
          </h1>
          <nav className="flex gap-6">
            <button className="text-purple-200 hover:text-purple-400 transition-colors">
              Features
            </button>
            <button className="text-purple-200 hover:text-purple-400 transition-colors">
              About
            </button>
            <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all">
              Get Started
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 animate-pulse">
            Welcome to Hallow Boards
          </h2>
          <p className="text-xl text-purple-200 mb-12 leading-relaxed">
            Transform your workflow with our intuitive board system. 
            Organize, collaborate, and achieve more together.
          </p>
          
          <div className="flex gap-4 justify-center mb-20">
            <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-purple-500/50">
              Start Your Board
            </button>
            <button className="px-8 py-4 rounded-xl border-2 border-purple-500 text-purple-200 font-bold text-lg hover:bg-purple-500/10 transition-all">
              Learn More
            </button>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-purple-100 mb-3">Organized</h3>
              <p className="text-purple-300">
                Keep your projects structured and your team aligned with powerful organization tools.
              </p>
            </div>
            
            <div className="p-8 rounded-2xl bg-gradient-to-br from-pink-900/50 to-purple-900/50 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-purple-100 mb-3">Fast</h3>
              <p className="text-purple-300">
                Lightning-fast performance ensures you spend time creating, not waiting.
              </p>
            </div>
            
            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold text-purple-100 mb-3">Collaborative</h3>
              <p className="text-purple-300">
                Work together seamlessly with real-time updates and team features.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-purple-500/20 mt-20">
        <div className="container mx-auto px-6 py-8 text-center text-purple-400">
          <p>© 2025 Hallow Boards. Built with passion.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
