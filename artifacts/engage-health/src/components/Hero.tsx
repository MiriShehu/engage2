import { Link } from "wouter";
import { ArrowRight, Check, Activity, Shield, Users } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-background">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col gap-8 max-w-2xl animate-in slide-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold w-fit border border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Best International Group Advice Firm — UK Health &amp; Protection Awards 2024
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-secondary leading-[1.15]">
              Source outstanding employee benefits in the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">UK and around the world</span>
            </h1>
            
            <ul className="flex flex-col gap-3 pt-2">
              {[
                "FREE policy reviews",
                "Personalised quotes",
                "Expert advice",
                "Ongoing administrative support",
                "Multi-country expertise",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-base sm:text-lg text-foreground font-medium">
                  <span className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/contact" className="btn-cta inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl">
                Get UK support &raquo;
              </Link>
              <Link href="/solutions" className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-secondary bg-white border-2 border-secondary/20 shadow-lg hover:bg-secondary hover:text-white hover:-translate-y-1 transition-all duration-300">
                Get global support &raquo;
              </Link>
            </div>
          </div>

          {/* Abstract Dashboard Illustration */}
          <div className="relative w-full aspect-square max-w-[550px] mx-auto lg:ml-auto animate-in slide-in-up delay-200 hidden md:block">
            {/* Base Card */}
            <div className="absolute inset-8 bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_20px_50px_rgb(0,0,0,0.1)] rounded-[2rem] transform rotate-[-3deg] hover:rotate-0 transition-transform duration-700 ease-out flex flex-col p-6 gap-6">
              
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex gap-3 items-center">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-purple-800 flex items-center justify-center shadow-lg text-white">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary">Premium Cover</h3>
                    <p className="text-xs text-muted-foreground">Active for 45 Employees</p>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold border border-green-200">
                  Active
                </div>
              </div>

              {/* Chart Mockup */}
              <div className="flex-1 bg-muted/50 rounded-2xl border border-border/50 p-4 flex flex-col justify-end gap-2 relative overflow-hidden">
                <div className="flex justify-between items-end h-24 gap-2">
                  {[40, 65, 45, 80, 55, 90, 75].map((h, i) => (
                    <div key={i} className="w-full bg-primary/20 rounded-t-sm relative group cursor-pointer transition-all duration-300 hover:bg-primary" style={{ height: `${h}%` }}>
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-secondary text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        {h}%
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-xs font-semibold text-center text-muted-foreground mt-2">Team Engagement Score</div>
              </div>

              {/* Bottom rows */}
              <div className="flex gap-4">
                <div className="flex-1 bg-white rounded-xl p-3 shadow-sm border border-border flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Health Cash</div>
                    <div className="font-bold text-sm text-secondary">£1,500 pool</div>
                  </div>
                </div>
                <div className="flex-1 bg-white rounded-xl p-3 shadow-sm border border-border flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Retention</div>
                    <div className="font-bold text-sm text-secondary">+24% YoY</div>
                  </div>
                </div>
              </div>

            </div>

            {/* Floating Elements */}
            <div className="absolute top-1/4 -right-6 glass-panel rounded-2xl p-4 flex items-center gap-4 animate-[bounce_4s_ease-in-out_infinite]">
               <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 border border-green-200">
                 <Check className="w-5 h-5" />
               </div>
               <div>
                 <div className="text-xs font-bold text-muted-foreground uppercase">Claim Approved</div>
                 <div className="text-sm font-bold text-secondary">Within 24 Hours</div>
               </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
