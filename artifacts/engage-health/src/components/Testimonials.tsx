import React from "react";
import { motion } from "framer-motion";
import { Star, UserRound } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    quote: "Engage found us a better PMI policy at a lower premium in under a week. Their whole-of-market access is the real deal — no fluff, just results.",
    name: "Sarah Thornton",
    role: "HR Director",
    company: "Tessian",
    rating: 5,
  },
  {
    quote: "Managing global health insurance for 300 employees across 12 countries was a nightmare before Engage. Now it's handled. Ian's team is exceptional.",
    name: "Marcus Webb",
    role: "Head of People",
    company: "Phoebe AI",
    rating: 5,
  },
  {
    quote: "They took over our renewal at short notice and negotiated a 14% saving. Our dedicated account manager knows our business inside out.",
    name: "Claire Osei",
    role: "Operations Manager",
    company: "CAE Parc Aviation",
    rating: 5,
  },
  {
    quote: "The fact that there's zero cost to us and no lock-in was hard to believe at first. Now we've been a client for four years and the value is undeniable.",
    name: "James Ridley",
    role: "CFO",
    company: "Zink Commerce",
    rating: 5,
  },
  {
    quote: "Our team had complex pre-existing conditions. Engage navigated the underwriting process with total professionalism and got everyone covered.",
    name: "Layla Mirza",
    role: "People Operations Lead",
    company: "Remote",
    rating: 5,
  },
  {
    quote: "From EAP to group life, Engage structured a complete benefits package that genuinely improved our staff retention. The team's expertise is world-class.",
    name: "Emily Carr",
    role: "HR Manager",
    company: "Brandwatch",
    rating: 5,
  },
  {
    quote: "Switching to Engage from our previous broker was the best HR decision we made. They handle claims, new joiners, and renewals seamlessly.",
    name: "Tom Fairfax",
    role: "CEO",
    company: "SaltPay",
    rating: 5,
  },
  {
    quote: "As a fast-scaling startup, we needed speed and expertise. Engage delivered our first group health scheme in days, not weeks.",
    name: "Priya Nandakumar",
    role: "Talent & Culture Director",
    company: "Codat",
    rating: 5,
  },
  {
    quote: "Their employee communications pack made rollout effortless. Staff actually understood and appreciated their benefits for the first time.",
    name: "David Mercer",
    role: "HR Business Partner",
    company: "Gymshark",
    rating: 5,
  },
];

const col1 = testimonials.slice(0, 3);
const col2 = testimonials.slice(3, 6);
const col3 = testimonials.slice(6, 9);

function TestimonialCard({ t, dupIndex, cardIndex }: { t: Testimonial; dupIndex: number; cardIndex: number }) {
  return (
    <motion.li
      key={`${dupIndex}-${cardIndex}`}
      aria-hidden={dupIndex === 1 ? "true" : "false"}
      whileHover={{
        scale: 1.03,
        y: -6,
        transition: { type: "spring", stiffness: 400, damping: 18 },
      }}
      className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-default select-none"
    >
      {/* Stars */}
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="m-0 p-0">
        <p className="text-gray-600 text-sm leading-relaxed">"{t.quote}"</p>

        <footer className="flex items-center gap-3 mt-5 pt-5 border-t border-gray-100">
          <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: "#003648" }}>
            <UserRound className="w-5 h-5 text-white" />
          </div>
          <div>
            <cite className="not-italic font-semibold text-[#003648] text-sm leading-tight block">
              {t.name}
            </cite>
            <span className="text-xs text-gray-400 mt-0.5 block">
              {t.role}, {t.company}
            </span>
          </div>
        </footer>
      </blockquote>
    </motion.li>
  );
}

function ScrollColumn({ items, duration, className }: { items: Testimonial[]; duration: number; className?: string }) {
  return (
    <div className={`overflow-hidden ${className ?? ""}`}>
      <motion.ul
        animate={{ translateY: "-50%" }}
        transition={{ duration, repeat: Infinity, ease: "linear", repeatType: "loop" }}
        className="flex flex-col gap-5 pb-5 list-none m-0 p-0"
      >
        {[0, 1].map((dupIdx) => (
          <React.Fragment key={dupIdx}>
            {items.map((t, i) => (
              <TestimonialCard key={`${dupIdx}-${i}`} t={t} dupIndex={dupIdx} cardIndex={i} />
            ))}
          </React.Fragment>
        ))}
      </motion.ul>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-24 bg-[#f8f7fb] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-5 border border-primary/15">
            Client stories
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-secondary mb-4 leading-tight">
            What our clients say
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            Trusted by HR teams, CFOs and People leaders across the UK and beyond.
          </p>
        </motion.div>

        {/* Scrolling columns */}
        <div
          className="flex gap-5 justify-center [mask-image:linear-gradient(to_bottom,transparent,black_8%,black_92%,transparent)] max-h-[680px]"
          aria-label="Scrolling client testimonials"
        >
          <ScrollColumn items={col1} duration={22} />
          <ScrollColumn items={col2} duration={28} className="hidden md:block" />
          <ScrollColumn items={col3} duration={25} className="hidden lg:block" />
        </div>

      </div>
    </section>
  );
}
