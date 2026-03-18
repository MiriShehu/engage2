import { Heart, Shield, TrendingUp, Smile, Activity, Headphones, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export function ServicesGrid() {
  const services = [
    {
      title: "Group Health Insurance",
      description: "Private Medical Insurance (PMI) tailored to your company size, sector, and demographics. Fast-track access to treatment, bypassing NHS waiting lists.",
      icon: Heart,
      color: "text-rose-500",
      bg: "bg-rose-100",
    },
    {
      title: "Group Life Insurance",
      description: "Death in Service benefit providing a tax-free lump sum to employees' families. A valued, cost-effective benefit for businesses of all sizes.",
      icon: Shield,
      color: "text-blue-500",
      bg: "bg-blue-100",
    },
    {
      title: "Income Protection",
      description: "Replaces a portion of an employee's income if they're unable to work through illness or injury — protecting your people when it matters most.",
      icon: TrendingUp,
      color: "text-emerald-500",
      bg: "bg-emerald-100",
    },
    {
      title: "Health Cash Plans",
      description: "Cover everyday healthcare costs — dental, optical, physiotherapy and more. An affordable way to boost your benefits package for every employee.",
      icon: Smile,
      color: "text-amber-500",
      bg: "bg-amber-100",
    },
    {
      title: "Corporate Wellness",
      description: "Gym memberships, health screenings, stress management and wellness apps. Proactive programmes that keep your workforce healthy and productive.",
      icon: Activity,
      color: "text-purple-500",
      bg: "bg-purple-100",
    },
    {
      title: "Employee Assistance Programme",
      description: "Confidential 24/7 support for mental health, financial, and legal issues — demonstrating genuine care for your employees' wellbeing.",
      icon: Headphones,
      color: "text-indigo-500",
      bg: "bg-indigo-100",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-muted/50 to-transparent -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl animate-in slide-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Everything Your Team Needs
            </h2>
            <p className="text-lg text-muted-foreground">
              Mix and match from the entire market to build a benefits package that fits your exact company culture and budget.
            </p>
          </div>
          <Link href="/products" className="group inline-flex items-center gap-2 font-bold text-primary hover:text-primary/80 transition-colors whitespace-nowrap">
            Explore all products <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link key={index} href="/products" className="group block h-full">
                <div className={`h-full bg-white rounded-2xl p-8 border border-border shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 transform group-hover:-translate-y-1`}>
                  <div className={`w-14 h-14 rounded-xl ${service.bg} ${service.color} flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
