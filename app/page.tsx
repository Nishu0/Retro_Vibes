import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-pink-300 font-mono">
      <Navbar />
    </div>
  );
}
