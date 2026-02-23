import React from 'react';
import SectionWrapper from '../components/layout/SectionWrapper';
import { motion } from 'motion/react';
import { Award, Users, Globe, Zap } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, label: 'Years Legacy', value: '20+' },
    { icon: Users, label: 'Talents Managed', value: '100+' },
    { icon: Globe, label: 'Campaigns Executed', value: '500+' },
    { icon: Zap, label: 'Brand Partners', value: '250+' },
  ];

  return (
    <div className="pt-32">
      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <h1 className="text-6xl md:text-9xl font-display font-bold uppercase tracking-tighter leading-none mb-8">
              Our <br /> <span className="text-primary">Story</span>
            </h1>
            <p className="text-2xl text-white/80 leading-relaxed mb-8 font-light">
              Since 2004, Go Fish Entertainment has been at the forefront of the Indian entertainment industry, pioneering the way brands interact with celebrities.
            </p>
            <p className="text-lg text-white/50 leading-relaxed">
              What started as a boutique talent agency has evolved into a full-service entertainment powerhouse. We believe in the power of authentic storytelling and the undeniable impact of cultural icons. Our mission is to create moments that don't just trend, but endure.
            </p>
          </div>
          <div className="relative aspect-square rounded-3xl overflow-hidden">
            <img 
              src="https://picsum.photos/seed/office/1000/1000" 
              alt="Our Office" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
              <div className="text-4xl md:text-6xl font-display font-bold mb-2">{stat.value}</div>
              <div className="text-[10px] uppercase tracking-widest text-white/40">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="bg-charcoal-dark p-12 md:p-24 rounded-[3rem] text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter mb-12">
            The Visionaries <br /> <span className="text-stroke">Behind the Brand</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-6">
               <div className="aspect-[3/4] bg-white/5 rounded-2xl overflow-hidden">
                  <img src="https://picsum.photos/seed/founder1/600/800" alt="Founder" className="w-full h-full object-cover grayscale" />
               </div>
               <h3 className="text-2xl font-display font-bold uppercase">Sajid Shamim</h3>
               <p className="text-primary text-xs font-bold uppercase tracking-widest">Director & Founder</p>
            </div>
            <div className="space-y-6">
               <div className="aspect-[3/4] bg-white/5 rounded-2xl overflow-hidden">
                  <img src="https://picsum.photos/seed/founder2/600/800" alt="Founder" className="w-full h-full object-cover grayscale" />
               </div>
               <h3 className="text-2xl font-display font-bold uppercase">Team Go Fish</h3>
               <p className="text-primary text-xs font-bold uppercase tracking-widest">The Powerhouse</p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default About;
