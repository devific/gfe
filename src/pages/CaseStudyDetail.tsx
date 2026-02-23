import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { CASE_STUDIES } from '../data/mockData';
import SectionWrapper from '../components/layout/SectionWrapper';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

const CaseStudyDetail = () => {
  const { slug } = useParams();
  const study = CASE_STUDIES.find(s => s.slug === slug);

  if (!study) return <Navigate to="/work" />;

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <img
          src={study.heroImage}
          alt={study.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
          <div className="max-w-7xl mx-auto">
            <Link to="/work" className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest mb-8 hover:gap-4 transition-all">
              <ArrowLeft className="w-4 h-4" /> Back to Work
            </Link>
            <span className="block text-primary text-sm font-bold uppercase tracking-widest mb-4">{study.category}</span>
            <h1 className="text-5xl md:text-8xl font-display font-bold uppercase tracking-tighter leading-none mb-4">
              {study.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl font-light">
              {study.description}
            </p>
          </div>
        </div>
      </section>

      {/* Details */}
      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="md:col-span-2 space-y-16">
            <div>
              <h2 className="text-3xl font-display font-bold uppercase mb-6 text-primary">The Objective</h2>
              <p className="text-xl text-white/70 leading-relaxed">{study.objective}</p>
            </div>
            <div>
              <h2 className="text-3xl font-display font-bold uppercase mb-6 text-primary">The Strategy</h2>
              <p className="text-xl text-white/70 leading-relaxed">{study.strategy}</p>
            </div>
            <div>
              <h2 className="text-3xl font-display font-bold uppercase mb-6 text-primary">The Execution</h2>
              <p className="text-xl text-white/70 leading-relaxed">{study.execution}</p>
            </div>
          </div>

          <div className="space-y-12">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-6">Project Info</h3>
              <div className="space-y-6">
                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-white/40 mb-1">Client</span>
                  <span className="text-lg font-bold">{study.client}</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-white/40 mb-1">Category</span>
                  <span className="text-lg font-bold">{study.category}</span>
                </div>
              </div>
            </div>

            <div className="bg-primary/10 border border-primary/20 p-8 rounded-2xl">
              <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-6">The Results</h3>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="text-primary w-6 h-6 mt-1 flex-shrink-0" />
                <p className="text-lg font-bold leading-tight">{study.results}</p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Gallery */}
      <SectionWrapper className="bg-charcoal-dark" fullWidth>
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
          <h2 className="text-4xl font-display font-bold uppercase tracking-tighter">Visual Showcase</h2>
        </div>
        <div className="flex gap-4 overflow-x-auto no-scrollbar px-6 md:px-12 pb-10">
          {study.gallery.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="flex-shrink-0 w-[80vw] md:w-[40vw] aspect-video rounded-2xl overflow-hidden"
            >
              <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Next Project */}
      <div className="py-24 border-t border-white/5 text-center">
        <span className="text-white/40 text-xs font-bold uppercase tracking-widest mb-4 block">Next Project</span>
        <Link to="/work" className="group inline-flex items-center gap-4 text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter hover:text-primary transition-colors">
          Explore More Work <ArrowRight className="w-8 h-8 md:w-12 md:h-12 transition-transform group-hover:translate-x-4" />
        </Link>
      </div>
    </div>
  );
};

export default CaseStudyDetail;
