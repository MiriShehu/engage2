import { PageLayout } from "@/components/layout";
import { Hero } from "@/components/sections/hero";
import { TrustBar, ClientLogos, EngageNumbers, Testimonials } from "@/components/sections/trust";
import { ServicesGrid } from "@/components/sections/services";
import { AnimatedTeamSection } from "@/components/sections/team";
import { BenefitsIntro, ProblemSolution, WhyEngageSection, BlogPosts } from "@/components/sections/shared";
import { WhatWeOffer } from "@/components/sections/services";

const BASE = "https://www.engagehealthgroup.co.uk/wp-content/uploads";

const homeTeam = [
  { name: "Ian Abbott",      title: "International Director",        image: `${BASE}/2023/01/IAN-ABBOTT-1-e1675073149526.png` },
  { name: "Mike Hesch",      title: "Employee Benefits Team Lead",   image: `${BASE}/2023/06/Mike-Hesch-Head-Shot-e1723650105906.png` },
  { name: "Charlie Cousins", title: "Director",                      image: `${BASE}/2023/01/charlie-e1674569473213.png` },
  { name: "Stuart Box",      title: "Head of Client Services",       image: `${BASE}/2023/01/Stuart-Box-copy.png` },
  { name: "Nick Hale",       title: "Founder & Director",           image: `${BASE}/2023/01/Nick-Hale-e1674569951192.png` },
  { name: "Jess Wright",     title: "Employee Benefits Consultant",  image: `${BASE}/2023/12/Jess-Wright_.png` },
  { name: "Ed Bryan",        title: "Employee Benefits Consultant",  image: `${BASE}/2023/01/Ed-Bryan-1.png` },
  { name: "Esme Pearson",    title: "Employee Benefits Consultant",  image: `${BASE}/2023/01/Esme-Pearson-1.png` },
  { name: "Stuart Isaac",    title: "Employee Benefits Consultant",  image: `${BASE}/2023/05/stuart-isaac.png` },
];

export default function Home() {
  return (
    <PageLayout>
      <Hero />
      <TrustBar />
      <BenefitsIntro />
      <WhatWeOffer />
      <ServicesGrid />
      <WhyEngageSection />
      <ProblemSolution />
      <AnimatedTeamSection
        title="The experts working for you"
        description="Award-winning specialists drawn from Bupa Global, Aon, Mercer, Vitality and AIG, all dedicated to finding the best outcomes for your business."
        members={homeTeam}
        showLink
        className="bg-[#f8f7fb]"
      />
      <ClientLogos />
      <EngageNumbers />
      <Testimonials />
      <BlogPosts />
    </PageLayout>
  );
}
