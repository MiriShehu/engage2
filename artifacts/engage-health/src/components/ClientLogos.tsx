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

const row1 = [
  { src: marshmallow, alt: "Marshmallow" },
  { src: klarna,      alt: "Klarna" },
  { src: vayner,      alt: "VaynerMedia" },
  { src: cae,         alt: "CAE" },
  { src: boohoo,      alt: "boohoo" },
  { src: unmind,      alt: "unmind" },
];

const row2 = [
  { src: oyster,      alt: "Oyster" },
  { src: breathe,     alt: "breathe" },
  { src: seedcamp,    alt: "Seedcamp" },
  { src: teladoc,     alt: "Teladoc" },
  { src: superscript, alt: "Superscript" },
  { src: pleo,        alt: "Pleo" },
];

export function ClientLogos() {
  return (
    <section className="bg-[#f5f4fa] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <p className="text-xs font-bold tracking-widest uppercase text-primary/50 mb-3">
          Trusted by
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-secondary leading-tight">
          Companies that trust Engage Health
        </h2>
        <p className="mt-3 text-muted-foreground text-base max-w-xl mx-auto">
          From fast-growing start-ups to global enterprises — we look after the teams behind the brands.
        </p>
      </div>

      <div className="space-y-4">
        <LogoCloud logos={row1} duration={60} durationOnHover={120} />
        <LogoCloud logos={row2} duration={70} durationOnHover={140} reverse />
      </div>
    </section>
  );
}
