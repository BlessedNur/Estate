"use client"
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { ChevronDown, Menu, ShoppingCart } from "lucide-react";
import Link from "next/link";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  const getLinkClassName = (path: string) => {
    return `text-sm font-semibold ${
      isActive(path) ? "text-orange-600" : "text-gray-700 hover:text-orange-600"
    } transition-colors`;
  };

  const getMobileLinkClassName = (path: string) => {
    return `text-lg font-semibold ${
      isActive(path) ? "text-orange-600" : "text-gray-700"
    }`;
  };

  return (
    <div className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="flex justify-between items-center p-4 m-auto max-w-[1300px]">
        {/* Logo */}
        <Link href="/" className="grid  place-content-center w-40 h-12 mt-2 ">
          <Image
            src="/images/Screenshot__3_-removebg-preview.png"
            alt="Company Logo"
            width={4000}
            height={4000}
            className="object-contain"
            priority
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={24} />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <Link className={getLinkClassName("/")} href="/">
            Home
          </Link>
          <Link className={getLinkClassName("/shop")} href="/shop">
            Shop
          </Link>
          <Link className={getLinkClassName("/contact")} href="/contact">
            Contact us
          </Link>
          <div className="group relative">
            <button
              className={`flex items-center gap-1 ${getLinkClassName(
                "/important-info"
              )}`}
            >
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
                  className={`block px-4 py-2 text-sm ${
                    isActive("/faq")
                      ? "text-orange-600 bg-orange-50"
                      : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                  }`}
                >
                  FAQ
                </Link>
                <Link
                  href="/warranty"
                  className={`block px-4 py-2 text-sm ${
                    isActive("/warranty")
                      ? "text-orange-600 bg-orange-50"
                      : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                  }`}
                >
                  Warranty
                </Link>
                <Link
                  href="/returns"
                  className={`block px-4 py-2 text-sm ${
                    isActive("/returns")
                      ? "text-orange-600 bg-orange-50"
                      : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                  }`}
                >
                  Returns Policy
                </Link>
              </div>
            </div>
          </div>
         
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
                className={getMobileLinkClassName("/")}
                href="/"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                className={getMobileLinkClassName("/shop")}
                href="/shop"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link
                className={getMobileLinkClassName("/contact")}
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
                    className={`${
                      isActive("/faq") ? "text-orange-600" : "text-gray-600"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    FAQ
                  </Link>
                  <Link
                    href="/warranty"
                    className={`${
                      isActive("/warranty")
                        ? "text-orange-600"
                        : "text-gray-600"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Warranty
                  </Link>
                  <Link
                    href="/returns"
                    className={`${
                      isActive("/returns") ? "text-orange-600" : "text-gray-600"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Returns Policy
                  </Link>
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