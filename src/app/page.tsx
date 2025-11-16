"use client";

import Nav from "./component/nav";
import Hero from "./component/hero";
import Skills from "./component/skills";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Skills />

      {/* Fade In Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto mt-20 mb-20 px-6"
      >
        <h2 className="text-3xl font-bold text-white mb-4">
          Additional <span className="text-blue-500">Information</span>
        </h2>

        <p className="text-gray-300 leading-relaxed text-lg">
          I work as a web developer, but I also have skills in AI, Machine
          Learning, and other emerging technologies. I love building modern
          digital experiences and exploring innovative tech solutions.
        </p>
        <br />
         <h2 className="text-3xl font-bold text-white mb-4">
          Additional <span className="text-blue-500">Skills</span>
        </h2>

        <p className="text-gray-300 leading-relaxed text-lg">
          I Have sills , related to webdev , like html , css , js , react , nextjs , and new technologies in webdev like , webassembly , svelte and more .
          <br /> i have also skilled in AI/ML , like python , r , and frameworks like tensorflow , scikit-learn , and more .
          <br /> i also have knowledge about blockcjain technology , and fintech . 
          <br /> i am always eager to learn new technologies and improve my skills .
        </p>
      </motion.section>
    </>
  );
}
