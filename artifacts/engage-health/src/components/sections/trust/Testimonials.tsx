import React from "react";
import { motion } from "framer-motion";
import { Star, UserRound, ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    quote: "There are a lot of reasons why I value my relationship with Engage Health, but what stands out for me most is how much time they take to understand their client's needs, and deliver results that meet all the criteria. Thank you to the team for always delivering, and the first-class support you provide!",
    name: "Stephanie Knap",
    role: "Senior Manager",
    company: "Couchbase",
    rating: 5,
  },
  {
    quote: "SaltPay has collaborated with Engage on various insurance projects. Their professionalism and knowledge has been extremely helpful in finding the right insurance coverage for our needs. They took the time to understand our situation and made recommendations based on our specific requirements. The entire process was smooth and hassle-free.",
    name: "Stamatios Andreou",
    role: "Procurement Analyst",
    company: "Teya (formerly SaltPay)",
    rating: 5,
  },
  {
    quote: "Working with Engage Health Group has been seamless and we are very pleased with the service, communication and overall experience. The team are very friendly, knowledgeable and helpful and made the process of signing up for group health insurance very easy and simple. Five star service and would definitely recommend.",
    name: "Amber Goldstein",
    role: "Operations Director",
    company: "Creative Rock Stars Agency",
    rating: 5,
  },
  {
    quote: "Dave was an amazing help from day one. He understood perfectly what we were looking for and directed me and my team in the right direction. We were able to find the EAP provider we needed for our overseas offices. He was always an email away and guided me through the process. I will recommend working with him and Engage Health without a doubt.",
    name: "Martina Borni",
    role: "HR & Facilities Officer",
    company: "Medical Aid for Palestinians",
    rating: 5,
  },
  {
    quote: "James has been amazing to work with from start to finish. From the very first phone call he listened to our requirements and worked tirelessly to find the best options for us. The customer service and response turnaround time has been outstanding and certainly made our working day a lot less stressful. We would 100% recommend Engage Health Group.",
    name: "Linda McGlynn",
    role: "Insurance & Customer Management",
    company: "CAE Parc Aviation",
    rating: 5,
  },
  {
    quote: "James at Engage was super helpful with explaining all our potential options, he understood the requirement for ensuring the level of cover was appropriate whilst also balancing financial impact. Throughout the process there was regular and quick communication, keeping us in the loop with any developments. I would have absolutely no hesitation in coming to James and the team again.",
    name: "Rachel Ramsay",
    role: "People & Culture Director",
    company: "BCB Group",
    rating: 5,
  },
  {
    quote: "We have been using Engage for our employee benefits for the past 4 years. We are always impressed by the level of detail of the market review conducted at renewal each year to ensure that we secure the best cover at the lowest premium.",
    name: "Verified Client",
    role: "Client",
    company: "Insurance Firm",
    rating: 5,
  },
  {
    quote: "Engage were great at helping us understand which offerings would support our employees the most. Their quotations were competitive and they provided huge support in making the decision and setting up the scheme. I would definitely recommend them.",
    name: "Verified Client",
    role: "Client",
    company: "Offset Architects",
    rating: 5,
  },
  {
    quote: "Engage were recommended to me and to date, I can see why. Incredibly helpful, they have made the transfer to another PMI easy and stress free.",
    name: "G. Lane",
    role: "Client",
    company: "Engage Health Group",
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

        {/* CTA band */}
        <div className="mt-16 relative overflow-hidden rounded-3xl bg-secondary px-8 md:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
          <div className="relative text-center md:text-left">
            <div className="text-white text-xl md:text-2xl font-extrabold mb-1">Start with a free, no-obligation market review</div>
            <div className="text-white/55 text-sm">We'll assess your current setup and show you what's possible, at zero cost.</div>
          </div>
          <Link
            href="/get-a-quote"
            className="btn-cta relative shrink-0 inline-flex items-center gap-2 px-8 py-4 rounded-xl"
          >
            Get my free review
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
