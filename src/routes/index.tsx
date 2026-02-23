import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Work = lazy(() => import('../pages/Work'));
const Media = lazy(() => import('../pages/Media'));
const Contact = lazy(() => import('../pages/Contact'));
const CaseStudyDetail = lazy(() => import('../pages/CaseStudyDetail'));

const AppRoutes = () => {
  return (
    <Suspense fallback={
      <div className="h-screen w-full flex items-center justify-center bg-charcoal">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          <span className="text-xs font-bold uppercase tracking-widest text-white/40">Loading Experience</span>
        </div>
      </div>
    }>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="work" element={<Work />} />
          <Route path="media" element={<Media />} />
          <Route path="contact" element={<Contact />} />
          <Route path="case-study/:slug" element={<CaseStudyDetail />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
