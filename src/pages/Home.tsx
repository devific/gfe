import React from 'react';
import Hero from '../components/sections/Hero';
import SectionWrapper from '../components/layout/SectionWrapper';
import WorkGrid from '../components/sections/WorkGrid';
import Legacy from '../components/sections/Legacy';
import Services from '../components/sections/Services';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Hero />
      
      <SectionWrapper>
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="text-primary text-xs font-bold uppercase tracking-widest mb-4 block">Selected Work</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter leading-none">
              Crafting Cultural <br /> Impact
            </h2>
          </div>
          <Link to="/work" className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">
            Explore All Projects <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <WorkGrid />
      </SectionWrapper>

      <Legacy />

      <SectionWrapper className="bg-charcoal">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary text-xs font-bold uppercase tracking-widest mb-4 block">Our Expertise</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter leading-none mb-6">
            Comprehensive <br /> Solutions
          </h2>
          <p className="text-white/50 text-lg">
            From conceptualization to execution, we provide end-to-end management for brands and talent seeking to make a mark.
          </p>
        </div>
        <Services />
      </SectionWrapper>

      {/* Marquee Brands */}
      <div className="py-20 bg-charcoal-dark border-y border-white/5 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex items-center gap-20 px-10">
              <span className="text-4xl md:text-6xl font-display font-black uppercase text-white/10 hover:text-primary/40 transition-colors cursor-default">ADIDAS</span>
              <span className="text-4xl md:text-6xl font-display font-black uppercase text-white/10 hover:text-primary/40 transition-colors cursor-default">JBL</span>
              <span className="text-4xl md:text-6xl font-display font-black uppercase text-white/10 hover:text-primary/40 transition-colors cursor-default">COCA COLA</span>
              <span className="text-4xl md:text-6xl font-display font-black uppercase text-white/10 hover:text-primary/40 transition-colors cursor-default">PUMA</span>
              <span className="text-4xl md:text-6xl font-display font-black uppercase text-white/10 hover:text-primary/40 transition-colors cursor-default">NETFLIX</span>
            </div>
          ))}
        </div>
      </div>

      {/* Contact CTA */}
      <SectionWrapper className="bg-primary py-32 md:py-48 text-center" fullWidth>
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl md:text-8xl font-display font-bold uppercase tracking-tighter leading-[0.85] mb-12 text-white">
            Let's Create the <br /> Next Iconic Moment.
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-4 px-12 py-6 bg-white text-charcoal rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl"
          >
            Start a Conversation <MessageSquare className="w-5 h-5" />
          </Link>
        </div>
      </SectionWrapper>
    </>
  );
};

export default Home;
