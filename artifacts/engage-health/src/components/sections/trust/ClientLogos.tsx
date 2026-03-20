import { useEffect, useState } from "react";
import { LogoCloud } from "@/components/ui/logo-cloud-3";

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

const allLogos = [
  { src: marshmallow, alt: "Marshmallow" },
  { src: klarna,      alt: "Klarna" },
  { src: vayner,      alt: "VaynerMedia" },
  { src: cae,         alt: "CAE" },
  { src: boohoo,      alt: "boohoo" },
  { src: unmind,      alt: "unmind" },
  { src: oyster,      alt: "Oyster" },
  { src: breathe,     alt: "breathe" },
  { src: seedcamp,    alt: "Seedcamp" },
  { src: teladoc,     alt: "Teladoc" },
  { src: superscript, alt: "Superscript" },
  { src: pleo,        alt: "Pleo" },
];

export function ClientLogos() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const duration = isMobile ? 20 : 40;

  return (
    <section className="bg-[#f5f4fa] py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        <p className="text-xs font-bold tracking-widest uppercase text-primary/50">
          Featured in &amp; trusted by
        </p>
      </div>

      <LogoCloud logos={allLogos} duration={duration} durationOnHover={duration * 2} />
    </section>
  );
}
