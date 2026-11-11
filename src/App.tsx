/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageType, ServiceItem } from './types';
import { SERVICES_DATA } from './data/agencyData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ServiceModal } from './components/ServiceModal';

import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { WhyUsPage } from './pages/WhyUsPage';
import { WorkPage } from './pages/WorkPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  // Brand color palette from attachment:
  // Charcoal: #272727
  // Terracotta: #BF603C
  // Paper: #FAF8F5
  // Default to Paper light mode to highlight the brand color palette
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // Page routing
  const getInitialPage = (): PageType => {
    const path = window.location.pathname.replace(/^\//, '').toLowerCase();
    if (path === 'services') return 'services';
    if (path === 'why-us' || path === 'about' || path === 'process') return 'why-us';
    if (path === 'work' || path === 'portfolio') return 'work';
    if (path === 'faq') return 'contact';
    if (path === 'contact') return 'contact';
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<PageType>(getInitialPage);
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  // Prefill state for the contact form
  const [prefilledService, setPrefilledService] = useState<string>('Basic Website Design');
  const [prefilledBudget, setPrefilledBudget] = useState<string>('KSh 75,000 – 150,000');
  const [prefilledNotes, setPrefilledNotes] = useState<string>('');

  // Synchronize browser history and document title
  const navigateTo = (page: PageType) => {
    const resolvedPage: PageType = page === 'process' ? 'why-us' : page === 'faq' ? 'contact' : page;
    setCurrentPage(resolvedPage);
    const pageTitles: Record<PageType, string> = {
      home: 'Hatua Studios | Modern Digital Agency & Software Solutions',
      services: 'Services & Disciplines | Hatua Studios',
      'why-us': 'Why Hatua Studios | Agency Advantage',
      process: '4-Step Sprint Methodology | Hatua Studios',
      work: 'Portfolio & Case Studies | Hatua Studios',
      faq: 'Frequently Asked Questions | Hatua Studios',
      contact: 'Talk to Us | Hatua Studios',
    };
    document.title = pageTitles[resolvedPage] || 'Hatua Studios';

    const newPath = resolvedPage === 'home' ? '/' : `/${resolvedPage}`;
    if (window.location.pathname !== newPath) {
      window.history.pushState({ page }, '', newPath);
    }
  };

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state && event.state.page) {
        setCurrentPage(event.state.page);
      } else {
        setCurrentPage(getInitialPage());
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModalService(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleBookServiceDirect = (serviceTitle: string) => {
    setPrefilledService(serviceTitle);
    navigateTo('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectServiceByTitle = (serviceTitle: string) => {
    const srv = SERVICES_DATA.find((s) => s.title === serviceTitle);
    if (srv) {
      setActiveModalService(srv);
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-[#272727] text-[#FAF8F5]' : 'bg-[#FAF8F5] text-[#272727]'} transition-colors duration-200 selection:bg-[#BF603C]/20 selection:text-[#BF603C]`}>
      {/* Top Bar Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Main Multi-Page Content */}
      <main id="main-content" className="animate-in fade-in duration-150">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onSelectServiceModal={(srv) => setActiveModalService(srv)}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={navigateTo}
            onSelectServiceModal={(srv) => setActiveModalService(srv)}
            onBookServiceDirect={handleBookServiceDirect}
          />
        )}

        {currentPage === 'why-us' && (
          <WhyUsPage onNavigate={navigateTo} />
        )}

        {currentPage === 'work' && (
          <WorkPage onNavigate={navigateTo} />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={navigateTo}
            prefilledService={prefilledService}
            prefilledBudget={prefilledBudget}
            prefilledNotes={prefilledNotes}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={navigateTo}
      />

      {/* Service Detail Modal */}
      <ServiceModal
        service={activeModalService}
        onClose={() => setActiveModalService(null)}
        onSelectService={handleBookServiceDirect}
      />
    </div>
  );
}
