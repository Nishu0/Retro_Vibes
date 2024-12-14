import { Link } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-pink-300/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm opacity-70 mb-4 md:mb-0">
          © 1999 ETH.COM - ALL RIGHTS RESERVED
        </p>
        <div className="flex space-x-6">
          <Link href="#" className="text-sm opacity-70 hover:opacity-100">
            PRIVACY
          </Link>
          <Link href="#" className="text-sm opacity-70 hover:opacity-100">
            TERMS
          </Link>
          <Link href="#" className="text-sm opacity-70 hover:opacity-100">
            CONTACT
          </Link>
        </div>
      </div>
    </footer>
  );
}
