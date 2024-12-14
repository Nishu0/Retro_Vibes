"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="fixed w-full z-50 mix-blend-difference">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex gap-2">
            <Link
              aria-label="Home"
              className="inline-flex items-center space-x-2 no-underline text-primary"
              href="/"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 115 182"
                  className="h-[35px] w-[22px] opacity-85 hover:opacity-100"
                >
                  <path
                    fill="#F0CDC2"
                    stroke="#1616B4"
                    strokeLinejoin="round"
                    d="M57.505 181v-45.16L1.641 103.171z"
                  ></path>
                  <path
                    fill="#C9B3F5"
                    stroke="#1616B4"
                    strokeLinejoin="round"
                    d="M57.69 181v-45.16l55.865-32.669z"
                  ></path>
                  <path
                    fill="#88AAF1"
                    stroke="#1616B4"
                    strokeLinejoin="round"
                    d="M57.506 124.615V66.979L1 92.28z"
                  ></path>
                  <path
                    fill="#C9B3F5"
                    stroke="#1616B4"
                    strokeLinejoin="round"
                    d="M57.69 124.615V66.979l56.506 25.302z"
                  ></path>
                  <path
                    fill="#F0CDC2"
                    stroke="#1616B4"
                    strokeLinejoin="round"
                    d="M1 92.281 57.505 1v65.979z"
                  ></path>
                  <path
                    fill="#B8FAF6"
                    stroke="#1616B4"
                    strokeLinejoin="round"
                    d="M114.196 92.281 57.691 1v65.979z"
                  ></path>
                </svg>
              </div>
              <div className="text-2xl font-bold tracking-wider">ETH</div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="#" className="hover:text-white transition-colors">
                LEARN
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                BUILD
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                RESEARCH
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                ABOUT
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 fixed inset-0 top-16">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="#"
              className="block px-3 py-2 text-base font-medium hover:text-white transition-colors"
            >
              SERVICES
            </Link>
            <Link
              href="#"
              className="block px-3 py-2 text-base font-medium hover:text-white transition-colors"
            >
              ABOUT
            </Link>
            <Link
              href="#"
              className="block px-3 py-2 text-base font-medium hover:text-white transition-colors"
            >
              CASES
            </Link>
            <Link
              href="#"
              className="block px-3 py-2 text-base font-medium hover:text-white transition-colors"
            >
              TEAM
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
