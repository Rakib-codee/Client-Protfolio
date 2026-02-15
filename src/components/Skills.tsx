"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  {
    name: "AutoCAD",
    level: 82,
    description: "2D drafting, floor plans, technical drawings",
    icon: "📐",
  },
  {
    name: "Revit",
    level: 68,
    description: "3D modeling, BIM workflows, construction docs",
    icon: "🏗️",
  },
  {
    name: "MATLAB",
    level: 60,
    description: "Numerical analysis, structural calculations",
    icon: "📊",
  },
  {
    name: "Structural Design",
    level: 72,
    description: "Load analysis, stress calculations, safety factors",
    icon: "🔧",
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-6 bg-[var(--panel)]" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-[var(--muted)] max-w-2xl mx-auto">
            Tools and technologies I work with
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 text-center hover:scale-105 transition-transform"
            >
              {/* Circular Progress */}
              <div className="relative w-24 h-24 mx-auto mb-4">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  {/* Background circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="var(--border)"
                    strokeWidth="8"
                  />
                  {/* Progress circle */}
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    initial={{ strokeDasharray: "0 251.2" }}
                    animate={
                      isInView
                        ? { strokeDasharray: `${skill.level * 2.512} 251.2` }
                        : {}
                    }
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#ff6f61" />
                      <stop offset="100%" stopColor="#00bfff" />
                    </linearGradient>
                  </defs>
                </svg>
                {/* Center icon */}
                <div className="absolute inset-0 flex items-center justify-center text-2xl">
                  {skill.icon}
                </div>
              </div>

              {/* Skill info */}
              <h3 className="text-lg font-bold mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                {skill.name}
              </h3>
              <div className="text-2xl font-bold gradient-text mb-2">
                {skill.level}%
              </div>
              <p className="text-[var(--muted)] text-xs">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
