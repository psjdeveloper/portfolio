"use client";

import Nav from "../component/nav";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <>
      <Nav />

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto mt-24 mb-20 px-6"
      >
        <h2 className="text-3xl font-bold text-white mb-6">
          My <span className="text-blue-500">Skills</span>
        </h2>

        <ul className="space-y-3 text-gray-300 leading-relaxed text-lg">
          <li className="flex gap-2">
            <span className="text-blue-500 text-xl">•</span>
            Proficient in HTML, CSS, JavaScript, and frameworks like React & Next.js.
          </li>

          <li className="flex gap-2">
            <span className="text-blue-500 text-xl">•</span>
            Experience with backend technologies such as Node.js & Express.
          </li>

          <li className="flex gap-2">
            <span className="text-blue-500 text-xl">•</span>
            Knowledge of databases including MongoDB and SQL.
          </li>

          <li className="flex gap-2">
            <span className="text-blue-500 text-xl">•</span>
            Familiarity with version control systems like Git.
          </li>

          <li className="flex gap-2">
            <span className="text-blue-500 text-xl">•</span>
            Strong understanding of responsive design and cross-browser compatibility.
          </li>

          <li className="flex gap-2">
            <span className="text-blue-500 text-xl">•</span>
            Basic knowledge of AI & Machine Learning concepts.
          </li>

          <li className="flex gap-2">
            <span className="text-blue-500 text-xl">•</span>
            Strong problem-solving skills and fast learning ability.
          </li>
        </ul>
      </motion.section>
    </>
  );
}
