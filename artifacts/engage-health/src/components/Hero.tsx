import { Link } from "wouter";
import { ArrowRight, Check, Shield, Trophy } from "lucide-react";
import teamPhoto from "@assets/Image-2_(1)_1773870230383.png";

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
              <Link href="/contact" className="btn-cta inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl group">
                Get UK support <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/solutions" className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-secondary bg-white border-2 border-secondary/20 shadow-lg hover:bg-secondary hover:text-white hover:-translate-y-1 transition-all duration-300">
                Get global support <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* People image */}
          <div className="relative hidden md:flex items-end justify-center lg:justify-end h-full">
            <img
              src={teamPhoto}
              alt="Engage Health Group consultants"
              className="relative z-10 w-full max-w-[520px] object-contain object-bottom drop-shadow-2xl"
              style={{ maxHeight: "580px" }}
            />

            {/* Floating: Award */}
            <div className="absolute bottom-24 left-0 glass-panel rounded-2xl px-5 py-4 flex items-center gap-4 shadow-xl animate-[bounce_4s_ease-in-out_infinite] z-20">
              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 border border-yellow-200 shrink-0">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Award-Winning Firm</div>
                <div className="text-sm font-bold text-secondary">Best in UK & Global 2024</div>
              </div>
            </div>

            {/* Floating: Free review */}
            <div className="absolute top-12 right-0 lg:-right-4 glass-panel rounded-2xl px-5 py-4 flex items-center gap-4 shadow-xl z-20">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-purple-800 flex items-center justify-center shrink-0">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Free Policy Review</div>
                <div className="text-sm font-bold text-secondary">No obligation</div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
