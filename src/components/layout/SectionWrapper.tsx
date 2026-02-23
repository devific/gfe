import React, { ReactNode } from 'react';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  fullWidth?: boolean;
}

const SectionWrapper = ({ children, className, id, fullWidth = false }: SectionWrapperProps) => {
  return (
    <section
      id={id}
      className={cn(
        'py-24 md:py-32 relative overflow-hidden',
        !fullWidth && 'max-w-7xl mx-auto px-6 md:px-12',
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;
