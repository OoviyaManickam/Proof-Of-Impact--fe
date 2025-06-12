"use client";

import Link from "next/link";
import { UserButton, useUser } from "@civic/auth-web3/react";
import { userHasWallet } from "@civic/auth-web3";
import { useEffect } from "react";

export default function Navbar() {
  const userContext = useUser();

  useEffect(() => {
    const afterLogin = async () => {
      if (userContext.user && !userHasWallet(userContext)) {
        await userContext.createWallet();
      }
    };
    afterLogin();
  }, [userContext.user]);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-white/90 backdrop-blur-md shadow-xl rounded-3xl border border-gray-200 px-4 py-2 max-w-5xl mx-auto flex items-center w-[95vw]" style={{boxShadow: '0 6px 32px 0 rgba(80,80,120,0.10)'}}>
      <div className="flex justify-between items-center w-full">
        {/* Logo */}
        <Link href="/" className="text-2xl font-black text-gray-900 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-white shadow-sm hover:shadow-md transition-all">
          POI
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/show-poi"
            className="px-5 py-2 rounded-full bg-white shadow hover:shadow-lg text-gray-700 font-medium hover:bg-indigo-50 transition-all border border-gray-100"
          >
            Show POI
          </Link>
          <Link
            href="/verify-poi"
            className="px-5 py-2 rounded-full bg-white shadow hover:shadow-lg text-gray-700 font-medium hover:bg-indigo-50 transition-all border border-gray-100"
          >
            Verify POI
          </Link>
          <Link
            href="/"
            className="px-5 py-2 rounded-full bg-white shadow hover:shadow-lg text-gray-700 font-medium hover:bg-indigo-50 transition-all border border-gray-100"
          >
            Profile
          </Link>
          <Link
            href="/"
            className="px-5 py-2 rounded-full bg-white shadow hover:shadow-lg text-gray-700 font-medium hover:bg-indigo-50 transition-all border border-gray-100"
          >
            About
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-3">
          <div className="ml-1">
            <UserButton />
          </div>
        </div>
      </div>
    </nav>
  );
}
