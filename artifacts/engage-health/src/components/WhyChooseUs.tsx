import { Search, Headset, FileText, Trophy } from "lucide-react";

export function WhyChooseUs() {
  const features = [
    {
      title: "Whole of Market Access",
      desc: "We aren't tied to one provider. We compare 15+ leading insurers to find the perfect fit for your exact needs and budget.",
      icon: Search
    },
    {
      title: "Dedicated Account Manager",
      desc: "No call centers. You get one dedicated expert who knows your business inside out and is always a direct phone call away.",
      icon: Headset
    },
    {
      title: "Zero Admin Burden",
      desc: "We handle the mountain of paperwork, onboard your employees, and manage renewals automatically.",
      icon: FileText
    },
    {
      title: "Award-Winning Service",
      desc: "Recognised across the UK industry for our transparent, jargon-free approach to corporate health insurance.",
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
              Navigating employee benefits shouldn't require a PhD. We cut through the jargon, remove the admin headache, and deliver packages your team will actually value.
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
