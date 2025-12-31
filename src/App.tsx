import "./App.css";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Design from "./components/Design";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Header />
      <MainPage />
      <Design />
      <Footer />
    </div>
  );
}

export default App;
