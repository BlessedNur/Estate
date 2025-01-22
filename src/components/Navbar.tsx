import { ChevronDown, ShoppingCart, Menu } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="flex justify-between items-center p-4 m-auto max-w-[1300px]">
        {/* Logo */}
        <div className="text-xl font-bold">LOGO</div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={24} />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <Link
            className="text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-sm font-semibold text-gray-700 hover:text-orange-600 transition-colors"
            href="/shop"
          >
            Shop
          </Link>
          <Link
            className="text-sm font-semibold text-gray-700 hover:text-orange-600 transition-colors"
            href="/contact"
          >
            Contact us
          </Link>
          <div className="group relative">
            <button className="flex items-center gap-1 text-sm font-semibold text-gray-700 hover:text-orange-600 transition-colors">
              Important Info
              <ChevronDown
                size={14}
                className="transition-transform duration-200 group-hover:rotate-180"
              />
            </button>
            {/* Dropdown Menu */}
            <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="py-2">
                <Link
                  href="/faq"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                >
                  FAQ
                </Link>
                <Link
                  href="/warranty"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                >
                  Warranty
                </Link>
                <Link
                  href="/returns"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                >
                  Returns Policy
                </Link>
              </div>
            </div>
          </div>
          <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
            <ShoppingCart size={20} className="text-gray-700" />
            {/* <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span> */}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`
          lg:hidden fixed inset-0 bg-white z-50 transition-transform duration-300
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
        >
          <div className="p-4">
            <button className="mb-4" onClick={() => setIsMenuOpen(false)}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="flex flex-col gap-4">
              <Link
                className="text-lg font-semibold text-orange-600"
                href="/"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                className="text-lg font-semibold text-gray-700"
                href="/shop"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link
                className="text-lg font-semibold text-gray-700"
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact us
              </Link>
              <div className="border-t pt-4">
                <p className="text-lg font-semibold text-gray-700 mb-2">
                  Important Info
                </p>
                <div className="flex flex-col gap-2 pl-4">
                  <Link
                    href="/faq"
                    className="text-gray-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    FAQ
                  </Link>
                  <Link
                    href="/shipping"
                    className="text-gray-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Shipping Info
                  </Link>
                  <Link
                    href="/returns"
                    className="text-gray-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Returns Policy
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-between border-t pt-4">
                <span className="text-lg font-semibold text-gray-700">
                  Cart
                </span>
                <div className="relative">
                  <ShoppingCart size={24} className="text-gray-700" />
                  <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    0
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
