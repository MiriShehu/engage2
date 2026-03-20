import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import {
  Menu, X, ChevronDown, Phone, Mail, ArrowRight,
  Globe, Shield, Users, Heart, Activity, Smile, TrendingUp,
  Building2, Star, AlertCircle, Plane, Lock, MapPin, Flag,
  Zap, BookOpen, Clock, UserCircle, Quote, Briefcase, Key,
  Stethoscope, MonitorDot, DollarSign, ShieldCheck, HeartPulse,
  Globe2, Siren, ShieldAlert, UserCheck
} from "lucide-react";
import { cn } from "@/lib/utils";
import menuBg from "@assets/woman-2773007_1280_1773877207726.jpg";

// ─── Brand colours ────────────────────────────────────────────────────────────
const TEAL   = "#003648";
const PURPLE = "#76186f";
const GREEN  = "#16a34a";

// ─── Shared sub-item type ─────────────────────────────────────────────────────
type NavItem = { icon: React.ElementType; label: string; desc: string; href?: string };

// ─── Menu data ────────────────────────────────────────────────────────────────
const aboutItems: NavItem[] = [
  { icon: UserCircle,  label: "Who we are",    desc: "Engage Health Group" },
  { icon: Users,       label: "Meet the team", desc: "50 years combined experience", href: "/team" },
  { icon: Quote,       label: "Testimonials",  desc: "What they say about us" },
];

const employeeItems: NavItem[] = [
  { icon: Shield,       label: "Group Health Insurance",          desc: "Create a scheme tailored to your business",           href: "/employee-benefits/group-health-insurance" },
  { icon: Heart,        label: "Group Life Insurance",             desc: "Discover the most competitive deals",                 href: "/employee-benefits/group-life-insurance" },
  { icon: TrendingUp,   label: "Group Income Protection",          desc: "Source the ideal Group Income Protection scheme",     href: "/employee-benefits/group-income-protection" },
  { icon: AlertCircle,  label: "Group Critical Illness",           desc: "Find the best value Critical Illness cover",          href: "/employee-benefits/group-critical-illness" },
  { icon: Smile,        label: "Group Dental Insurance",           desc: "Understand your options for Dental insurance",        href: "/employee-benefits/group-dental-insurance" },
  { icon: Activity,     label: "Corporate Wellness Programmes",    desc: "Plan & launch a Corporate Wellness Programme",        href: "/employee-benefits/corporate-wellness-programmes" },
  { icon: HeartPulse,   label: "Employee Assistance Programmes",   desc: "Find the right EAP for your budget",                  href: "/employee-benefits/employee-assistance-programmes" },
  { icon: DollarSign,   label: "Group Health Cash Plan",           desc: "Understand how Business Health Cash Plans work",      href: "/employee-benefits/group-health-cash-plan" },
  { icon: Key,          label: "Key Person Insurance",             desc: "Fully grasp how Key Person Insurance works",          href: "/employee-benefits/key-person-insurance" },
  { icon: UserCheck,    label: "Relevant Life Insurance",          desc: "Set-up the policy & manage the claims process",       href: "/employee-benefits/relevant-life-insurance" },
  { icon: Stethoscope,  label: "Employee Health Screening",        desc: "Protect the future health & wellbeing of your team",  href: "/employee-benefits/employee-health-screening" },
  { icon: MonitorDot,   label: "Employee Benefits Platforms",      desc: "Find the right benefits platform for your business",  href: "/employee-benefits/employee-benefits-platforms" },
];

const intlItems: NavItem[] = [
  { icon: Globe,        label: "Int Business Health Insurance",         desc: "Set up an International Health Insurance scheme",   href: "/international-benefits/int-business-health-insurance" },
  { icon: Globe2,       label: "International Group Life Insurance",    desc: "Design & launch a bespoke global scheme",           href: "/international-benefits/international-group-life-insurance" },
  { icon: TrendingUp,   label: "International Group Income Protection", desc: "Manage a scheme for your global workforce",         href: "/international-benefits/international-group-income-protection" },
  { icon: AlertCircle,  label: "International Group Critical Illness",  desc: "Design, implement & manage a bespoke policy",      href: "/international-benefits/international-group-critical-illness" },
  { icon: Plane,        label: "Group Business Travel Insurance",       desc: "Understand Business Travel Insurance policies",     href: "/international-benefits/group-business-travel-insurance" },
  { icon: Lock,         label: "Kidnap and Ransom Insurance",           desc: "Safeguard & support your hard-working teams",       href: "/international-benefits/kidnap-and-ransom-insurance" },
  { icon: Clock,        label: "Short-Term Int Health Insurance",       desc: "Source a variety of individually tailored quotes",  href: "/international-benefits/short-term-int-health-insurance" },
  { icon: Users,        label: "Int Employee Assistance Programmes",    desc: "Design, launch & manage a tailored policy",         href: "/international-benefits/int-employee-assistance-programmes" },
  { icon: ShieldAlert,  label: "International Security Services",       desc: "Locate the best International Security Services",   href: "/international-benefits/international-security-services" },
  { icon: MapPin,       label: "Pre-Assignment Screening",              desc: "Learn how to apply Pre-Assignment Screening",       href: "/international-benefits/pre-assignment-screening" },
  { icon: Flag,         label: "US Company Health Insurance",           desc: "Gain a clear picture of how US healthcare works",   href: "/international-benefits/us-company-health-insurance" },
  { icon: Briefcase,    label: "Additional International Products",     desc: "Professional advice and guidance",                  href: "/international-benefits/additional-international-products" },
];

const xcelerateItems: NavItem[] = [
  { icon: Zap, label: "Xcelerate", desc: "Global health insurance for fast-growing businesses", href: "/xcelerate" },
];

const knowledgePosts = [
  { title: "iGaming employees reveal all: employee benefits and beyond", mins: 2 },
  { title: "Peering into the future of healthcare — Highlights from Insurtech Insights 2025", mins: 5 },
  { title: "How employee benefits can tackle workplace productivity", mins: 5 },
  { title: "Navigating healthcare & health insurance in the Isle of Man", mins: 5 },
];

// ─── Shared components ────────────────────────────────────────────────────────
function DropdownItem({ item, color }: { item: NavItem; color: string }) {
  return (
    <Link
      href={item.href ?? "#"}
      className="flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-150 group/item hover:bg-[#003648]"
    >
      <span
        className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-150"
        style={{ background: color + "18" }}
      >
        <item.icon className="w-4 h-4 transition-colors duration-150 group-hover/item:text-white" style={{ color }} />
      </span>
      <p className="text-sm font-semibold text-gray-800 group-hover/item:text-white leading-snug transition-colors duration-150">
        {item.label}
      </p>
    </Link>
  );
}

function MenuHeader({ label, color }: { label: string; color: string }) {
  return (
    <div
      className="px-6 py-3 mb-4 -mx-2 -mt-2 rounded-t-xl text-center"
      style={{ background: color }}
    >
      <span className="text-xs font-bold tracking-[0.18em] uppercase text-white">{label}</span>
    </div>
  );
}

// ─── Shared hover helpers (delay-close so fixed panels don't flicker) ─────────
function useMenuHover(delay = 120) {
  const [open, setOpen] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const enter = () => { clearTimeout(timer.current); setOpen(true); };
  const leave = () => { timer.current = setTimeout(() => setOpen(false), delay); };
  useEffect(() => () => clearTimeout(timer.current), []);

  return { open, enter, leave };
}

// ─── Small dropdown (About / Xcelerate) ──────────────────────────────────────
function SmallDropdown({
  label, color, items, headerLabel,
}: { label: string; color: string; items: NavItem[]; headerLabel: string }) {
  const { open, enter, leave } = useMenuHover();

  return (
    <div className="relative" onMouseEnter={enter} onMouseLeave={leave}>
      <button
        className="flex items-center gap-1 font-medium text-sm text-foreground/80 hover:text-primary transition-colors py-2"
        aria-expanded={open}
      >
        {label}
        <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", open && "rotate-180")} />
      </button>

      <div className={cn(
        "absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 z-50",
        open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-1 pointer-events-none"
      )}
        onMouseEnter={enter}
        onMouseLeave={leave}
      >
        <div className="bg-white rounded-xl shadow-2xl border border-gray-100 w-72 p-2 overflow-hidden">
          {items.map((item) => (
            <DropdownItem key={item.label} item={item} color={color} />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Mega dropdown (Employee Benefits / International) ────────────────────────
function MegaDropdown({
  label, color, items,
}: { label: string; color: string; items: NavItem[]; headerLabel?: string; cols?: number }) {
  const { open, enter, leave } = useMenuHover();
  const half = Math.ceil(items.length / 2);
  const col1 = items.slice(0, half);
  const col2 = items.slice(half);

  return (
    <div className="relative" onMouseEnter={enter} onMouseLeave={leave}>
      <button
        className="flex items-center gap-1 font-medium text-sm text-foreground/80 hover:text-primary transition-colors py-2"
        aria-expanded={open}
      >
        {label}
        <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", open && "rotate-180")} />
      </button>

      <div
        className={cn(
          "fixed left-0 right-0 transition-all duration-200 z-50",
          open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-1 pointer-events-none"
        )}
        style={{ top: "64px" }}
        onMouseEnter={enter}
        onMouseLeave={leave}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden grid grid-cols-[1fr_1fr_280px]">
            {/* Column 1 */}
            <div className="p-4 flex flex-col gap-0.5 border-r border-gray-100">
              {col1.map((item) => <DropdownItem key={item.label} item={item} color={color} />)}
            </div>
            {/* Column 2 */}
            <div className="p-4 flex flex-col gap-0.5 border-r border-gray-100">
              {col2.map((item) => <DropdownItem key={item.label} item={item} color={color} />)}
            </div>
            {/* Info panel */}
            <div
              className="relative flex flex-col justify-end p-6 overflow-hidden"
              style={{ backgroundImage: `url(${menuBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
            >
              {/* dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#003648]/90 via-[#003648]/60 to-[#003648]/30" />
              <div className="relative z-10 flex flex-col gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-1">Get in touch</p>
                  <p className="text-lg font-extrabold text-white leading-snug">Talk to an expert</p>
                  <p className="text-sm text-white/70 mt-1 leading-snug">Free, impartial advice with no obligation.</p>
                </div>
                <div className="flex flex-col gap-2">
                  <a
                    href="tel:01273974419"
                    className="flex items-center gap-2.5 text-sm font-semibold text-white hover:text-white/80 transition-colors"
                  >
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white/15">
                      <Phone className="w-3.5 h-3.5 text-white" />
                    </span>
                    01273 974419
                  </a>
                  <a
                    href="mailto:info@engagehealthgroup.co.uk"
                    className="flex items-center gap-2.5 text-sm font-semibold text-white hover:text-white/80 transition-colors"
                  >
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white/15">
                      <Mail className="w-3.5 h-3.5 text-white" />
                    </span>
                    info@engagehealthgroup.co.uk
                  </a>
                </div>
                <Link
                  href="/get-a-quote"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-white text-[#003648] text-sm font-bold hover:bg-white/90 transition-colors"
                >
                  Get a free quote
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Knowledge Hub dropdown ───────────────────────────────────────────────────
function KnowledgeDropdown() {
  const { open, enter, leave } = useMenuHover();

  const gradients = [
    "linear-gradient(135deg,#76186f,#003648)",
    "linear-gradient(135deg,#003648,#005a78)",
    "linear-gradient(135deg,#5e1258,#76186f)",
    "linear-gradient(135deg,#004f6b,#003648)",
  ];

  return (
    <div className="relative" onMouseEnter={enter} onMouseLeave={leave}>
      <button
        className="flex items-center gap-1 font-medium text-sm text-foreground/80 hover:text-primary transition-colors py-2"
        aria-expanded={open}
      >
        Knowledge Hub
        <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", open && "rotate-180")} />
      </button>

      <div
        className={cn(
          "fixed left-0 right-0 transition-all duration-200 z-50",
          open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-1 pointer-events-none"
        )}
        style={{ top: "64px" }}
        onMouseEnter={enter}
        onMouseLeave={leave}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-2xl border border-gray-100 p-5 overflow-hidden">
            <div className="grid grid-cols-4 gap-4">
              {knowledgePosts.map((post, i) => (
                <a key={i} href="#" className="group/post block">
                  <div
                    className="rounded-lg overflow-hidden aspect-video mb-3 flex items-center justify-center"
                    style={{ background: gradients[i % gradients.length] }}
                  >
                    <BookOpen className="w-8 h-8 text-white/60" />
                  </div>
                  <p className="text-sm font-semibold text-gray-800 group-hover/post:text-[#003648] leading-snug line-clamp-2 transition-colors">
                    {post.title}
                  </p>
                  <div className="flex items-center gap-1 mt-1.5 text-gray-400 text-xs">
                    <Clock className="w-3 h-3" />
                    {post.mins} mins read
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Mobile accordion section ─────────────────────────────────────────────────
function MobileSection({
  label, color, items, defaultOpen = false
}: { label: string; color: string; items: NavItem[]; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-gray-100">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-sm font-semibold text-gray-800"
      >
        {label}
        <ChevronDown className={cn("w-4 h-4 text-gray-400 transition-transform duration-200", open && "rotate-180")} />
      </button>
      {open && (
        <div className="pb-4 pl-2 flex flex-col gap-0.5">
          {items.map((item) => (
            <Link
              key={item.label}
              href={item.href ?? "#"}
              className="flex items-center gap-3 px-2 py-2.5 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <span
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: color + "18" }}
              >
                <item.icon className="w-4 h-4" style={{ color }} />
              </span>
              <span className="text-sm font-medium text-gray-700">{item.label}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Main Navbar ──────────────────────────────────────────────────────────────
export function Navbar() {
  const [isScrolled, setIsScrolled]       = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setMobileMenuOpen(false); }, [location]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
          isScrolled || mobileMenuOpen
            ? "bg-white/97 backdrop-blur-md border-border/50 shadow-sm"
            : "bg-white/97 backdrop-blur-md border-border/30 shadow-sm"
        )}
        style={{ height: "64px", fontFamily: "'Inter', sans-serif" }}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 h-full hidden lg:grid lg:grid-cols-[1fr_auto_1fr] items-center gap-4">
          {/* Logo — left */}
          <Link href="/" className="flex items-center z-50 flex-shrink-0">
            <img src="/logo.png" alt="Engage Health Group" className="h-9 w-auto" />
          </Link>

          {/* Desktop nav — truly centered */}
          <nav className="flex items-center gap-6 xl:gap-8">
            <SmallDropdown
              label="About us"
              headerLabel="About Us"
              color={TEAL}
              items={aboutItems}
            />
            <MegaDropdown
              label="Employee Benefits"
              color={TEAL}
              items={employeeItems}
            />
            <MegaDropdown
              label="International Benefits"
              color={PURPLE}
              items={intlItems}
            />
            <SmallDropdown
              label="Xcelerate"
              headerLabel="Xcelerate"
              color={GREEN}
              items={xcelerateItems}
            />
            <Link href="/knowledge-hub" className="font-medium text-sm text-foreground/80 hover:text-primary transition-colors py-2">
              Knowledge Hub
            </Link>
          </nav>

          {/* CTA group — right */}
          <div className="flex items-center gap-4 justify-end">
            <a
              href="tel:01273974419"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="w-4 h-4" />
              01273 974419
            </a>
            <Link href="/get-a-quote" className="btn-cta px-5 py-2.5 rounded-full text-sm">
              Get a Quote
            </Link>
          </div>
        </div>

        {/* Mobile header row */}
        <div className="w-full px-4 sm:px-6 h-full lg:hidden flex items-center justify-between">
          <Link href="/" className="flex items-center z-50 flex-shrink-0">
            <img src="/logo.png" alt="Engage Health Group" className="h-9 w-auto" />
          </Link>

          {/* Mobile controls */}
          <div className="lg:hidden flex items-center gap-1 z-50">
            <a
              href="tel:01273974419"
              aria-label="Call us"
              className="flex items-center justify-center w-9 h-9 rounded-full text-foreground hover:bg-primary/8 hover:text-primary transition-colors"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              className="flex items-center justify-center w-9 h-9 rounded-full text-foreground hover:bg-primary/8 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen
                ? <X className="w-5 h-5" />
                : (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
                    <line x1="3" y1="6" x2="17" y2="6" />
                    <line x1="6" y1="11" x2="17" y2="11" />
                    <line x1="9" y1="16" x2="17" y2="16" />
                  </svg>
                )
              }
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
        style={{ paddingTop: "64px" }}
      >
        <div className="px-5 pb-10 pt-4 flex flex-col">
          <MobileSection label="About us"              color={TEAL}   items={aboutItems} />
          <MobileSection label="Employee Benefits"     color={TEAL}   items={employeeItems} />
          <MobileSection label="International Benefits" color={PURPLE} items={intlItems} />
          <MobileSection label="Xcelerate"             color={GREEN}  items={xcelerateItems} />

          {/* Knowledge Hub flat links */}
          <div className="border-b border-gray-100">
            <button
              onClick={() => {}}
              className="w-full flex items-center justify-between py-4 text-sm font-semibold text-gray-800"
            >
              Knowledge Hub
            </button>
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <a
              href="tel:01273974419"
              className="flex items-center justify-center gap-2 p-4 rounded-xl bg-muted text-foreground font-medium text-sm"
            >
              <Phone className="w-5 h-5" />
              Call us: 01273 974419
            </a>
            <Link href="/get-a-quote" className="btn-cta w-full text-center px-6 py-4 rounded-xl block text-sm">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
