import React from 'react';
import SectionWrapper from '../components/layout/SectionWrapper';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-32">
      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-6xl md:text-8xl font-display font-bold uppercase tracking-tighter leading-none mb-8">
              Let's Talk <br /> <span className="text-primary">Business</span>
            </h1>
            <p className="text-xl text-white/50 mb-12 max-w-md">
              Whether you're a brand looking for the perfect face or a talent seeking strategic management, we're here to make it happen.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="text-primary w-6 h-6" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-white/40 mb-1">Email Us</span>
                  <a href="mailto:hello@gofishent.com" className="text-xl font-bold hover:text-primary transition-colors">hello@gofishent.com</a>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="text-primary w-6 h-6" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-white/40 mb-1">Call Us</span>
                  <a href="tel:+912226XXXXXX" className="text-xl font-bold hover:text-primary transition-colors">+91 22 26XX XXXX</a>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary w-6 h-6" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-white/40 mb-1">Visit Us</span>
                  <p className="text-xl font-bold">Juhu, Mumbai, MH, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 md:p-12 rounded-3xl">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Subject</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-primary transition-colors appearance-none">
                  <option className="bg-charcoal">Celebrity Management</option>
                  <option className="bg-charcoal">Brand Collaboration</option>
                  <option className="bg-charcoal">Event Inquiry</option>
                  <option className="bg-charcoal">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white font-bold uppercase tracking-widest py-5 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
              >
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </SectionWrapper>

      {/* Map Placeholder */}
      <div className="h-[400px] w-full bg-charcoal-dark grayscale opacity-50 mt-20 flex items-center justify-center border-t border-white/5">
         <span className="text-white/20 font-display font-bold uppercase tracking-widest">Interactive Map Placeholder</span>
      </div>
    </div>
  );
};

export default Contact;
