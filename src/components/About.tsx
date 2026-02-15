"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "3+", label: "Projects" },
  { value: "2", label: "CAD Tools" },
  { value: "1", label: "Goal" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-[var(--muted)] max-w-2xl mx-auto">
            Getting to know the person behind the projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-3xl p-8 text-center"
          >
            <div className="relative w-32 h-32 mx-auto mb-6">
              <div className="absolute inset-0 bg-gradient-to-br from-coral to-sky rounded-full blur-xl opacity-50" />
              <div className="relative w-full h-full rounded-full overflow-hidden gradient-border">
                <Image
                  src="/images/rr2.png"
                  alt="Ramisa"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Ramisa</h3>
            <p className="text-[var(--muted)] mb-4">Civil Engineering Student</p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-[var(--muted)]">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Passionate about Building the Future
            </h3>
            <p className="text-[var(--muted)] mb-4 leading-relaxed">
              As a Civil Engineering student, I am dedicated to understanding the
              principles that make structures safe, sustainable, and efficient. My
              journey in engineering has equipped me with both theoretical knowledge
              and practical skills in design and analysis.
            </p>
            <p className="text-[var(--muted)] mb-6 leading-relaxed">
              I am proficient in industry-standard software like AutoCAD and Revit,
              and I enjoy applying analytical tools like MATLAB to solve complex
              engineering problems. My goal is to contribute to infrastructure
              projects that improve communities and stand the test of time.
            </p>

            {/* Download Resume Button */}
            <a
              href="/resume/cv.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-coral to-sky text-white font-semibold hover:opacity-90 transition-opacity"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
