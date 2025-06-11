"use client";

import Link from "next/link";
import { UserButton } from "@civic/auth-web3/react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-gray-900">
            POI
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/show-poi"
              className="text-gray-600 ml-20 hover:text-gray-900 transition-colors"
            >
              Show POI
            </Link>
            <Link
              href="/verify-poi"
              className="text-gray-600 ml-20 hover:text-gray-900 transition-colors"
            >
              Verify POI
            </Link>
            <Link
              href="/profile"
              className="text-gray-600 ml-20 hover:text-gray-900 transition-colors"
            >
              Profile
            </Link>
            <Link
              href="/about"
              className="text-gray-600 ml-20 hover:text-gray-900 transition-colors"
            >
              About
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Link
              href="/login"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              connect your wallet here ->
            </Link>
            <UserButton />
          </div>
        </div>
      </div>
    </nav>
  );
}
