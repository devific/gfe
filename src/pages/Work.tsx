import React from 'react';
import SectionWrapper from '../components/layout/SectionWrapper';
import WorkGrid from '../components/sections/WorkGrid';

const Work = () => {
  return (
    <div className="pt-32">
      <SectionWrapper>
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-9xl font-display font-bold uppercase tracking-tighter leading-none mb-8">
            Our <br /> <span className="text-stroke">Portfolio</span>
          </h1>
          <p className="text-xl text-white/50 max-w-2xl mx-auto">
            A showcase of our most impactful collaborations, celebrity partnerships, and brand transformations over the last two decades.
          </p>
        </div>
        <WorkGrid />
      </SectionWrapper>
    </div>
  );
};

export default Work;
