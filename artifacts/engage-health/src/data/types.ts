import type { LucideIcon } from 'lucide-react';

export type ServiceListSection = {
  type: 'service-list'
  label: string
  title: string
  intro: string
  items: string[]
  testimonial?: string
}

export type IntroSection = {
  type: 'intro'
  label: string
  title: string
  paragraphs: string[]
}

export type CoverageSection = {
  type: 'coverage'
  label: string
  title: string
  intro: string
  items: string[]
  addOns?: string[]
}

export type WhyBuySection = {
  type: 'why-buy'
  label: string
  title: string
  intro: string
  employerBenefits: string[]
  employeeBenefits: string[]
}

export type TextBlockSection = {
  type: 'text-block'
  label: string
  title: string
  paragraphs: string[]
  items?: string[]
  footerParagraphs?: string[]
}

export type FaqsSection = {
  type: 'faqs'
  items: { q: string; a: string }[]
}

export type TestimonialSection = {
  type: 'testimonial'
  quote: string
  author: string
}

export type InsurersSection = {
  type: 'insurers'
  label: string
  title: string
  intro: string
  items: { name: string; logo: string; quote: string }[]
}

export type PricingSection = {
  type: 'pricing'
  label: string
  title: string
  intro: string
  rows: { staffCount: string; details: string[] }[]
}

export type ServiceSection =
  | ServiceListSection
  | IntroSection
  | CoverageSection
  | WhyBuySection
  | TextBlockSection
  | FaqsSection
  | TestimonialSection
  | InsurersSection
  | PricingSection

export type ServiceStat = {
  icon: LucideIcon
  val: string
  label: string
}

export type ServiceEntry = {
  slug: string
  title: string
  titleAccent?: string
  tagline: string
  subtitle: string
  heroImage?: string
  heroImagePosition?: string
  icon: LucideIcon
  colorScheme: 'purple' | 'teal'
  stats: ServiceStat[]
  sections: ServiceSection[]
  sidebarTestimonial: {
    quote: string
    author: string
  }
}
