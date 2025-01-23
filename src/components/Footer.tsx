import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-[#1B1B1B] text-white pt-16 pb-8">
      <div className="max-w-[1300px] mx-auto px-4 lg:px-0">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-6">LOGO</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              We specialize in providing high-quality tiny homes and container
              homes that combine style, functionality, and sustainability.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Useful Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/return-policy"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Return Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/refund-policy"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Shipping
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping-policy"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-conditions"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Additional Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Important Info</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/warranty"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Warranty
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  F.A.Q
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Find Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={20} className="min-w-[20px] mt-1" />
                <span>Beaumont, Texas</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone size={20} />

                <Link
                  href="https://wa.me/14099347143"
                  target="_blank"
                  className="hover:text-orange-500 transition-colors"
                >
                  +1 (409) 934-7143
                </Link>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail size={20} />
                <Link
                  href="mailto:info@containerx-press.com"
                  className="hover:text-orange-500 transition-colors"
                >
                  info@containerx-press.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 pb-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Container-Xpress. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
