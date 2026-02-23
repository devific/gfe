import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const Legacy = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const milestones = [
    { year: '2004', event: 'Go Fish Entertainment Founded' },
    { year: '2010', event: 'Pioneered Celebrity-Brand Alliances in India' },
    { year: '2015', event: 'Expanded to Global Talent Coordination' },
    { year: '2020', event: 'Digital Transformation & Content Strategy' },
    { year: '2024', event: 'Celebrating 20 Years of Excellence' },
  ];

  return (
    <div ref={containerRef} className="py-20 overflow-hidden bg-charcoal-dark">
      <div className="mb-20">
        <motion.h2 
          style={{ x: x1 }}
          className="text-7xl md:text-[15rem] font-display font-black uppercase text-stroke whitespace-nowrap leading-none opacity-20"
        >
          Two Decades of Excellence • Two Decades of Excellence •
        </motion.h2>
        <motion.h2 
          style={{ x: x2 }}
          className="text-7xl md:text-[15rem] font-display font-black uppercase text-primary whitespace-nowrap leading-none -mt-10 md:-mt-20"
        >
          20+ Years Legacy • 20+ Years Legacy •
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <h3 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter mb-8">
              Industry Leadership <br />
              <span className="text-primary">Since 2004</span>
            </h3>
            <p className="text-xl text-white/60 leading-relaxed mb-10">
              Go Fish Entertainment was founded with a vision to bridge the gap between brands and the entertainment world. Today, we stand as one of the most trusted names in the industry, having executed over 500+ successful campaigns.
            </p>
          </div>

          <div className="space-y-12 border-l border-white/10 pl-8 md:pl-16">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="absolute -left-[37px] md:-left-[69px] top-0 w-4 h-4 bg-primary rounded-full border-4 border-charcoal" />
                <span className="text-primary font-display font-bold text-2xl block mb-2">{m.year}</span>
                <p className="text-lg font-medium text-white/80">{m.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legacy;
