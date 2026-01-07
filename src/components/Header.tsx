import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="border-b border-purple-500/20 backdrop-blur-sm bg-black/20">
      <div className="container mx-auto px-6 py-6 flex items-center justify-between">
        <Link
          to="/"
          className="text-4xl font-bold text-black hover:text-gray-700 transition-colors"
        >
          Home
        </Link>
        <div>
          <h1 className="text-4xl">Hallow Boards</h1>
        </div>
        <div className="flex gap-4 justify-center">
          <Link to="/modeler" className="flex gap-4 justify-center">
            Start Your Board
          </Link>
        </div>
        <nav className="flex gap-6">
          <button className="text-black hover:text-gray-700 transition-colors">
            Features
          </button>
          <button className="text-black hover:text-gray-700 transition-colors">
            About
          </button>
          <button className="text-black hover:text-gray-700 transition-colors">
            Learn More
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
