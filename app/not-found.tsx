import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-[70vh] flex items-center justify-center px-4 pt-32 pb-20 relative overflow-hidden">
        <div className="orb w-[34rem] h-[34rem] bg-purple/20 -top-32 left-1/4" />
        <div className="text-center relative z-10">
          <span className="display text-[9rem] md:text-[14rem] leading-none text-purple">404</span>
          <h1 className="display text-3xl md:text-5xl mt-2">This page took a wrong turn.</h1>
          <p className="text-muted text-lg mt-4 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you back on track.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mt-8">
            <Link href="/" className="bg-purple text-white px-7 py-3.5 rounded-full font-semibold hover:bg-purple-dark transition-all duration-300 ease-premium">
              Back to Home
            </Link>
            <Link href="/work" className="border border-black/15 px-7 py-3.5 rounded-full font-semibold hover:bg-ink hover:text-white transition-all duration-300 ease-premium">
              View My Work
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
