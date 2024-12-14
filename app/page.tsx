import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-pink-300 font-mono">
      <Navbar />
      <Header />
      <Footer />
    </div>
  );
}
