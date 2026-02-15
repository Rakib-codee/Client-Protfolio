"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "Bridge Concept Study",
    category: "Structural Design",
    description:
      "Conceptual design and load analysis for a pedestrian bridge spanning 50 meters. Includes stress calculations and material optimization.",
    tags: ["AutoCAD", "Structural Analysis", "Load Calculation"],
    image: "🌉",
  },
  {
    title: "Residential Floor Plan",
    category: "Architectural Design",
    description:
      "Complete 2D floor plan design for a 3-bedroom residential unit. Optimized for space utilization and natural lighting.",
    tags: ["AutoCAD", "Floor Planning", "2D Design"],
    image: "🏠",
  },
  {
    title: "Concrete Mix Design",
    category: "Materials Engineering",
    description:
      "Laboratory analysis and optimization of concrete mix proportions for M25 grade concrete with improved workability.",
    tags: ["Materials Testing", "Lab Work", "Mix Design"],
    image: "🧱",
  },
  {
    title: "Drainage System Analysis",
    category: "Water Resources",
    description:
      "Hydrological study and drainage design for a residential area. Calculations based on rainfall intensity and catchment analysis.",
    tags: ["MATLAB", "Hydrology", "Civil Design"],
    image: "💧",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-[var(--muted)] max-w-2xl mx-auto">
            A showcase of my academic and personal engineering projects
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flip-card h-80"
            >
              <div className="flip-card-inner relative w-full h-full">
                {/* Front */}
                <div className="flip-card-front absolute w-full h-full glass rounded-2xl p-6 flex flex-col">
                  <div className="text-5xl mb-4">{project.image}</div>
                  <span className="text-xs text-coral font-semibold uppercase tracking-wider mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {project.title}
                  </h3>
                  <p className="text-[var(--muted)] text-sm flex-1 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-[var(--panel)] text-xs text-[var(--muted)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Back */}
                <div className="flip-card-back absolute w-full h-full glass rounded-2xl p-6 flex flex-col justify-center items-center text-center">
                  <div className="text-4xl mb-4">{project.image}</div>
                  <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {project.title}
                  </h3>
                  <p className="text-[var(--muted)] text-sm mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-gradient-to-r from-coral/20 to-sky/20 text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
