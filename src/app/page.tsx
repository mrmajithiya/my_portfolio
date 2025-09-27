// import Image from "next/image";
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <section id="projects" className="scroll-mt-24">  {/* scroll-mt-24 adds top offset if sticky navbar */}
        <Projects />
      </section>
      {/* <Projects /> */}
    </>
  );
}
