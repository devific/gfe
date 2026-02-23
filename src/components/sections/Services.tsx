import React from 'react';
import { SERVICES } from '../../data/mockData';
import { Star, Handshake, Mic2, Target, Users } from 'lucide-react';
import { motion } from 'motion/react';

const iconMap: any = {
  Star,
  Handshake,
  Mic2,
  Target,
  Users
};

const Services = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {SERVICES.map((service, i) => {
        const Icon = iconMap[service.icon];
        return (
          <motion.div
            key={service.id}
            whileHover={{ y: -10 }}
            className="glass-card p-10 rounded-2xl group transition-all duration-500 hover:bg-primary/5 hover:border-primary/20"
          >
            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
              <Icon className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-display font-bold uppercase mb-4 tracking-tight">
              {service.title}
            </h3>
            <p className="text-white/50 leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Services;
