import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-muted/20">
        <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div className="pt-8 animate-in slide-in-up">
              <h1 className="text-4xl md:text-5xl font-extrabold text-secondary mb-6">
                Let's Build Your <br/><span className="text-primary">Perfect Package</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-12">
                Fill out the form to get a free, no-obligation market comparison. Or reach out to us directly using the details below.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-border flex items-center justify-center shrink-0 shadow-sm text-primary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-foreground">Call Us</h4>
                    <p className="text-muted-foreground mb-1">Mon-Fri, 9am until 5pm</p>
                    <a href="tel:01273974419" className="text-primary font-bold text-lg hover:underline">01273 974419</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-border flex items-center justify-center shrink-0 shadow-sm text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-foreground">Email Us</h4>
                    <p className="text-muted-foreground mb-1">We aim to reply within 2 hours</p>
                    <a href="mailto:enquiries@engagehealthgroup.co.uk" className="text-primary font-bold hover:underline">enquiries@engagehealthgroup.co.uk</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-border flex items-center justify-center shrink-0 shadow-sm text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-foreground">Visit Us</h4>
                    <p className="text-muted-foreground">
                      Engage Health Group<br />
                      1A City Gate, 185 Dyke Road<br />
                      Hove, BN3 1TL
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote Form */}
            <div className="animate-in slide-in-up delay-200">
              <QuoteForm />
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
