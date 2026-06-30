import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-[68vh] grid place-items-center pt-32 pb-20">
        <div className="shell text-center">
          <span className="display text-[6.5rem] md:text-[11rem] leading-none text-accent">404</span>
          <h1 className="display text-3xl md:text-5xl mt-2">This page took a wrong turn.</h1>
          <p className="text-ink-500 text-lg mt-4 max-w-md mx-auto leading-relaxed">
            The page you are looking for does not exist or has moved. Let us get
            you back on track.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mt-8">
            <Button href="/" size="lg" icon iconName="ArrowRight">
              Back home
            </Button>
            <Button href="/work" variant="secondary" size="lg">
              View our work
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
