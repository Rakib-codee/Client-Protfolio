"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const skills = ["AutoCAD", "Revit", "MATLAB", "Structural Analysis"];

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-coral font-semibold mb-2">Hello, I&apos;m</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            <span className="gradient-text">Ramisa</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--foreground)] mb-4">
            Civil Engineering Student
          </h2>
          <p className="text-[var(--muted)] text-lg mb-6 max-w-md">
            Designing the structures of tomorrow. Passionate about sustainable
            infrastructure and innovative engineering solutions.
          </p>

          {/* Skill Pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
                className="px-4 py-2 rounded-full glass text-sm text-[var(--muted)]"
              >
                {skill}
              </motion.span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-coral to-sky text-white font-semibold hover:opacity-90 transition-opacity"
            >
              View Projects
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-6 py-3 rounded-full glass font-semibold gradient-border hover:bg-[var(--panel)] transition-colors"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative" style={{ width: "350px", height: "350px" }}>
            {/* Background glow */}
            <div className="absolute inset-0 bg-linear-to-br from-coral/30 to-sky/30 rounded-full blur-3xl" />
            
            {/* Image container */}
            <div className="relative w-90 h-110 rounded-full overflow-hidden gradient-border">
              <Image
                src="/images/rr2.png"
                alt="Ramisa - Civil Engineering Student"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 px-4 py-2 rounded-full glass"
            >
              <span className="text-sm font-semibold">🎓 B.Sc. in CE</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
