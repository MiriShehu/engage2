import { Activity, Stethoscope, Shield, Dumbbell, Eye, Brain, Pill, Baby } from "lucide-react";

export const xcelerateStats = [
  { n: 150,   sfx: "+",   pfx: "",  top: "countries covered",           bot: "under a single plan",           cls: "xp-stat-0" },
  { n: 50000, sfx: "+",   pfx: "",  top: "global employees",            bot: "supported by Engage",           cls: "xp-stat-1" },
  { n: 199,   sfx: "",    pfx: "£", top: "average premium",             bot: "per employee per month",        cls: "xp-stat-2" },
];

export const globalHiringChecks = [
  "Easy set-up and implementation",
  "Competitive premiums",
  "No underwriting required",
  "Tailored to your international team",
];

export interface CompanyEntry { name: string; domain: string }

export const companiesRow1: CompanyEntry[] = [
  { name: "Brill Power",              domain: "brillpower.com" },
  { name: "Chattermill",              domain: "chattermill.com" },
  { name: "Codility",                 domain: "codility.com" },
  { name: "OnePlus",                  domain: "oneplus.com" },
  { name: "Designer Group",           domain: "designergroup.ie" },
  { name: "Dugout",                   domain: "dugout.com" },
  { name: "Humn.ai",                  domain: "humn.ai" },
  { name: "Impala",                   domain: "impala.travel" },
  { name: "Kairos",                   domain: "kairos.com" },
  { name: "Loyalty Lion",             domain: "loyaltylion.com" },
  { name: "Ometria",                  domain: "ometria.com" },
  { name: "Oval Medical Technologies",domain: "ovalmedical.com" },
  { name: "Oxford Vacmedix",          domain: "vacmedix.com" },
  { name: "PI Labs",                  domain: "pilabs.co.uk" },
  { name: "Pismo",                    domain: "pismo.io" },
];

export const companiesRow2: CompanyEntry[] = [
  { name: "Profit Accumulator",  domain: "profitaccumulator.co.uk" },
  { name: "Scede",               domain: "scede.io" },
  { name: "Studio71",            domain: "studio71.com" },
  { name: "ThanksBen",           domain: "thanksben.com" },
  { name: "Thirdfort",           domain: "thirdfort.com" },
  { name: "Thread",              domain: "thread.com" },
  { name: "Bootstrap Europe",    domain: "bootstrap.eu" },
  { name: "Unibuddy",            domain: "unibuddy.com" },
  { name: "Wiredscore",          domain: "wiredscore.com" },
  { name: "Zappi",               domain: "zappi.io" },
  { name: "Bitpanda",            domain: "bitpanda.com" },
  { name: "Maze",                domain: "maze.co" },
  { name: "Mews",                domain: "mews.com" },
  { name: "Awin",                domain: "awin.com" },
];

export const coverageCardsRow1 = [
  { icon: Activity,    title: "Inpatient treatment",   desc: "Surgeries & treatments requiring an overnight hospital stay" },
  { icon: Stethoscope, title: "Outpatient treatment",  desc: "Consultations, diagnostics, & minor treatments" },
];

export const coverageCardsRow2 = [
  { icon: Shield,   title: "Acute & Chronic",       desc: "Full cover for both acute & chronic conditions" },
  { icon: Dumbbell, title: "Physical therapies",    desc: "Physiotherapy, chiropractic & alternatives" },
  { icon: Eye,      title: "Dental & Optical",      desc: "Dentistry & optical care, treatments & diagnostics" },
  { icon: Brain,    title: "Mental health",         desc: "Counselling & digital support tools" },
];

export const coverageCardsRow3 = [
  { icon: Pill,  title: "Prescriptions",   desc: "Prescription drugs & vaccinations covered globally" },
  { icon: Baby,  title: "Maternity",       desc: "Comprehensive options to cover maternity benefits" },
];
