"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,192,203,0.15)_0%,transparent_100%)]"
        style={{
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          transform: `translateY(${scrollPosition * 0.5}px)`,
        }}
      />
      <div className="max-w-7xl mx-auto text-center relative">
        <div className="space-y-6">
          <h2 className="text-sm sm:text-base tracking-[0.3em] opacity-70">
            + WEB3 FOR THE MASSES
          </h2>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none">
            WE&apos;RE BUILDING
            <br />
            THE FUTURE OF
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-300">
              ETHEREUM
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base opacity-70 leading-relaxed tracking-wide">
            WE&apos;RE A WEB3 NATIVE TEAM. OUR WORK GUIDES AND EMPOWERS THOSE
            PIONEERING DECENTRALIZED TECHNOLOGY.
          </p>
        </div>
      </div>
    </section>
  );
}
