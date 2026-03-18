import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import {
  Menu, X, ChevronDown, Phone,
  Globe, Shield, Users, Heart, Activity, Smile, TrendingUp,
  Building2, Star, AlertCircle, Plane, Lock, MapPin, Flag,
  Zap, BookOpen, Clock, UserCircle, Quote, Briefcase, Key,
  Stethoscope, MonitorDot, DollarSign, ShieldCheck, HeartPulse,
  Globe2, Siren, ShieldAlert, UserCheck
} from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Brand colours ────────────────────────────────────────────────────────────
const TEAL   = "#003648";
const PURPLE = "#76186f";
const GREEN  = "#16a34a";

// ─── Shared sub-item type ─────────────────────────────────────────────────────
type NavItem = { icon: React.ElementType; label: string; desc: string; href?: string };

// ─── Menu data ────────────────────────────────────────────────────────────────
const aboutItems: NavItem[] = [
  { icon: UserCircle,  label: "Who we are",    desc: "Engage Health Group" },
  { icon: Users,       label: "Meet the team", desc: "50 years combined experience" },
  { icon: Quote,       label: "Testimonials",  desc: "What they say about us" },
];

const employeeItems: NavItem[] = [
  { icon: Shield,       label: "Group Health Insurance",          desc: "Create a scheme tailored to your business" },
  { icon: Heart,        label: "Group Life Insurance",             desc: "Discover the most competitive deals" },
  { icon: TrendingUp,   label: "Group Income Protection",          desc: "Source the ideal Group Income Protection scheme" },
  { icon: AlertCircle,  label: "Group Critical Illness",           desc: "Find the best value Critical Illness cover" },
  { icon: Smile,        label: "Group Dental Insurance",           desc: "Understand your options for Dental insurance" },
  { icon: Activity,     label: "Corporate Wellness Programmes",    desc: "Plan & launch a Corporate Wellness Programme" },
  { icon: HeartPulse,   label: "Employee Assistance Programmes",   desc: "Find the right EAP for your budget" },
  { icon: DollarSign,   label: "Group Health Cash Plan",           desc: "Understand how Business Health Cash Plans work" },
  { icon: Key,          label: "Key Person Insurance",             desc: "Fully grasp how Key Person Insurance works" },
  { icon: UserCheck,    label: "Relevant Life Insurance",          desc: "Set-up the policy & manage the claims process" },
  { icon: Stethoscope,  label: "Employee Health Screening",        desc: "Protect the future health & wellbeing of your team" },
  { icon: MonitorDot,   label: "Employee Benefits Platforms",      desc: "Protect the future health & wellbeing of your team" },
];

const intlItems: NavItem[] = [
  { icon: Globe,        label: "Int Business Health Insurance",         desc: "Set up an International Health Insurance scheme" },
  { icon: Globe2,       label: "International Group Life Insurance",    desc: "Design & launch a bespoke global scheme" },
  { icon: TrendingUp,   label: "International Group Income Protection", desc: "Manage a scheme for your global workforce" },
  { icon: AlertCircle,  label: "International Group Critical Illness",  desc: "Design, implement & manage a bespoke policy" },
  { icon: Plane,        label: "Group Business Travel Insurance",       desc: "Understand Business Travel Insurance policies" },
  { icon: Lock,         label: "Kidnap and Ransom Insurance",           desc: "Safeguard & support your hard-working teams" },
  { icon: Clock,        label: "Short-Term Int Health Insurance",       desc: "Source a variety of individually tailored quotes" },
  { icon: Users,        label: "Int Employee Assistance Programmes",    desc: "Design, launch & manage a tailored policy" },
  { icon: ShieldAlert,  label: "International Security Services",       desc: "Locate the best International Security Services" },
  { icon: MapPin,       label: "Pre-Assignment Screening",              desc: "Learn how to apply Pre-Assignment Screening" },
  { icon: Flag,         label: "US Company Health Insurance",           desc: "Gain a clear picture of how US healthcare works" },
  { icon: Briefcase,    label: "Additional International Products",     desc: "Professional advice and guidance" },
];

const xcelerateItems: NavItem[] = [
  { icon: Zap, label: "Xcelerate", desc: "Global health insurance for fast-growing businesses" },
];

const knowledgePosts = [
  { title: "iGaming employees reveal all: employee benefits and beyond", mins: 2 },
  { title: "Peering into the future of healthcare — Highlights from Insurtech Insights 2025", mins: 5 },
  { title: "How employee benefits can tackle workplace productivity", mins: 5 },
  { title: "Navigating healthcare & health insurance in the Isle of Man", mins: 5 },
];

// ─── Shared components ────────────────────────────────────────────────────────
function ItemIcon({ icon: Icon, color }: { icon: React.ElementType; color: string }) {
  return (
    <span
      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
      style={{ background: color + "18" }}
    >
      <Icon className="w-4 h-4" style={{ color }} />
    </span>
  );
}

function DropdownItem({ item, color }: { item: NavItem; color: string }) {
  return (
    <a
      href={item.href ?? "#"}
      className="flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 transition-colors group/item"
    >
      <ItemIcon icon={item.icon} color={color} />
      <div className="min-w-0">
        <p className="text-sm font-semibold text-gray-800 group-hover/item:text-[#003648] leading-snug">
          {item.label}
        </p>
        <p className="text-xs text-gray-400 leading-snug mt-0.5 truncate">{item.desc}</p>
      </div>
    </a>
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
  const timer = useRef<ReturnType<typeof setTimeout>>();

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
          <MenuHeader label={headerLabel} color={color} />
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
  label, color, items, headerLabel, cols = 3,
}: { label: string; color: string; items: NavItem[]; headerLabel: string; cols?: number }) {
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

      {/* Mega panel — fixed so it breaks out of header; panel also carries enter/leave handlers */}
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
            <MenuHeader label={headerLabel} color={color} />
            <div className={cn("grid gap-1", cols === 3 ? "grid-cols-3" : "grid-cols-2")}>
              {items.map((item) => (
                <DropdownItem key={item.label} item={item} color={color} />
              ))}
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
            <MenuHeader label="Knowledge Hub" color={TEAL} />
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
            <a
              key={item.label}
              href={item.href ?? "#"}
              className="flex items-center gap-3 px-2 py-2.5 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <ItemIcon icon={item.icon} color={color} />
              <span className="text-sm font-medium text-gray-700">{item.label}</span>
            </a>
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
        style={{ height: "64px" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center z-50 flex-shrink-0">
            <img src="/logo.png" alt="Engage Health Group" className="h-9 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <SmallDropdown
              label="About us"
              headerLabel="About Us"
              color={TEAL}
              items={aboutItems}
            />
            <MegaDropdown
              label="Employee Benefits"
              headerLabel="Employee Benefits"
              color={TEAL}
              items={employeeItems}
              cols={3}
            />
            <MegaDropdown
              label="International Benefits"
              headerLabel="International Benefits"
              color={PURPLE}
              items={intlItems}
              cols={3}
            />
            <SmallDropdown
              label="Xcelerate"
              headerLabel="Xcelerate"
              color={GREEN}
              items={xcelerateItems}
            />
            <KnowledgeDropdown />
          </nav>

          {/* CTA group */}
          <div className="hidden lg:flex items-center gap-4">
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

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-foreground z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
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
