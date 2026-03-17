import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServicesGrid } from "@/components/ServicesGrid";
import { Testimonials } from "@/components/Testimonials";
import { CTASection } from "@/components/CTASection";

export default function Products() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="pt-40 pb-10 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-in slide-in-up">
            <h1 className="text-4xl md:text-5xl font-extrabold text-secondary mb-6">
              Our Product Portfolio
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We operate across the entire market, giving you impartial access to every major UK insurer and policy type.
            </p>
          </div>
        </div>

        <ServicesGrid />
        
        {/* Additional Stats */}
        <section className="py-20 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-black mb-2">15+</div>
                <div className="text-white/80 font-medium">Insurers Compared</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-black mb-2">20%</div>
                <div className="text-white/80 font-medium">Average Savings</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-black mb-2">48h</div>
                <div className="text-white/80 font-medium">Quote Turnaround</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-black mb-2">5★</div>
                <div className="text-white/80 font-medium">Client Rating</div>
              </div>
            </div>
          </div>
        </section>

        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
