import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, ArrowRight, ArrowUpRight } from 'lucide-react';
import { PageType } from '../types';

interface NavbarProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  darkMode,
  setDarkMode,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; page: PageType }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Services', page: 'services' },
    { label: 'Why Us + Process', page: 'why-us' },
    { label: 'Work', page: 'work' },
    { label: 'FAQ', page: 'faq' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleNavClick = (page: PageType) => {
    setMobileMenuOpen(false);
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/90 dark:bg-[#272727]/95 backdrop-blur-md border-b border-[#E5DFC8] dark:border-[#404040] shadow-sm py-3.5'
          : 'bg-[#FAF8F5] dark:bg-[#272727] border-b border-[#E5DFC8]/60 dark:border-[#404040]/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center rounded-lg bg-[#272727] dark:bg-[#1E1E1E] px-2 py-1.5 text-left whitespace-nowrap shrink-0 group cursor-pointer"
            aria-label="Hatua Studios home"
          >
            <img
              src="/assets/brand/hatua-logo-horizontal-reversed-2000.png"
              alt="Hatua Studios"
              className="h-8 w-[122px] object-contain object-left transition-transform duration-200 group-hover:scale-[1.02]"
            />
          </button>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`transition-colors whitespace-nowrap shrink-0 py-1 relative cursor-pointer ${
                    isActive
                      ? 'text-[#BF603C] font-semibold'
                      : 'text-[#6B655F] dark:text-[#A8A39D] hover:text-[#272727] dark:hover:text-[#FAF8F5]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#BF603C] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: CTA & Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg text-[#6B655F] dark:text-[#A8A39D] hover:text-[#272727] dark:hover:text-[#FAF8F5] hover:bg-[#F2EDE4] dark:hover:bg-[#323232] transition-colors cursor-pointer"
              aria-label={darkMode ? 'Switch to paper light mode' : 'Switch to charcoal dark mode'}
              title={darkMode ? 'Switch to paper light mode' : 'Switch to charcoal dark mode'}
            >
              {darkMode ? <Sun className="w-4 h-4 text-[#FAF8F5]" /> : <Moon className="w-4 h-4 text-[#272727]" />}
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-[#BF603C] hover:bg-[#A6502E] rounded-lg shadow-sm transition-all whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Talk to Us</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-[#272727] dark:text-[#FAF8F5] hover:bg-[#F2EDE4] dark:hover:bg-[#323232] transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] dark:bg-[#272727] border-b border-[#E5DFC8] dark:border-[#404040] px-5 pt-3 pb-6 animate-in slide-in-from-top-3 duration-200">
          <div className="flex flex-col space-y-2 pt-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`text-left px-3 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#BF603C]/10 text-[#BF603C] font-semibold'
                      : 'text-[#6B655F] dark:text-[#A8A39D] hover:bg-[#F2EDE4] dark:hover:bg-[#323232] hover:text-[#272727] dark:hover:text-[#FAF8F5]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <div className="pt-3 border-t border-[#E5DFC8] dark:border-[#404040]">
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full flex items-center justify-center gap-1.5 px-4 py-3 text-sm font-semibold text-white bg-[#BF603C] hover:bg-[#A6502E] rounded-lg shadow-sm transition-all cursor-pointer"
              >
                <span>Talk to Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
