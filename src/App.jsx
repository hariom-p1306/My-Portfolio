import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlurBlob from "./components/Blurblob";

const App = () => {
  return (
    <div className="bg-[#050414] relative min-h-screen">

     <BlurBlob position={{ top: '35%', left: '20%' }} size={{ width: '30%', height: '40%' }} />
      
      {/* Background grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] 
                      bg-[size:14px_24px] 
                      [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]">
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Page Sections */}
      <main className="relative">
        {/* Add padding-top equal to navbar height to prevent overlap */}
        <section className="pt-16">
          <About />
        </section>

        <section className="pt-16">
          <Skills />
        </section>

        <section className="pt-16">
          <Experience />
        </section>

        <section className="pt-16">
          <Work />
        </section>

        <section className="pt-16">
          <Education />
        </section>

        <section className="pt-16">
          <Contact />
        </section>

        <section>
          <Footer />
        </section>
      </main>
    </div>
  );
};

export default App;
