import "./App.css";
import Header from "./components/Header";
import MainPage from "./components/mainPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col relative">
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
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

        <MainPage />

        <Footer />
      </div>
    </div>
  );
}

export default App;
