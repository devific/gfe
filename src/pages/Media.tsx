import React, { useState } from 'react';
import SectionWrapper from '../components/layout/SectionWrapper';
import { MEDIA_GALLERY } from '../data/mockData';
import { motion, AnimatePresence } from 'motion/react';
import { Play, X, Filter } from 'lucide-react';

const Media = () => {
  const [filter, setFilter] = useState('All');
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const categories = ['All', 'Campaign', 'Celebrity', 'Brand', 'Event'];
  const filteredMedia = filter === 'All' ? MEDIA_GALLERY : MEDIA_GALLERY.filter(m => m.category === filter);

  return (
    <div className="pt-32">
      <SectionWrapper>
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-9xl font-display font-bold uppercase tracking-tighter leading-none mb-8">
            Media <br /> <span className="text-stroke">Vault</span>
          </h1>
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest border transition-all ${
                  filter === cat ? 'bg-primary border-primary text-white' : 'border-white/10 text-white/50 hover:border-white/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredMedia.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative group rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => item.type === 'video' && setSelectedVideo(item.url)}
              >
                <img
                  src={item.type === 'video' ? item.thumbnail : item.url}
                  alt={item.title}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  {item.type === 'video' ? (
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                      <Play className="fill-white w-6 h-6 ml-1" />
                    </div>
                  ) : (
                    <div className="text-center p-6">
                      <span className="text-primary text-[10px] font-bold uppercase tracking-widest mb-2 block">{item.category}</span>
                      <h3 className="text-xl font-display font-bold uppercase">{item.title}</h3>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </SectionWrapper>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12"
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-8 right-8 text-white hover:text-primary transition-colors"
            >
              <X className="w-10 h-10" />
            </button>
            <div className="w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <video src={selectedVideo} controls autoPlay className="w-full h-full object-contain" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Media;
