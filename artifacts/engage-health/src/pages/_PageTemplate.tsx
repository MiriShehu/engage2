/**
 * _PageTemplate.tsx
 *
 * Developer reference — copy this file and rename it to create a new page.
 *
 * Steps to add a new page:
 *   1. Copy this file to `pages/MyNewPage.tsx`
 *   2. Import the sections you need from the section library below
 *   3. Add a route in `App.tsx`:  <Route path="/my-new-page" component={MyNewPage} />
 *   4. Done — PageLayout handles Navbar, Footer, and CTASection automatically
 *
 * Section library reference:
 *   @/components/sections/hero    — Hero
 *   @/components/sections/trust   — TrustBar, ClientLogos, WhyChooseUs, EngageNumbers, Testimonials
 *   @/components/sections/services — ServicesGrid, WhatWeOffer, HowItWorks
 *   @/components/sections/team    — AnimatedTeamSection, OurExperts
 *   @/components/sections/cta     — CTASection
 *   @/components/sections/shared  — BlogPosts, CharityFund, ProblemSolution, QuoteForm, BenefitsIntro, WhyEngageSection, Sparkles
 *   @/components/layout           — Navbar, Footer, PageLayout
 */

import { PageLayout } from "@/components/layout";
import { TrustBar } from "@/components/sections/trust";

export default function MyNewPage() {
  return (
    <PageLayout>
      {/* Page header */}
      <div className="pt-32 pb-10 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-secondary mb-4">
            Page Title
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Brief description of this page.
          </p>
        </div>
      </div>

      <TrustBar />

      {/* Main content */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p>Your content goes here.</p>
        </div>
      </div>
    </PageLayout>
  );
}
