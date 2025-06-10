"use client";

import { BoxReveal } from "@/components/magicui/box-reveal";
import Navbar from "@/components/navbar";
import { useState } from "react";

export default function ShowPOIPage() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="flex flex-col md:flex-row min-h-[calc(100vh-4rem)] pt-16">
        {/* Left Side - Box Reveal */}
        <div className="w-full md:w-[40%] p-8 md:p-12 flex items-start justify-center md:sticky md:top-16 h-fit">
          <BoxReveal boxColor="#000000" width="100%" duration={0.7}>
            <div className="space-y-6 pt-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Prove Your Impact. Build Public Trust.
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Put your CSR claims under the spotlight. Upload real-world proof and let the people validate your impact — not just paperwork.
              </p>
              <div className="flex items-center text-black font-medium">
                Fill Here <span className="ml-2">→</span>
              </div>
            </div>
          </BoxReveal>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-[60%] p-8 md:p-12 bg-gray-50">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-8">
                From Action to Proof — Make It Count
              </h2>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                    Project Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black"
                  />
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                    Project Description
                  </label>
                  <textarea
                    id="description"
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-1">
                      Start Date
                    </label>
                    <input
                      type="date"
                      id="startDate"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black"
                    />
                  </div>
                  <div>
                    <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-1">
                      End Date
                    </label>
                    <input
                      type="date"
                      id="endDate"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black"
                  />
                </div>

                <div>
                  <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
                    Amount Spent
                  </label>
                  <input
                    type="number"
                    id="amount"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black"
                  />
                </div>

                <div>
                  <label htmlFor="invoices" className="block text-sm font-medium text-gray-700 mb-1">
                    Invoices / Financial Proof
                  </label>
                  <input
                    type="file"
                    id="invoices"
                    multiple
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black"
                  />
                </div>

                <div>
                  <label htmlFor="photos" className="block text-sm font-medium text-gray-700 mb-1">
                    Photos / Media Proof
                  </label>
                  <input
                    type="file"
                    id="photos"
                    multiple
                    accept="image/*,video/*"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black"
                  />
                </div>

                <div>
                  <label htmlFor="docs" className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Docs
                  </label>
                  <input
                    type="file"
                    id="docs"
                    multiple
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 transition-colors font-medium"
                >
                  Submit Proof
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
