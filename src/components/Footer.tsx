import React from 'react';
import { PageType } from '../types';
import { ArrowUpRight, Mail, Phone, MapPin, Globe, Github, Twitter, Linkedin, Instagram, MessageCircle } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageType) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
}) => {
  const currentYear = 2026;

  const handleNavClick = (page: PageType) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#272727] text-[#C5BFB8] border-t border-[#404040] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Call to Action Row */}
        <div className="pb-12 border-b border-[#383838] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#BF603C] block mb-1">
              Ready to grow your digital presence?
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
              Let's build your next breakthrough product.
            </h3>
          </div>
          <button
            onClick={() => handleNavClick('contact')}
            className="px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-[#BF603C] hover:bg-[#A6502E] rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap shrink-0"
          >
            <span>Talk to Us</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-12">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center text-left cursor-pointer mb-4"
              aria-label="Hatua Studios home"
            >
              <img
                src="/assets/brand/hatua-logo-horizontal-reversed-2000.png"
                alt="Hatua Studios"
                className="h-10 w-[148px] object-contain object-left"
              />
            </button>
            <p className="text-xs sm:text-sm text-[#A8A39D] leading-relaxed max-w-sm mb-6">
              A modern digital engineering and creative agency building high-converting websites, e-commerce stores, custom software, and AI solutions for forward-thinking enterprises.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-[#323232] border border-[#444444] hover:border-[#BF603C] text-[#C5BFB8] hover:text-white flex items-center justify-center transition-colors"
                aria-label="Twitter Profile"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-[#323232] border border-[#444444] hover:border-[#BF603C] text-[#C5BFB8] hover:text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/hatuastudios/"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-[#323232] border border-[#444444] hover:border-[#BF603C] text-[#C5BFB8] hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-[#323232] border border-[#444444] hover:border-[#BF603C] text-[#C5BFB8] hover:text-white flex items-center justify-center transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/15550194821"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-[#323232] border border-[#444444] hover:border-emerald-500 text-[#C5BFB8] hover:text-emerald-400 flex items-center justify-center transition-colors"
                aria-label="WhatsApp Chat"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Pages */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Pages
            </h4>
            <ul className="space-y-2 text-xs text-[#A8A39D]">
              {[
                { label: 'Home', page: 'home' as PageType },
                { label: 'Services (48)', page: 'services' as PageType },
                { label: 'Why Us + Process', page: 'why-us' as PageType },
                { label: 'Case Studies', page: 'work' as PageType },
                { label: 'FAQ', page: 'faq' as PageType },
                { label: 'Contact', page: 'contact' as PageType },
              ].map((item) => (
                <li key={item.page}>
                  <button
                    onClick={() => handleNavClick(item.page)}
                    className="hover:text-[#BF603C] transition-colors cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Service categories */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Explore by Category
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-xs text-[#A8A39D]">
              {[
                'Branding & Creative Design',
                'Website & E-Commerce',
                'Digital Marketing & Social Media',
                'Advertising, SEO & Public Relations',
                'Brand Activations, Promotions & Events',
                'Technology & Software Solutions',
                'Strategy & Consulting',
              ].map((category) => (
                <button
                  key={category}
                  onClick={() => handleNavClick('services')}
                  className="text-left hover:text-[#BF603C] transition-colors cursor-pointer truncate"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Unboxed Legal Notes */}
        <div className="pt-8 border-t border-[#383838] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C857D]">
          <div className="flex items-center gap-2">
            <span>&copy; {currentYear} Hatua Studios Ltd. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4 text-[#A8A39D]">
            <span>Privacy Policy</span>
            <span aria-hidden="true">·</span>
            <span>Terms of Service</span>
            <span aria-hidden="true">·</span>
            <span>Security Guarantee</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
