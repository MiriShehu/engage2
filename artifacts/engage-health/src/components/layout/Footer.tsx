import { Link } from "wouter";
import { Linkedin, Twitter, Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const columns = [
  {
    heading: "Employee Benefits",
    viewAll: "/employee-benefits",
    links: [
      { label: "Group Health Insurance",         href: "/employee-benefits/group-health-insurance" },
      { label: "Group Life Insurance",           href: "/employee-benefits/group-life-insurance" },
      { label: "Group Critical Illness",         href: "/employee-benefits/group-critical-illness" },
      { label: "Group Income Protection",        href: "/employee-benefits/group-income-protection" },
      { label: "Employee Assistance Programmes", href: "/employee-benefits/employee-assistance-programmes" },
    ],
  },
  {
    heading: "International Benefits",
    viewAll: "/international-benefits",
    links: [
      { label: "International Business Health Insurance", href: "/international-benefits/int-business-health-insurance" },
      { label: "International Group Life Insurance",      href: "/international-benefits/international-group-life-insurance" },
      { label: "International Group Critical Illness",    href: "/international-benefits/international-group-critical-illness" },
      { label: "International Group Income Protection",   href: "/international-benefits/international-group-income-protection" },
      { label: "International Employee Assistance Programmes", href: "/international-benefits/int-employee-assistance-programmes" },
    ],
  },
  {
    heading: "Healthcare",
    viewAll: "/employee-benefits",
    links: [
      { label: "Group Health Insurance",         href: "/employee-benefits/group-health-insurance" },
      { label: "Group Life Insurance",           href: "/employee-benefits/group-life-insurance" },
      { label: "Group Critical Illness",         href: "/employee-benefits/group-critical-illness" },
      { label: "Group Income Protection",        href: "/employee-benefits/group-income-protection" },
      { label: "Employee Assistance Programmes", href: "/employee-benefits/employee-assistance-programmes" },
    ],
  },
  {
    heading: "Knowledge Hub",
    viewAll: "/knowledge-hub",
    links: [
      { label: "Marketplace",       href: "/" },
      { label: "Knowledge Hub",     href: "/knowledge-hub" },
      { label: "Mission Statement",  href: "/" },
      { label: "Meet the Team",     href: "/team" },
      { label: "Testimonials",      href: "/" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-[#002230] text-white border-t border-white/10">
      {/* Main link grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Columns 1–4 */}
          {columns.map((col) => (
            <div key={col.heading}>
              <h4 className="text-white text-sm font-bold mb-5">
                {col.heading}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/55 text-sm hover:text-primary transition-colors leading-snug block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li className="pt-1">
                  <Link
                    href={col.viewAll}
                    className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:underline"
                  >
                    View all <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </li>
              </ul>
            </div>
          ))}

          {/* Column 5 — Get in touch */}
          <div>
            <h4 className="text-white text-sm font-bold mb-5">Get in Touch</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:01273974419"
                  className="flex items-start gap-2.5 text-white/55 text-sm hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  01273 974419
                </a>
              </li>
              <li>
                <a
                  href="mailto:enquiries@engagehealthgroup.co.uk"
                  className="flex items-start gap-2.5 text-white/55 text-sm hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  enquiries@engagehealthgroup.co.uk
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-white/55 text-sm">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>1A City Gate, 185 Dyke Road,<br />Hove, BN3 1TL</span>
              </li>
              <li className="flex items-center gap-3 pt-1">
                <a
                  href="https://www.linkedin.com/company/engage-health-group/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com/engagehealthgrp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Brand + legal bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6">
            <Link href="/">
              <img
                src="/logo.png"
                alt="Engage Health Group"
                className="h-7 w-auto brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-white/35 text-xs">
              &copy; {new Date().getFullYear()} Engage Health Group. FCA Authorised No. 812846.
            </p>
          </div>
          <div className="flex flex-wrap gap-5 text-xs text-white/35">
            <Link href="/knowledge-hub" className="hover:text-white/70 transition-colors">Knowledge Hub</Link>
            <Link href="/" className="hover:text-white/70 transition-colors">TOBA</Link>
            <Link href="/" className="hover:text-white/70 transition-colors">Customer Privacy Policy</Link>
            <Link href="/" className="hover:text-white/70 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
