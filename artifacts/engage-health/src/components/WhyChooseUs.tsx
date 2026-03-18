import { Search, Headset, FileText, Trophy } from "lucide-react";

export function WhyChooseUs() {
  const features = [
    {
      title: "Truly Independent Advice",
      desc: "We are not tied to any insurer. As a whole-of-market broker, we access every available option to find the best fit for your business.",
      icon: Search
    },
    {
      title: "No Fees, Ever",
      desc: "Our consultancy service is completely free to clients. We are remunerated by insurers — you pay nothing extra and have no contractual obligation.",
      icon: FileText
    },
    {
      title: "Dedicated Account Manager",
      desc: "One point of contact who knows your business inside out. Always reachable by phone — no call centres, no ticket queues.",
      icon: Headset
    },
    {
      title: "Award-Winning Expertise",
      desc: "Named Best International Group Advice Firm at the UK Health & Protection Awards in both 2023 and 2024. Over 30 years of combined industry experience.",
      icon: Trophy
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="animate-in slide-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              The Engage Difference
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6 leading-tight">
              Why Businesses Choose <span className="text-primary">Engage Health</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Founded in 2016 by Nick Hale, Engage Health Group has grown into one of the UK's most trusted independent employee benefits consultancies — with specialists drawn from Bupa Global, Aetna, Vitality, and beyond.
            </p>
            {/* Optional Unsplash image as requested if fitting - but keeping it minimal as instructed */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
              {/* office professionals collaborating */}
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000" 
                alt="Engage Health Team" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((feat, i) => (
              <div key={i} className="flex flex-col gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <feat.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-secondary">{feat.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
