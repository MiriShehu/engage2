import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, Phone, Shield, Activity, Smile, TrendingUp, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
          isScrolled || mobileMenuOpen
            ? "bg-white/95 backdrop-blur-md border-border/50 shadow-sm py-3"
            : "bg-transparent border-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center z-50">
            <img
              src="/logo.png"
              alt="Engage Health Group"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <div className="relative group">
              <button className="flex items-center gap-1 font-medium text-sm text-foreground/80 hover:text-primary transition-colors py-2">
                Solutions <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white rounded-2xl shadow-xl border border-border p-3 w-64 flex flex-col gap-1 relative before:absolute before:-top-2 before:left-1/2 before:-translate-x-1/2 before:border-8 before:border-transparent before:border-b-white">
                  <Link href="/solutions" className="px-4 py-3 hover:bg-muted rounded-xl transition-colors text-sm font-medium">UK Benefits</Link>
                  <Link href="/solutions" className="px-4 py-3 hover:bg-muted rounded-xl transition-colors text-sm font-medium">International Benefits</Link>
                  <div className="h-px bg-border my-1" />
                  <Link href="/solutions" className="px-4 py-3 bg-primary/5 hover:bg-primary/10 text-primary rounded-xl transition-colors text-sm font-medium flex justify-between items-center">
                    Xcelerate Program <span className="text-[10px] uppercase tracking-wider bg-primary text-white px-2 py-0.5 rounded-full">New</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center gap-1 font-medium text-sm text-foreground/80 hover:text-primary transition-colors py-2">
                Products <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white rounded-2xl shadow-xl border border-border p-6 w-[600px] grid grid-cols-2 gap-x-8 gap-y-6 relative before:absolute before:-top-2 before:left-1/2 before:-translate-x-1/2 before:border-8 before:border-transparent before:border-b-white">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">Core Coverage</h4>
                    <div className="flex flex-col gap-3">
                      <Link href="/products" className="group/item flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover/item:bg-primary group-hover/item:text-white transition-colors"><Shield className="w-4 h-4" /></div>
                        <span className="text-sm font-medium hover:text-primary transition-colors">Health Insurance</span>
                      </Link>
                      <Link href="/products" className="group/item flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover/item:bg-primary group-hover/item:text-white transition-colors"><Heart className="w-4 h-4" /></div>
                        <span className="text-sm font-medium hover:text-primary transition-colors">Life Insurance</span>
                      </Link>
                      <Link href="/products" className="group/item flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover/item:bg-primary group-hover/item:text-white transition-colors"><TrendingUp className="w-4 h-4" /></div>
                        <span className="text-sm font-medium hover:text-primary transition-colors">Income Protection</span>
                      </Link>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">Wellbeing</h4>
                    <div className="flex flex-col gap-3">
                      <Link href="/products" className="group/item flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover/item:bg-primary group-hover/item:text-white transition-colors"><Activity className="w-4 h-4" /></div>
                        <span className="text-sm font-medium hover:text-primary transition-colors">Corporate Wellness</span>
                      </Link>
                      <Link href="/products" className="group/item flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover/item:bg-primary group-hover/item:text-white transition-colors"><Smile className="w-4 h-4" /></div>
                        <span className="text-sm font-medium hover:text-primary transition-colors">Dental Insurance</span>
                      </Link>
                      <Link href="/products" className="text-sm font-medium text-primary hover:underline mt-2 inline-block">
                        View all products &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/solutions" className="font-medium text-sm text-foreground/80 hover:text-primary transition-colors">
              How It Works
            </Link>
            
            <div className="relative group">
              <button className="flex items-center gap-1 font-medium text-sm text-foreground/80 hover:text-primary transition-colors py-2">
                Company <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white rounded-2xl shadow-xl border border-border p-3 w-48 flex flex-col gap-1 relative before:absolute before:-top-2 before:left-1/2 before:-translate-x-1/2 before:border-8 before:border-transparent before:border-b-white">
                  <Link href="/" className="px-4 py-2 hover:bg-muted rounded-xl transition-colors text-sm font-medium">About Us</Link>
                  <Link href="/" className="px-4 py-2 hover:bg-muted rounded-xl transition-colors text-sm font-medium">Testimonials</Link>
                  <Link href="/" className="px-4 py-2 hover:bg-muted rounded-xl transition-colors text-sm font-medium">Contact Support</Link>
                </div>
              </div>
            </div>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:01273974419" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mr-2">
              <Phone className="w-4 h-4" />
              01273 974419
            </a>
            <Link href="/contact" className="px-6 py-2.5 rounded-full font-semibold text-sm bg-primary text-white shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200">
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-foreground z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div 
        className={cn(
          "fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out lg:hidden pt-24 pb-8 px-6 flex flex-col overflow-y-auto",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col gap-6 text-lg font-medium">
          <div className="flex flex-col gap-4 pb-6 border-b border-border">
            <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Solutions</div>
            <Link href="/solutions" className="text-foreground hover:text-primary">UK Benefits</Link>
            <Link href="/solutions" className="text-foreground hover:text-primary">International Benefits</Link>
          </div>
          
          <div className="flex flex-col gap-4 pb-6 border-b border-border">
            <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Products</div>
            <Link href="/products" className="text-foreground hover:text-primary">Health Insurance</Link>
            <Link href="/products" className="text-foreground hover:text-primary">Life Insurance</Link>
            <Link href="/products" className="text-foreground hover:text-primary">Income Protection</Link>
            <Link href="/products" className="text-foreground hover:text-primary">Dental Insurance</Link>
            <Link href="/products" className="text-primary hover:underline text-base">View all products &rarr;</Link>
          </div>

          <Link href="/solutions" className="text-foreground hover:text-primary py-2 border-b border-border">How It Works</Link>
          <Link href="/" className="text-foreground hover:text-primary py-2 border-b border-border">About Company</Link>
          
          <div className="mt-8 flex flex-col gap-4">
            <a href="tel:01273974419" className="flex items-center justify-center gap-2 p-4 rounded-xl bg-muted text-foreground font-medium">
              <Phone className="w-5 h-5" />
              Call us: 01273 974419
            </a>
            <Link href="/contact" className="w-full text-center px-6 py-4 rounded-xl font-bold bg-primary text-white shadow-lg">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
