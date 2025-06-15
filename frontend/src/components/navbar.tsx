"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [connecting, setConnecting] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Helper to shorten address
  const shortAddress = (addr: string) => addr.slice(0, 6) + "..." + addr.slice(-4);

  // Sei EVM testnet params (updated)
  const seiChainParams = {
    chainId: "0x530", // 1328 in hex
    chainName: "Sei Testnet",
    nativeCurrency: {
      name: "Sei",
      symbol: "SEI",
      decimals: 18,
    },
    rpcUrls: ["https://evm-rpc-testnet.sei-apis.com"],
    blockExplorerUrls: ["https://seitrace.com"],
  };

  const connectWallet = async () => {
    setConnecting(true);
    try {
      const ethWin = window as Window & { ethereum?: { request: (args: { method: string; params?: unknown[] }) => Promise<unknown> } };
      if (!ethWin.ethereum) {
        alert("MetaMask is not installed");
        setConnecting(false);
        return;
      }
      // Request accounts
      const accounts = await ethWin.ethereum.request({ method: "eth_requestAccounts" }) as string[];
      setWalletAddress(accounts[0]);
      // Try to switch to Sei
      try {
        await ethWin.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: seiChainParams.chainId }],
        });
      } catch (switchError: unknown) {
        // If not added, add the chain
        if ((switchError as { code?: number }).code === 4902) {
          try {
            await ethWin.ethereum.request({
              method: "wallet_addEthereumChain",
              params: [seiChainParams],
            });
          } catch {
            alert("Failed to add Sei network");
          }
        } else {
          alert("Failed to switch network");
        }
      }
    } catch {
      alert("Failed to connect wallet");
    }
    setConnecting(false);
  };

  const disconnectWallet = () => {
    setWalletAddress(null);
    setDropdownOpen(false);
  };

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

        {/* Wallet Connect Button & Dropdown */}
        <div className="flex items-center space-x-3">
          <div className="ml-1 relative" ref={dropdownRef}>
            {walletAddress ? (
              <>
                <button
                  className="px-4 py-2 rounded-full bg-indigo-50 text-gray-900 font-mono text-sm border border-gray-200 hover:bg-indigo-100 transition-all"
                  onClick={() => setDropdownOpen((open) => !open)}
                >
                  {shortAddress(walletAddress)}
                  <svg className="inline ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    <button
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                      onClick={disconnectWallet}
                    >
                      Disconnect
                    </button>
                  </div>
                )}
              </>
            ) : (
              <Button onClick={connectWallet} disabled={connecting}>
                {connecting ? "Connecting..." : "Connect Wallet"}
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
