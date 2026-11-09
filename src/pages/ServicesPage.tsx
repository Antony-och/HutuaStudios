import React, { useMemo, useRef, useState } from 'react';
import { PageType, ServiceCategory, ServiceItem } from '../types';
import { SERVICES_DATA } from '../data/agencyData';
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bot,
  Camera,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Code2,
  FileText,
  Globe,
  Mail,
  Handshake,
  Layout,
  LifeBuoy,
  MapPinned,
  Megaphone,
  MessageCircle,
  Mic2,
  Package,
  PenTool,
  PartyPopper,
  Printer,
  Radio,
  RefreshCw,
  Rocket,
  Search,
  Share2,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Store,
  Target,
  Users,
  Video,
} from 'lucide-react';
import { ContactSection } from '../components/ContactSection';

interface ServicesPageProps {
  onNavigate: (page: PageType) => void;
  onSelectServiceModal: (service: ServiceItem) => void;
  onBookServiceDirect: (serviceTitle: string) => void;
}

const categoryMeta: { label: string; value: ServiceCategory; description: string }[] = [
  { label: 'All services', value: 'all', description: 'The complete Hatua catalog' },
  { label: 'Branding & creative', value: 'branding', description: 'Identity, content, and visual production' },
  { label: 'Web & commerce', value: 'web', description: 'Websites, stores, and marketplaces' },
  { label: 'Marketing & social', value: 'marketing-it', description: 'Growth, content, and community' },
  { label: 'Advertising, SEO & PR', value: 'advertising-pr', description: 'Campaigns, search, media, and reputation' },
  { label: 'Activations & events', value: 'activations-events', description: 'Promotions, print, and memorable experiences' },
  { label: 'Technology & software', value: 'software-ai', description: 'Applications, AI, and IT support' },
  { label: 'Strategy & consulting', value: 'strategy-consulting', description: 'Transformation, launches, and research' },
];

const getServiceIcon = (iconName: string) => {
  const iconProps = { className: 'w-5 h-5 text-[#BF603C]' };
  switch (iconName) {
    case 'Globe': return <Globe {...iconProps} />;
    case 'Sparkles': return <Sparkles {...iconProps} />;
    case 'Package': return <Package {...iconProps} />;
    case 'PenTool': return <PenTool {...iconProps} />;
    case 'Video': return <Video {...iconProps} />;
    case 'Camera': return <Camera {...iconProps} />;
    case 'FileText': return <FileText {...iconProps} />;
    case 'Store': return <Store {...iconProps} />;
    case 'ShoppingBag': return <ShoppingBag {...iconProps} />;
    case 'Layout': return <Layout {...iconProps} />;
    case 'Share2': return <Share2 {...iconProps} />;
    case 'Code2': return <Code2 {...iconProps} />;
    case 'Bot': return <Bot {...iconProps} />;
    case 'LifeBuoy': return <LifeBuoy {...iconProps} />;
    case 'Mail': return <Mail {...iconProps} />;
    case 'MessageCircle': return <MessageCircle {...iconProps} />;
    case 'BarChart3': return <BarChart3 {...iconProps} />;
    case 'Users': return <Users {...iconProps} />;
    case 'Megaphone': return <Megaphone {...iconProps} />;
    case 'Target': return <Target {...iconProps} />;
    case 'Radio': return <Radio {...iconProps} />;
    case 'ShieldCheck': return <ShieldCheck {...iconProps} />;
    case 'Handshake': return <Handshake {...iconProps} />;
    case 'PartyPopper': return <PartyPopper {...iconProps} />;
    case 'Rocket': return <Rocket {...iconProps} />;
    case 'MapPinned': return <MapPinned {...iconProps} />;
    case 'Printer': return <Printer {...iconProps} />;
    case 'Smartphone': return <Smartphone {...iconProps} />;
    case 'Mic2': return <Mic2 {...iconProps} />;
    case 'RefreshCw': return <RefreshCw {...iconProps} />;
    case 'Search': return <Search {...iconProps} />;
    default: return <Sparkles {...iconProps} />;
  }
};

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onSelectServiceModal,
  onBookServiceDirect,
}) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const categoryRailRef = useRef<HTMLDivElement>(null);

  const scrollCategories = (direction: number) => {
    categoryRailRef.current?.scrollBy({ left: direction * 320, behavior: 'smooth' });
  };

  const filteredServices = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    return SERVICES_DATA.filter((service) => {
      const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
      if (!query) return matchesCategory;
      const searchableText = [
        service.title,
        service.tagline,
        service.shortDesc,
        service.fullDesc,
        ...service.deliverables,
      ].join(' ').toLowerCase();
      return matchesCategory && searchableText.includes(query);
    });
  }, [activeCategory, searchTerm]);

  const getCategoryLabel = (category: ServiceCategory) =>
    categoryMeta.find((item) => item.value === category)?.label || 'Specialized service';

  const getPriceLabel = (price: string) => price === 'Custom Quote' ? price : `From ${price}`;

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#FAF8F5] text-[#272727] dark:bg-[#272727] dark:text-[#FAF8F5]">
      <div className="pointer-events-none absolute -top-40 right-[-12rem] h-[34rem] w-[34rem] rounded-full bg-[#BF603C]/10 blur-3xl" />
      <div className="pointer-events-none absolute top-[30rem] left-[-18rem] h-[28rem] w-[28rem] rounded-full bg-[#E5DFC8]/40 blur-3xl dark:bg-[#BF603C]/5" />

      <main className="relative mx-auto max-w-7xl px-4 pb-24 pt-32 sm:px-6 lg:px-8">
        <section className="border-b border-[#E5DFC8] pb-14 dark:border-[#404040]">
          <div className="max-w-4xl">
            <div className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#BF603C]">
              <span>What we do</span>
              <span aria-hidden="true" className="text-[#BF603C]/40">/</span>
              <span>48 specialized services</span>
            </div>
            <h1 className="max-w-4xl text-4xl font-extrabold leading-[0.98] tracking-[-0.04em] text-[#272727] dark:text-[#FAF8F5] sm:text-6xl">
              Choose the right starting point for your next chapter.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#5C5854] dark:text-[#C5BFB8] sm:text-lg">
              From a conversion-ready website to a full brand activation, Hatua brings strategy, creative, technology, and delivery into one accountable partner.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 rounded-xl bg-[#BF603C] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#BF603C]/15 transition-colors hover:bg-[#A6502E]"
              >
                Talk through your brief
                <ArrowRight className="h-4 w-4" />
              </button>
              <span className="inline-flex items-center gap-2 rounded-xl border border-[#E5DFC8] bg-white/60 px-4 py-3 text-xs font-semibold text-[#6B655F] dark:border-[#444444] dark:bg-[#323232]/70 dark:text-[#C5BFB8]">
                <ShieldCheck className="h-4 w-4 text-[#BF603C]" />
                Fixed-scope proposals
              </span>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[#E5DFC8] pt-5 text-xs font-semibold text-[#8C857D] dark:border-[#404040]">
              <span><strong className="text-[#272727] dark:text-[#FAF8F5]">48</strong> specialist services</span>
              <span><strong className="text-[#272727] dark:text-[#FAF8F5]">7</strong> disciplines</span>
              <span><strong className="text-[#272727] dark:text-[#FAF8F5]">KSh</strong> local pricing</span>
              <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-[#BF603C]" /> Fixed-scope proposals</span>
            </div>
          </div>
        </section>

        <section className="pt-10">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#BF603C]">Browse the catalog</span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#272727] dark:text-[#FAF8F5] sm:text-3xl">Find a focused service or build a bundle.</h2>
            </div>
            <div className="relative w-full lg:max-w-sm">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8C857D]" />
              <input
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search services, deliverables, or outcomes"
                className="w-full rounded-xl border border-[#E5DFC8] bg-white py-3 pl-11 pr-4 text-sm text-[#272727] outline-none transition-colors placeholder:text-[#8C857D] focus:border-[#BF603C] dark:border-[#444444] dark:bg-[#323232] dark:text-[#FAF8F5]"
              />
            </div>
          </div>

          <div className="relative mt-7">
            <div
              ref={categoryRailRef}
              className="flex max-w-full snap-x snap-mandatory gap-3 overflow-x-auto overflow-y-hidden pb-3 [scrollbar-width:none]"
            >
              {categoryMeta.map((category) => {
                const count = category.value === 'all'
                  ? SERVICES_DATA.length
                  : SERVICES_DATA.filter((service) => service.category === category.value).length;
                const isActive = activeCategory === category.value;
                return (
                  <button
                    key={category.value}
                    onClick={() => setActiveCategory(category.value)}
                    title={category.description}
                    className={`group relative min-h-[112px] min-w-[220px] max-w-[220px] flex-none snap-start overflow-hidden rounded-2xl border p-4 text-left transition-all sm:min-w-[245px] sm:max-w-[245px] ${
                      isActive
                        ? 'border-[#BF603C] bg-[#BF603C] text-white shadow-lg shadow-[#BF603C]/15'
                        : 'border-[#E5DFC8] bg-white text-[#272727] hover:-translate-y-0.5 hover:border-[#BF603C]/60 hover:shadow-md dark:border-[#444444] dark:bg-[#323232] dark:text-[#FAF8F5]'
                    }`}
                  >
                    <span className={`text-[10px] font-bold uppercase tracking-[0.16em] ${isActive ? 'text-white/70' : 'text-[#BF603C]'}`}>
                      {String(categoryMeta.indexOf(category) + 1).padStart(2, '0')}
                    </span>
                    <span className="mt-3 block max-w-[180px] break-words text-sm font-bold leading-snug">{category.label}</span>
                    <span className={`mt-1 block max-w-[185px] break-words pr-4 text-[11px] leading-relaxed ${isActive ? 'text-white/75' : 'text-[#8C857D]'}`}>
                      {count} services · {category.description}
                    </span>
                    <ArrowUpRight className={`absolute bottom-4 right-4 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${isActive ? 'text-white' : 'text-[#BF603C]'}`} />
                  </button>
                );
              })}
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-8 bg-gradient-to-r from-[#FAF8F5] to-transparent dark:from-[#272727] sm:block" />
            <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-8 bg-gradient-to-l from-[#FAF8F5] to-transparent dark:from-[#272727] sm:block" />
            <div className="mt-1 flex justify-end gap-2">
              <button
                onClick={() => scrollCategories(-1)}
                className="rounded-full border border-[#E5DFC8] bg-white p-2 text-[#6B655F] transition-colors hover:border-[#BF603C] hover:text-[#BF603C] dark:border-[#444444] dark:bg-[#323232] dark:text-[#C5BFB8]"
                aria-label="Scroll categories left"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => scrollCategories(1)}
                className="rounded-full border border-[#E5DFC8] bg-white p-2 text-[#6B655F] transition-colors hover:border-[#BF603C] hover:text-[#BF603C] dark:border-[#444444] dark:bg-[#323232] dark:text-[#C5BFB8]"
                aria-label="Scroll categories right"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-[#8C857D]">
            <span>Showing <strong className="text-[#272727] dark:text-[#FAF8F5]">{filteredServices.length}</strong> of {SERVICES_DATA.length} services</span>
            {(searchTerm || activeCategory !== 'all') && (
              <button
                onClick={() => { setSearchTerm(''); setActiveCategory('all'); }}
                className="font-semibold text-[#BF603C] hover:text-[#A6502E]"
              >
                Reset filters
              </button>
            )}
          </div>

          {filteredServices.length > 0 ? (
            <div className="mt-5 grid gap-5 xl:grid-cols-2">
              {filteredServices.map((service, index) => (
                <article
                  key={service.id}
                  className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl dark:bg-[#323232] sm:p-6 ${
                    service.highlight
                      ? 'border-[#BF603C]/60 shadow-[#BF603C]/5'
                      : 'border-[#E5DFC8] dark:border-[#444444]'
                  }`}
                >
                  <div className={`absolute inset-x-0 top-0 h-1 ${service.highlight ? 'bg-[#BF603C]' : 'bg-[#E5DFC8] dark:bg-[#444444]'}`} />
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex min-w-0 items-center gap-3">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#BF603C]/20 bg-[#BF603C]/10 dark:border-[#BF603C]/30 dark:bg-[#BF603C]/10">
                          {getServiceIcon(service.iconName)}
                        </div>
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8C857D]">
                            <span>{String(index + 1).padStart(2, '0')}</span>
                            <span className="text-[#BF603C]/50">·</span>
                            <span>{getCategoryLabel(service.category)}</span>
                          </div>
                          <h3 className="mt-1 text-lg font-bold tracking-tight text-[#272727] dark:text-[#FAF8F5] sm:text-xl">{service.title}</h3>
                        </div>
                      </div>
                      {service.highlight && (
                        <span className="shrink-0 rounded-full bg-[#BF603C]/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#BF603C]">Popular</span>
                      )}
                    </div>

                    <p className="mt-4 text-sm font-semibold text-[#BF603C]">{service.tagline}</p>
                    <p className="mt-2 text-sm leading-relaxed text-[#5C5854] dark:text-[#C5BFB8]">{service.shortDesc}</p>

                    <div className="mt-5">
                      <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#8C857D]">Included in scope</div>
                      <div className="grid gap-2 sm:grid-cols-2">
                      {service.deliverables.slice(0, 2).map((deliverable) => (
                        <div key={deliverable} className="flex items-start gap-2 border-t border-[#E5DFC8] py-2.5 text-xs leading-relaxed text-[#6B655F] dark:border-[#444444] dark:text-[#C5BFB8]">
                          <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#BF603C]" />
                          <span>{deliverable}</span>
                        </div>
                      ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col gap-4 border-t border-[#E5DFC8] pt-4 dark:border-[#444444] sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-4 text-xs">
                      <div>
                        <span className="block text-[10px] font-semibold uppercase tracking-wider text-[#8C857D]">Starting at</span>
                        <span className="mt-0.5 block font-bold text-[#272727] dark:text-[#FAF8F5]">{getPriceLabel(service.startingPrice)}</span>
                      </div>
                      <div className="h-7 w-px bg-[#E5DFC8] dark:bg-[#444444]" />
                      <div className="flex items-center gap-1.5 text-[#8C857D]">
                        <Clock3 className="h-3.5 w-3.5 text-[#BF603C]" />
                        <span>{service.estimatedTimeline}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onSelectServiceModal(service)}
                        className="rounded-lg bg-[#F2EDE4] px-3 py-2 text-xs font-semibold text-[#6B655F] transition-colors hover:bg-[#E5DFC8] hover:text-[#272727] dark:bg-[#272727] dark:text-[#C5BFB8] dark:hover:bg-[#444444] dark:hover:text-[#FAF8F5]"
                      >
                        View scope
                      </button>
                      <button
                        onClick={() => onBookServiceDirect(service.title)}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-[#BF603C] px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#A6502E]"
                      >
                        Discuss this
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-5 rounded-2xl border border-dashed border-[#E5DFC8] bg-white p-12 text-center dark:border-[#444444] dark:bg-[#323232]">
              <Search className="mx-auto h-8 w-8 text-[#BF603C]" />
              <h3 className="mt-4 text-lg font-bold text-[#272727] dark:text-[#FAF8F5]">No matching services</h3>
              <p className="mt-2 text-sm text-[#6B655F] dark:text-[#C5BFB8]">Try a broader search or reset the filters to explore the full catalog.</p>
            </div>
          )}
        </section>

        <section className="mt-20 overflow-hidden rounded-3xl bg-[#272727] p-7 text-[#FAF8F5] shadow-xl dark:bg-[#1E1E1E] sm:p-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D97852]">Need a tailored bundle?</span>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">Tell us the outcome. We’ll shape the right scope.</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#C5BFB8]">Share your goals, constraints, and timing. We’ll recommend the most practical combination of services and return a clear next step.</p>
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#BF603C] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#A6502E]"
            >
              Request a custom scope
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </section>

        <div className="mt-20">
          <ContactSection />
        </div>
      </main>
    </div>
  );
};
