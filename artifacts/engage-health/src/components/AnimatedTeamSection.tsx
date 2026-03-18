import * as React from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

interface TeamMember {
  name: string;
  title: string;
  image: string;
}

interface AnimatedTeamSectionProps {
  title?: string;
  description?: string;
  members: TeamMember[];
  className?: string;
  showLink?: boolean;
}

const CARD_BG = [
  "linear-gradient(160deg, #003648 0%, #005a78 100%)",
  "linear-gradient(160deg, #76186f 0%, #9b2594 100%)",
  "linear-gradient(160deg, #004f6b 0%, #003648 100%)",
  "linear-gradient(160deg, #5e1258 0%, #76186f 100%)",
  "linear-gradient(160deg, #003648 0%, #005a78 100%)",
  "linear-gradient(160deg, #76186f 0%, #9b2594 100%)",
  "linear-gradient(160deg, #004f6b 0%, #003648 100%)",
  "linear-gradient(160deg, #5e1258 0%, #76186f 100%)",
  "linear-gradient(160deg, #003648 0%, #005a78 100%)",
];

const getCardState = (index: number, total: number) => {
  const center = (total - 1) / 2;
  const dist = index - center;
  const spread = Math.min(140, Math.round(950 / total));
  return {
    x: dist * spread,
    y: Math.abs(dist) * -22,
    rotate: dist * 8,
  };
};

export function AnimatedTeamSection({
  title,
  description,
  members,
  className,
  showLink = false,
}: AnimatedTeamSectionProps) {
  const controls = useAnimation();
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredIdx, setHoveredIdx] = React.useState<number | null>(null);

  React.useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.07 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.4, x: 0, y: 0, rotate: 0 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      ...getCardState(i, members.length),
      transition: { type: "spring", stiffness: 110, damping: 13 },
    }),
  };

  return (
    <section className={cn("w-full py-20", className)}>
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center px-4">

        {/* Header */}
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-5 border border-primary/15">
              Our team
            </div>
            <h2 className="text-3xl md:text-[2.6rem] font-extrabold text-secondary mb-4 leading-tight">
              {title}
            </h2>
          </motion.div>
        )}
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-gray-500 text-lg max-w-2xl leading-relaxed"
          >
            {description}
          </motion.p>
        )}

        {/* Fan */}
        <motion.div
          ref={ref}
          className="relative mt-20 flex items-end justify-center"
          style={{ minHeight: "420px", width: "100%", paddingTop: "140px" }}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {members.map((member, index) => (
            /* OUTER: owns fan position (x / y / rotate) via variants — never touched by hover */
            <motion.div
              key={index}
              className="absolute"
              style={{
                left: "calc(50% - 80px)",
                zIndex: hoveredIdx === index
                  ? 99
                  : members.length - Math.abs(index - (members.length - 1) / 2),
              }}
              custom={index}
              variants={itemVariants}
              onHoverStart={() => setHoveredIdx(index)}
              onHoverEnd={() => setHoveredIdx(null)}
            >
              {/* INNER: owns hover scale/lift only — isolated from variant position */}
              <motion.div
                className="rounded-2xl overflow-hidden border-[3px] border-white shadow-2xl cursor-default"
                style={{
                  width: "160px",
                  height: "210px",
                  background: CARD_BG[index % CARD_BG.length],
                }}
                whileHover={{
                  scale: 1.15,
                  y: -18,
                  transition: { type: "spring", stiffness: 320, damping: 22 },
                }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-contain object-bottom"
                />
                {/* Name tooltip on hover */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 px-2 py-1.5 text-center"
                  style={{
                    background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 100%)",
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIdx === index ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-white text-xs font-bold leading-tight truncate">
                    {member.name}
                  </p>
                  <p className="text-white/70 text-[10px] leading-tight truncate">
                    {member.title}
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Optional CTA */}
        {showLink && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8"
          >
            <Link
              href="/team"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90 hover:gap-3"
              style={{ background: "linear-gradient(135deg, #003648, #76186f)" }}
            >
              Meet the full team
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
