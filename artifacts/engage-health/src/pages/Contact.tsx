import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-muted/20">
        <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-secondary mb-4">
              Get in touch
            </h1>
            <p className="text-lg text-muted-foreground">
              Our team of expert advisers is here to help. Reach out by phone, email, or use the form to get a free market comparison.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
            <a
              href="tel:01273974419"
              className="group flex flex-col items-start gap-4 p-8 rounded-2xl border border-border bg-white hover:border-primary/30 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-secondary mb-1">Call Us</h4>
                <p className="text-muted-foreground text-sm mb-2">Mon–Fri, 9am until 5pm</p>
                <span className="text-primary font-bold text-lg">01273 974419</span>
              </div>
            </a>

            <a
              href="mailto:enquiries@engagehealthgroup.co.uk"
              className="group flex flex-col items-start gap-4 p-8 rounded-2xl border border-border bg-white hover:border-primary/30 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-secondary mb-1">Email Us</h4>
                <p className="text-muted-foreground text-sm mb-2">We aim to reply within 2 hours</p>
                <span className="text-primary font-bold break-all">enquiries@engagehealthgroup.co.uk</span>
              </div>
            </a>

            <div className="flex flex-col items-start gap-4 p-8 rounded-2xl border border-border bg-white">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-secondary mb-1">Visit Us</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Engage Health Group<br />
                  1A City Gate, 185 Dyke Road<br />
                  Hove, BN3 1TL
                </p>
              </div>
            </div>
          </div>

          {/* Quote CTA banner */}
          <div
            className="rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8"
            style={{ background: "linear-gradient(135deg,#76186f,#003648)" }}
          >
            <div className="text-white">
              <h2 className="text-3xl font-extrabold mb-2">Want a free market review?</h2>
              <p className="text-white/65 max-w-lg">
                Use our quick 3-step form to tell us about your business. We'll benchmark the whole market and come back to you with your best options, completely free of charge.
              </p>
            </div>
            <Link
              href="/get-a-quote"
              className="flex-shrink-0 flex items-center gap-2 bg-white text-secondary font-bold py-4 px-8 rounded-xl hover:bg-white/90 transition-all shadow-lg whitespace-nowrap"
            >
              Get a free quote <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
