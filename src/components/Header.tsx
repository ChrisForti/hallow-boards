import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="border-b border-purple-500/20 backdrop-blur-sm bg-black/20">
      <div className="container mx-auto px-6 py-6 flex items-center justify-between">
        <Link
          to="/"
          className="text-4xl font-bold text-black hover:text-gray-700 transition-colors"
        >
          Artisan Standups
        </Link>
        <nav className="flex gap-6">
          <button className="text-black hover:text-gray-700 transition-colors">
            Features
          </button>
          <button className="text-black hover:text-gray-700 transition-colors">
            About
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
