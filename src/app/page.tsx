import { FlipText } from "@/components/magicui/flip-text";
import Navbar from "@/components/navbar";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-38 pb-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <FlipText className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 font-display tracking-tighter">
              Proof Of Impact
            </FlipText>
            <div className="space-y-2">
              <p className="text-xl sm:text-2xl text-gray-600">
                Turning Corporate Promises into Public Proof
              </p>
              <p className="text-xl sm:text-2xl text-gray-600">
                Trustless Tech for Trustworthy Impact
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-4 pt-4">
            <Link
              href="/show-poi"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 transition-colors"
            >
              Show proofs
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-gray-600 hover:text-gray-900"
            >
              Learn More →
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <p className="text-base text-gray-600 mb-12">
            Trusted by 50,000+ companies
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center opacity-70">
            <div className="w-32 h-12 relative">
              <Image
                src="/logos/microsoft.svg"
                alt="Microsoft"
                fill
                className="object-contain"
              />
            </div>
            <div className="w-32 h-12 relative">
              <Image
                src="/logos/google.svg"
                alt="Google"
                fill
                className="object-contain"
              />
            </div>
            <div className="w-32 h-12 relative">
              <Image
                src="/logos/amazon.svg"
                alt="Amazon"
                fill
                className="object-contain"
              />
            </div>
            <div className="w-32 h-12 relative">
              <Image
                src="/logos/meta.svg"
                alt="Meta"
                fill
                className="object-contain"
              />
            </div>
            <div className="w-32 h-12 relative">
              <Image
                src="/logos/apple.svg"
                alt="Apple"
                fill
                className="object-contain"
              />
            </div>
            <div className="w-32 h-12 relative">
              <Image
                src="/logos/netflix.svg"
                alt="Netflix"
                fill
                className="object-contain"
              />
            </div>
            <div className="w-32 h-12 relative">
              <Image
                src="/logos/tesla.svg"
                alt="Tesla"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
