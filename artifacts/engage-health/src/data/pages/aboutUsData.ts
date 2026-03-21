import { Clock, Globe2, Building2, Trophy, MessageSquare, BarChart3, Rocket, Plane, HeartHandshake, BadgeCheck } from "lucide-react";

import marshmallow  from "@assets/0x0_1773872351104.png";
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

export const aboutUsStats = [
  { icon: Clock,     val: "50",   label: "Years combined experience" },
  { icon: Globe2,    val: "70+",  label: "Countries covered" },
  { icon: Building2, val: "500+", label: "Businesses supported" },
  { icon: Trophy,    val: "3×",   label: "UK Health & Protection Award wins" },
];

export const coreServices = [
  "Group Health Insurance",
  "Group Life Insurance",
  "Group Income Protection",
  "Group Critical Illness Coverage",
  "Group Health Cash Plans",
  "Key Person Insurance",
  "Employee Assistance Programmes",
];

export const ourServiceFeatures = [
  "Impartial advice addressing the specific needs of your company",
  "Policy quotes sourced from across the whole market",
  "Introduction of new policies to your teams",
  "Assistance with claims and staff queries",
  "Ongoing admin support, including managing new leavers/joiners",
  "Scheme reviews during the annual renewal period",
  "Dedicated account manager",
];

export const clientLogos = [
  { src: teladoc,     alt: "Teladoc Health" },
  { src: pleo,        alt: "Deel" },
  { src: cae,         alt: "CAE" },
  { src: boohoo,      alt: "boohoo" },
  { src: unmind,      alt: "Unmind" },
  { src: marshmallow, alt: "Marshmallow" },
  { src: breathe,     alt: "Breathe" },
  { src: seedcamp,    alt: "Seedcamp" },
  { src: superscript, alt: "SuperScript" },
  { src: vayner,      alt: "VaynerMedia" },
  { src: klarna,      alt: "Klarna" },
];

export const awards = [
  { src: "/award-2022.jpg", label: "UK Health & Protection Award 2022" },
  { src: "/award-2023.jpg", label: "UK Health & Protection Award 2023" },
  { src: "/award-2024.jpg", label: "UK Health & Protection Award 2024" },
];

export const theEngageWay = [
  {
    icon: MessageSquare,
    title: "One-to-one consultation",
    body: "Whether you're launching a scheme for the first time or seeking a review of your current strategy and policies, we're here to answer all your questions and provide the best solutions.",
  },
  {
    icon: BarChart3,
    title: "Market-wide quotes",
    body: "Our team will source policies and price points from across the market – usually superior to what you can find publicly available. We will also explain the crucial policy points in straight-forward language.",
  },
  {
    icon: Rocket,
    title: "Scheme implementation",
    body: "We will advise on the best way of making benefits available to your teams, including guidance on benefits platforms and apps. We can also help onboard your teams onto your new scheme via in-office or virtual presentations.",
  },
  {
    icon: Plane,
    title: "UK and global",
    body: "Our expertise go beyond the UK. Our international team advise on the best way to support teams and individuals in different parts of the world too. Global benefits can involve significant investment; we make sure it's wisely spent.",
  },
  {
    icon: HeartHandshake,
    title: "Claims assistance",
    body: "We're here to help should you ever encounter issues when making a claim on a policy. We help clear up any confusion and, if we believe you've been wrongly refused a claim, we will argue your case.",
  },
  {
    icon: BadgeCheck,
    title: "No contracts, no fees",
    body: "We won't tie you into any contracts or charge you for our advice. In essence, we take a finder's fee from the providers we place you with. Be assured: we do not have \"preferred partnership\" arrangements - we always seek out the best policies from across all available providers.",
  },
];

export const quickLinks = [
  { label: "Meet the team", href: "/team" },
  { label: "Employee Benefits", href: "/employee-benefits" },
  { label: "International Benefits", href: "/international-benefits" },
  { label: "Xcelerate", href: "/xcelerate" },
  { label: "Knowledge Hub", href: "/knowledge-hub" },
];
