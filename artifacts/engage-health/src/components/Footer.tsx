import { Link } from "wouter";
import { Heart, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#002230] text-white/80 pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 group mb-6 w-fit">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white">
                <Heart className="w-5 h-5 fill-white/20" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                Engage Health<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="text-white/60 max-w-sm mb-8 leading-relaxed">
              The UK's leading independent employee benefits and health insurance brokerage. Making premiums fair and admin invisible.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Links Cols */}
          <div>
            <h4 className="text-white font-bold mb-6">Solutions</h4>
            <ul className="space-y-4">
              <li><Link href="/solutions" className="hover:text-primary transition-colors">UK Benefits</Link></li>
              <li><Link href="/solutions" className="hover:text-primary transition-colors">International Plans</Link></li>
              <li><Link href="/solutions" className="hover:text-primary transition-colors">Xcelerate Program</Link></li>
              <li><Link href="/solutions" className="hover:text-primary transition-colors">For Startups</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Products</h4>
            <ul className="space-y-4">
              <li><Link href="/products" className="hover:text-primary transition-colors">Health Insurance</Link></li>
              <li><Link href="/products" className="hover:text-primary transition-colors">Life Insurance</Link></li>
              <li><Link href="/products" className="hover:text-primary transition-colors">Income Protection</Link></li>
              <li><Link href="/products" className="hover:text-primary transition-colors">Corporate Wellness</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>0800 123 4567</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>hello@engagehealth.co.uk</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>123 Business Park,<br />London, EC1A 1BB</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} Engage Health Group. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
