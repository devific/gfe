import React from 'react';
import { Link } from 'react-router-dom';
import { Fish, Instagram, Twitter, Linkedin, Youtube, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal-dark border-t border-white/5 pt-20 pb-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="flex items-center gap-2 mb-8">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <Fish className="text-white w-7 h-7" />
            </div>
            <span className="font-display font-bold text-2xl tracking-tighter uppercase">
              Go Fish <span className="text-primary">Entertainment</span>
            </span>
          </Link>
          <p className="text-white/50 max-w-md text-lg leading-relaxed mb-8">
            A legacy of 20+ years in celebrity management, brand campaigns, and iconic live experiences. We don't just manage talent; we build cultural movements.
          </p>
          <div className="flex gap-4">
            {[Instagram, Twitter, Linkedin, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold uppercase tracking-widest text-sm mb-8 text-primary">Navigation</h4>
          <ul className="space-y-4">
            {['Home', 'About', 'Work', 'Media', 'Contact'].map((item) => (
              <li key={item}>
                <Link to={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`} className="text-white/70 hover:text-white transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold uppercase tracking-widest text-sm mb-8 text-primary">Contact</h4>
          <ul className="space-y-4 text-white/70">
            <li>Mumbai Office: Juhu, MH, India</li>
            <li>Email: hello@gofishent.com</li>
            <li>Phone: +91 22 26XX XXXX</li>
            <li className="pt-4">
              <Link to="/contact" className="inline-flex items-center gap-2 text-white font-bold group">
                Start a Conversation <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/30 text-xs uppercase tracking-widest">
        <p>© 2026 Go Fish Entertainment Pvt Ltd. All Rights Reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
