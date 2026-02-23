import React from "react";
import { motion } from "motion/react";
import { CASE_STUDIES } from "../../data/mockData";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const WorkGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {CASE_STUDIES.map((study, index) => (
        <motion.div
          key={study.id}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="group relative aspect-[4/3] overflow-hidden bg-charcoal-light"
        >
          <img
            src={study.thumbnail}
            alt={study.title}
            className="w-full h-full object-cover transition-transform duration-700 
              md:group-hover:scale-110 md:group-hover:opacity-40"
          />

          {/* Overlay */}
          <div
            className="absolute inset-0 p-8 flex flex-col justify-end 
              bg-gradient-to-t from-black/80 via-black/20 to-transparent
              opacity-100 md:opacity-0 md:group-hover:opacity-100
              transition-opacity duration-500"
          >
            <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2">
              {study.category}
            </span>

            <h3 className="text-3xl font-display font-bold uppercase mb-4 leading-none">
              {study.title}
            </h3>

            <Link
              to={`/case-study/${study.slug}`}
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest group/link"
            >
              View Case Study
              <ArrowUpRight className="w-4 h-4 transition-transform md:group-hover/link:-translate-y-1 md:group-hover/link:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Corner Icon */}
          <div className="absolute top-6 right-6 md:hidden">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default WorkGrid;
