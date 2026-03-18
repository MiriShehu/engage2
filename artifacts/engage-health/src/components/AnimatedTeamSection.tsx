import * as React from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface TeamMember {
  name: string;
  image: string;
}

interface AnimatedTeamSectionProps {
  title?: string;
  description?: string;
  members: TeamMember[];
  className?: string;
}

const getCardState = (index: number, total: number) => {
  const centerIndex = (total - 1) / 2;
  const distanceFromCenter = index - centerIndex;
  const x = distanceFromCenter * 90;
  const y = Math.abs(distanceFromCenter) * -30;
  const rotate = distanceFromCenter * 12;
  return { x, y, rotate };
};

export function AnimatedTeamSection({ title, description, members, className }: AnimatedTeamSectionProps) {
  const controls = useAnimation();
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });

  React.useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5, x: 0, y: 0, rotate: 0 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      x: getCardState(i, members.length).x,
      y: getCardState(i, members.length).y,
      rotate: getCardState(i, members.length).rotate,
      transition: { type: "spring", stiffness: 120, damping: 12 },
    }),
  };

  return (
    <section className={cn("w-full py-16 overflow-hidden", className)}>
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center px-4">
        {title && (
          <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-3">{title}</h2>
        )}
        {description && (
          <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">{description}</p>
        )}

        <motion.div
          ref={ref}
          className="relative mt-16 flex items-center justify-center"
          style={{ minHeight: "220px", width: "100%" }}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {members.map((member, index) => (
            <motion.div
              key={index}
              className="absolute w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-xl overflow-hidden shadow-xl border-4 border-white"
              custom={index}
              variants={itemVariants}
              style={{
                zIndex: members.length - Math.abs(index - (members.length - 1) / 2),
              }}
              whileHover={{
                scale: 1.12,
                zIndex: 99,
                rotate: 0,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              title={member.name}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover object-top"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Name strip — shows on hover via CSS title tooltip, but also render below */}
        <div className="mt-32 flex flex-wrap justify-center gap-2">
          {members.map((m, i) => (
            <span
              key={i}
              className="text-xs text-gray-400 font-medium px-2 py-0.5 rounded-full bg-gray-100"
            >
              {m.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
