"use client";

import { motion } from "framer-motion";

const skills = [
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", name: "React" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", name: "Next.js" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg", name: "Tailwind CSS" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", name: "TypeScript" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg", name: "Kotlin" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", name: "Docker" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", name: "Git" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg", name: "Android Studio" },
];

export default function Skills() {
  return (
    <section className="bg-[#0a0f24] py-16 overflow-hidden">
      <h2 className="text-center text-3xl font-bold text-white mb-10">
        My <span className="text-blue-500">Skills</span>
      </h2>

      {/* Infinite Sliding Animation */}
      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex space-x-16"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
        >
          {[...skills, ...skills].map((skill, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center min-w-[100px]"
            >
              <img
                src={skill.src}
                alt={skill.name}
                className="w-14 h-14 grayscale hover:grayscale-0 transition-all duration-300"
              />
              <p className="text-sm text-gray-300 mt-2">{skill.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
