"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-900 text-white px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <div className="relative w-64 h-64 md:w-96 md:h-96 mx-auto">
          <Image
            src="/hero.jpg"  // ✅ Correct way for public images
            alt="Hero Image"
            fill
            className="object-contain drop-shadow-lg"
            priority
          />
        </div>

        <h1 className="mt-8 text-4xl md:text-5xl font-bold">
          Hi, I'm <span className="text-blue-500">Prasoon Jadon</span>
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          A passionate Developer building modern web & mobile experiences 🚀
        </p>
      </motion.div>
    </section>
  );
}
