import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar";
import { Packages } from "@/components/Packages";
import { Stats } from "@/components/Stats";
import { Ticker } from "@/components/Ticker";
import { Videos } from "@/components/Videos";

export default function Home() {
  return (
    <div className="bg-paper text-plum">
      <a
        href="#packages"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-sun focus:px-4 focus:py-2"
      >
        Skip to packages
      </a>

      <Navbar />
      <Header />
      <Ticker />
      <About />
      <Stats />
      <Gallery />
      <Videos />
      <Packages />
      <Footer />
    </div>
  );
}
