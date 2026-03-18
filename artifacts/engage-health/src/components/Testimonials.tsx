import { Star, Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      quote: "Engage Health managed our international health insurance across multiple countries seamlessly. They understood the complexities of our globally mobile workforce and delivered quickly.",
      name: "Client Team",
      role: "People Operations",
      company: "Remote"
    },
    {
      quote: "A genuinely professional team who took the time to understand our complex requirements. Quick turnaround and great value — exactly what we needed as a growing company.",
      name: "Client Team",
      role: "HR Director",
      company: "SaltPay"
    },
    {
      quote: "Engage Health handled everything from policy design to employee communications. Their ongoing support means we never have to worry about renewals or claims.",
      name: "Client Team",
      role: "Operations Manager",
      company: "CAE Parc Aviation"
    }
  ];

  return (
    <section className="py-24 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by companies across the UK and internationally — from startups to large corporates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-lg border border-border/50 relative">
              <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10 rotate-180" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-foreground text-lg mb-8 relative z-10 font-medium leading-relaxed">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4 border-t border-border pt-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-secondary">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}, {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
