import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { ProblemSolution } from "@/components/ProblemSolution";
import { ServicesGrid } from "@/components/ServicesGrid";
import { HowItWorks } from "@/components/HowItWorks";
import { AnimatedTeamSection } from "@/components/AnimatedTeamSection";
import { EngageNumbers } from "@/components/EngageNumbers";
import { Testimonials } from "@/components/Testimonials";
import { BenefitsIntro } from "@/components/BenefitsIntro";
import { WhatWeOffer } from "@/components/WhatWeOffer";
import { WhyEngageSection } from "@/components/WhyEngageSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { CharityFund } from "@/components/CharityFund";
import { BlogPosts } from "@/components/BlogPosts";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const BASE = "https://www.engagehealthgroup.co.uk/wp-content/uploads";

const homeTeam = [
  { name: "Nick Hale",       title: "Founder & Director",           image: `${BASE}/2023/01/Nick-Hale-e1674569951192.png` },
  { name: "Ian Abbott",      title: "International Director",        image: `${BASE}/2023/01/IAN-ABBOTT-1-e1675073149526.png` },
  { name: "Mike Hesch",      title: "Employee Benefits Team Lead",   image: `${BASE}/2023/06/Mike-Hesch-Head-Shot-e1723650105906.png` },
  { name: "Charlie Cousins", title: "Director",                      image: `${BASE}/2023/01/charlie-e1674569473213.png` },
  { name: "Stuart Box",      title: "Head of Client Services",       image: `${BASE}/2023/01/Stuart-Box-copy.png` },
  { name: "Jess Wright",     title: "Employee Benefits Consultant",  image: `${BASE}/2023/12/Jess-Wright_.png` },
  { name: "Ed Bryan",        title: "Employee Benefits Consultant",  image: `${BASE}/2023/01/Ed-Bryan-1.png` },
  { name: "Esme Pearson",    title: "Employee Benefits Consultant",  image: `${BASE}/2023/01/Esme-Pearson-1.png` },
  { name: "Stuart Isaac",    title: "Employee Benefits Consultant",  image: `${BASE}/2023/05/stuart-isaac.png` },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <BenefitsIntro />
        <WhatWeOffer />
        <ServicesGrid />
        <WhyEngageSection />
        <ProblemSolution />
        <HowItWorks />
        <AnimatedTeamSection
          title="The experts working for you"
          description="Award-winning specialists drawn from Bupa Global, Aon, Mercer, Vitality and AIG — all dedicated to finding the best outcomes for your business."
          members={homeTeam}
          showLink
          className="bg-[#f8f7fb]"
        />
        <EngageNumbers />
        <WhyChooseUs />
        <Testimonials />
        <CharityFund />
        <BlogPosts />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
