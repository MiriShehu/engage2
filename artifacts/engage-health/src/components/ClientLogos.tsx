import marshmallow  from "@assets/0x0_1773872351104.png";
import oyster       from "@assets/6201434ebeae0fd1206873cb_Vector12_1773872351104.png";
import boohoo       from "@assets/boohoo_1773872351104.png";
import breathe      from "@assets/breathe_1773872351105.png";
import cae          from "@assets/image2_1773872351105.png";
import klarna       from "@assets/klarna-logo_1773872351106.png";
import pleo         from "@assets/p_1773872351106.png";
import seedcamp     from "@assets/seedcamp_1773872351106.png";
import superscript  from "@assets/superscript_1773872351107.jpg";
import teladoc      from "@assets/teledoc-1_1773872351107.png";
import unmind       from "@assets/unmind_1773872351107.png";
import vayner       from "@assets/vayner-media-logo-e1741707986477_1773872351107.png";

const row1 = [
  { src: marshmallow, alt: "Marshmallow", h: "h-7" },
  { src: klarna,      alt: "Klarna",      h: "h-9" },
  { src: vayner,      alt: "VaynerMedia", h: "h-6" },
  { src: cae,         alt: "CAE",         h: "h-9" },
  { src: boohoo,      alt: "boohoo",      h: "h-7" },
  { src: unmind,      alt: "unmind",      h: "h-8" },
];

const row2 = [
  { src: oyster,      alt: "Oyster",      h: "h-7" },
  { src: breathe,     alt: "breathe",     h: "h-7" },
  { src: seedcamp,    alt: "Seedcamp",    h: "h-7" },
  { src: teladoc,     alt: "Teladoc",     h: "h-8" },
  { src: superscript, alt: "Superscript", h: "h-8" },
  { src: pleo,        alt: "Pleo",        h: "h-7" },
];

function LogoRow({
  logos,
  direction = "left",
  speed = 40,
}: {
  logos: typeof row1;
  direction?: "left" | "right";
  speed?: number;
}) {
  const keyframes =
    direction === "left"
      ? `@keyframes scroll-left { from { transform: translateX(0); } to { transform: translateX(-50%); } }`
      : `@keyframes scroll-right { from { transform: translateX(-50%); } to { transform: translateX(0); } }`;

  const animName = direction === "left" ? "scroll-left" : "scroll-right";

  return (
    <div className="overflow-hidden relative group">
      <style>{keyframes}</style>
      <div
        className="flex gap-6 group-hover:[animation-play-state:paused]"
        style={{
          animation: `${animName} ${speed}s linear infinite`,
          width: "max-content",
        }}
      >
        {[...logos, ...logos, ...logos].map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center px-8 py-5 rounded-2xl bg-white/8 border border-white/10 hover:bg-white/15 hover:border-white/25 transition-all duration-300 shrink-0 backdrop-blur-sm group/card"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className={`${logo.h} w-auto object-contain brightness-0 invert opacity-70 group-hover/card:opacity-100 transition-opacity duration-300`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function ClientLogos() {
  return (
    <section className="bg-secondary py-20 overflow-hidden">
      {/* heading */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <p className="text-xs font-bold tracking-widest uppercase text-white/35 mb-3">
          Trusted by
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
          Companies that trust Engage Health
        </h2>
        <p className="mt-3 text-white/50 text-base max-w-xl mx-auto">
          From fast-growing start-ups to global enterprises — we look after the teams behind the brands.
        </p>
      </div>

      {/* two-row marquee */}
      <div className="space-y-4">
        <LogoRow logos={row1} direction="left"  speed={38} />
        <LogoRow logos={row2} direction="right" speed={44} />
      </div>
    </section>
  );
}
