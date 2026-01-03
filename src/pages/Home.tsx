import Header from "../components/Header";
import MainPage from "../components/MainPage";
import Design from "../components/Design";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Header />
      <MainPage />
      <Design />
      <Footer />
    </div>
  );
}
