import { Heart, Stethoscope, Eye, Activity, Brain, Video, ArrowUpRight } from "lucide-react";

const charities = [
  {
    name: "Rockinghorse Children's Charity",
    mission: "Fundraising for the Royal Alexandra Children's Hospital in Brighton, funding life-saving equipment for sick children across Sussex.",
    gradient: "from-rose-400 to-pink-600",
    initial: "RC",
  },
  {
    name: "The Starr Trust",
    mission: "Helping young people succeed regardless of their circumstances, through life-changing grants and personal encouragement.",
    gradient: "from-amber-400 to-orange-500",
    initial: "ST",
  },
  {
    name: "Sussex Cancer Fund",
    mission: "Working with the NHS to improve life for cancer patients in Sussex, funding specialist equipment, patient services, and research.",
    gradient: "from-violet-500 to-purple-700",
    initial: "SC",
  },
  {
    name: "Grassroots Suicide Prevention",
    mission: "Connecting, educating and training people in self-harm and suicide prevention, with workshops available in-person and online.",
    gradient: "from-teal-500 to-emerald-600",
    initial: "GS",
  },
];

const coverage = [
  { label: "Dental care", icon: Heart },
  { label: "Optical care", icon: Eye },
  { label: "Physiotherapy", icon: Activity },
  { label: "Health screenings", icon: Stethoscope },
  { label: "Private consultations", icon: Stethoscope },
  { label: "Virtual GP", icon: Video },
  { label: "CBT & counselling", icon: Brain },
  { label: "24/7 mental health support", icon: Brain },
];

export function CharityFund() {
  return (
    <section className="py-28 bg-gray-50 overflow-hidden relative">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-rose-100 rounded-full blur-[120px] opacity-50 pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-violet-100 rounded-full blur-[100px] opacity-50 pointer-events-none translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top: badge + headline + quote */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-100 text-rose-600 text-sm font-semibold mb-6 border border-rose-200">
              <Heart className="w-3.5 h-3.5 fill-rose-400" />
              Community &amp; Giving Back
            </div>
            <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-secondary leading-[1.15] mb-6">
              The Engage
              <br />
              <span className="text-primary">Charity Health Fund</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              We use our expertise and insurer relationships to provide <strong className="text-secondary font-semibold">free healthcare benefits</strong> to employees of selected small UK charities, removing financial barriers so they can access the care they deserve.
            </p>
          </div>

          {/* Pull quote */}
          <div className="relative bg-secondary rounded-3xl p-8 md:p-10 overflow-hidden">
            <div className="absolute inset-0 opacity-[0.04]"
              style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
            <div className="absolute top-4 left-6 text-7xl font-black text-white/10 leading-none select-none">"</div>
            <blockquote className="relative text-white/85 text-lg leading-relaxed italic mt-4 mb-6">
              Smaller charities aren't usually able to make employee benefits a priority. Yet these employees are the very people responsible for ensuring the funds exist to help those in society who need support most.
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#76186f] to-violet-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
                NH
              </div>
              <div>
                <div className="text-white font-bold text-sm">Nick Hale</div>
                <div className="text-white/50 text-xs">Founder & Director, Engage Health Group</div>
              </div>
            </div>
          </div>
        </div>

        {/* Coverage tags */}
        <div className="mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Coverage includes</p>
          <div className="flex flex-wrap gap-2.5">
            {coverage.map((c, i) => (
              <span key={i} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-gray-200 text-secondary text-sm font-semibold shadow-sm">
                <c.icon className="w-3.5 h-3.5 text-primary" strokeWidth={2} />
                {c.label}
              </span>
            ))}
          </div>
        </div>

        {/* Charity cards */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Current 2024–25 beneficiaries</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {charities.map((c, i) => (
              <div key={i} className="group bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex gap-5 items-start">
                {/* Initial badge */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white font-extrabold text-sm shrink-0 bg-gradient-to-br shadow-lg ${c.gradient}`}>
                  {c.initial}
                </div>
                <div>
                  <h3 className="text-base font-bold text-secondary mb-1.5 group-hover:text-primary transition-colors duration-200">
                    {c.name}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{c.mission}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learn more link */}
        <div className="mt-10 flex items-center gap-3">
          <a
            href="https://www.engagehealthgroup.co.uk/engage-charity-health-fund/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all duration-200"
          >
            Learn more about the fund
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <span className="text-gray-300">·</span>
          <span className="text-gray-400 text-sm">Free to qualifying charities. Applications open annually.</span>
        </div>

      </div>
    </section>
  );
}
