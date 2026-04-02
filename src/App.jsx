import React from "react";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <Navbar />
      <main className="mx-auto w-[92%] max-w-6xl pt-16">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer
        className="border-t border-slate-200 px-4 py-6 text-center text-sm text-slate-600"
        aria-label="Footer"
      >
        <p>(c) {new Date().getFullYear()} JIRASAK PRATHOMPHAT. พัฒนาด้วย React + Vite</p>
      </footer>
    </>
  );
}

export default App;
