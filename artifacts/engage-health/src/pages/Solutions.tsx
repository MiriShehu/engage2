import { PageLayout } from "@/components/layout";
import { TrustBar, WhyChooseUs } from "@/components/sections/trust";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Solutions() {
  return (
    <PageLayout>
      {/* Page Header */}
      <div className="pt-40 pb-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-in slide-in-up">
          <h1 className="text-4xl md:text-5xl font-extrabold text-secondary mb-6">
            Tailored Solutions for Your Business
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you're a startup looking to attract talent or an enterprise wanting to consolidate plans, we build the perfect framework.
          </p>
        </div>
      </div>

      <TrustBar />

      {/* Feature blocks */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <div className="bg-primary/5 rounded-[2rem] p-10 border border-primary/10 h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-secondary mb-4">UK Benefits Program</h3>
              <p className="text-muted-foreground mb-6">
                Comprehensive coverage designed specifically for UK-based teams, navigating NHS wait times and delivering true value to employees.
              </p>
              <ul className="space-y-3 mb-8">
                {['Private Medical Insurance', 'Group Life Cover', 'Dental & Optical Cash Plans', 'Mental Health Support'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="font-medium text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="flex items-center gap-2 text-primary font-bold hover:underline w-fit">
                Learn more <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            
            <div className="bg-secondary/5 rounded-[2rem] p-10 border border-secondary/10 h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-secondary mb-4">International Plans</h3>
              <p className="text-muted-foreground mb-6">
                Seamless coverage for your globally distributed team. One unified policy, compliant across multiple jurisdictions.
              </p>
              <ul className="space-y-3 mb-8">
                {['Global Network Access', 'Evacuation & Repatriation', 'Multi-currency Handling', '24/7 International Support'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary" />
                    <span className="font-medium text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="flex items-center gap-2 text-secondary font-bold hover:underline w-fit">
                Learn more <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs />
    </PageLayout>
  );
}
