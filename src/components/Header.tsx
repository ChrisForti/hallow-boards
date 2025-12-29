function Header() {
  return (
    <header className="border-b border-purple-500/20 backdrop-blur-sm bg-black/20">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-black">
          Artisan Standups
        </h1>
        <nav className="flex gap-6">
          <button className="text-black hover:text-gray-700 transition-colors">
            Features
          </button>
          <button className="text-black hover:text-gray-700 transition-colors">
            About
          </button>
          <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all">
            Get Started
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
