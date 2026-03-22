const BASE = "https://www.engagehealthgroup.co.uk/wp-content/uploads";
const T = "#003648";
const P = "#76186f";

export interface TeamMember {
  name: string;
  slug: string;
  title: string;
  bio: string;
  img: string;
  accent: string;
  tags: string[];
}

export interface Department {
  name: string;
  description: string;
  members: TeamMember[];
}

export const departments: Department[] = [
  {
    name: "Leadership",
    description: "The founders and directors who set the vision and ensure every client gets a best-in-class experience.",
    members: [
      {
        name: "Nick Hale",
        slug: "nick-hale",
        title: "Founder & Director",
        bio: "Founded Engage Health Group in 2016 with a mission to make outstanding employee benefits accessible to all. CII qualified, Nick leads the UK business channel and is personally committed to the highest level of client service.",
        img: `${BASE}/2023/01/Nick-Hale-e1674569951192.png`,
        accent: P,
        tags: ["Founder", "CII Qualified", "UK Benefits"],
      },
      {
        name: "Ian Abbott",
        slug: "ian-abbott",
        title: "International Director",
        bio: "After 8+ years at Bupa Global, Ian co-founded Engage International, the arm dedicated to helping global businesses navigate health and protection across 70+ countries. Multiple award winner.",
        img: `${BASE}/2023/01/IAN-ABBOTT-1-e1675073149526.png`,
        accent: T,
        tags: ["Bupa Global Alumni", "International", "Award Winner"],
      },
      {
        name: "Charlie Cousins",
        slug: "charlie-cousins",
        title: "Director",
        bio: "Founder of Engage's sister brokerage Hooray Health & Protection. Charlie brings deep SME expertise and a wealth of experience helping fast-growing UK businesses build their first benefits packages.",
        img: `${BASE}/2023/01/charlie-e1674569473213.png`,
        accent: P,
        tags: ["SME Specialist", "Director"],
      },
    ],
  },
  {
    name: "Employee Benefits Team",
    description: "Specialists in UK group health, protection and wellbeing, sourcing, implementing and managing policies on your behalf.",
    members: [
      {
        name: "Mike Hesch",
        slug: "mike-hesch",
        title: "Employee Benefits Team Lead",
        bio: "Senior roles at Aon, Capita Employee Benefits, and Mercer have given Mike an encyclopaedic knowledge of benefits, wellness, pensions and insurance strategy. He leads the UK employee benefits team.",
        img: `${BASE}/2023/06/Mike-Hesch-Head-Shot-e1723650105906.png`,
        accent: P,
        tags: ["Aon", "Mercer", "Capita", "Team Lead"],
      },
      {
        name: "Jess Wright",
        slug: "jess-wright",
        title: "Employee Benefits Consultant",
        bio: "Jess provides wide-ranging employee benefits advice with a partnership-focused approach, working closely with HR teams to build sustainable and valued benefits packages.",
        img: `${BASE}/2023/12/Jess-Wright_.png`,
        accent: T,
        tags: ["Employee Benefits", "HR Partnership"],
      },
      {
        name: "Ed Bryan",
        slug: "ed-bryan",
        title: "Employee Benefits Consultant",
        bio: "Brings experience from AIG and Benefex, giving Ed a strong technical understanding of group insurance products and digital benefits platforms.",
        img: `${BASE}/2023/01/Ed-Bryan-1.png`,
        accent: P,
        tags: ["AIG", "Benefex", "Group Insurance"],
      },
      {
        name: "Esme Pearson",
        slug: "esme-pearson",
        title: "Employee Benefits Consultant",
        bio: "A Business Management and Marketing graduate who brings fresh thinking to client advisory. Esme helps businesses shape benefits packages that genuinely attract and retain talent.",
        img: `${BASE}/2023/01/Esme-Pearson-1.png`,
        accent: T,
        tags: ["Client Advisory", "Talent Retention"],
      },
      {
        name: "Stuart Isaac",
        slug: "stuart-isaac",
        title: "Employee Benefits Consultant",
        bio: "Stuart is dedicated to helping companies build their ideal benefits package, ensuring the process runs as smoothly as possible for every client.",
        img: `${BASE}/2023/05/stuart-isaac.png`,
        accent: P,
        tags: ["Employee Benefits", "UK Benefits"],
      },
      {
        name: "John Kavanagh",
        slug: "john-kavanagh",
        title: "Employee Benefits Consultant",
        bio: "John relishes the opportunity to nurture new client relationships with sound, impartial advice given in their best interests.",
        img: `${BASE}/2024/02/John-Kavanagh-copy.png`,
        accent: T,
        tags: ["Client Relationships", "Employee Benefits"],
      },
      {
        name: "Chloe Young",
        slug: "chloe-young",
        title: "Employee Benefits Consultant",
        bio: "Known for her enthusiastic, customer-centred approach, Chloe advises on all things employee benefits and ensures every client gets a clear, helpful answer.",
        img: `${BASE}/2023/05/chloe-e1698242302294.png`,
        accent: P,
        tags: ["Customer-Centred", "Employee Benefits"],
      },
      {
        name: "Aleen Solly",
        slug: "aleen-solly",
        title: "Employee Benefits Consultant",
        bio: "Aleen ensures business clients get the very best advice across a wide range of employee health and protection policies.",
        img: `${BASE}/2024/08/Aleen-Solly-e1723469764751.png`,
        accent: T,
        tags: ["Health Insurance", "Life Insurance", "Protection"],
      },
      {
        name: "Katie Waldren",
        slug: "katie-waldren",
        title: "Employee Benefits Consultant",
        bio: "Katie helps connect businesses to the most cost-effective health and protection policies available in the UK market.",
        img: `${BASE}/2025/04/katie-waldren.png`,
        accent: P,
        tags: ["UK Benefits", "Cost Optimisation"],
      },
      {
        name: "Matt Pennington",
        slug: "matt-pennington",
        title: "Employee Benefits Consultant",
        bio: "Matt is determined to do what's right for the client, helping them find the benefits policies that will best support their workforce.",
        img: `${BASE}/2026/02/matt-pennington.png`,
        accent: T,
        tags: ["Employee Benefits", "Client-First"],
      },
    ],
  },
  {
    name: "International Team",
    description: "Experts in global employee benefits across 70+ countries, handling everything from multi-country policies to compliance and communication.",
    members: [
      {
        name: "Eiman Elkhalifa",
        slug: "eiman-elkhalifa",
        title: "International Benefits Consultant",
        bio: "Eiman works closely with global clients to ensure consistent, high-quality benefits delivery worldwide. Deep experience navigating the complexity of international insurance markets.",
        img: `${BASE}/2024/02/Eiman-Elkhalifa.png`,
        accent: P,
        tags: ["Global Clients", "International Insurance"],
      },
      {
        name: "Bruno Ferreira Coelho",
        slug: "bruno-ferreira-coelho",
        title: "International Benefits Consultant",
        bio: "Brings valuable experience from international health insurers Aetna and Bupa Global to advise businesses on the best international health insurance solutions for their teams.",
        img: `${BASE}/2023/01/Bruno-Ferreira-Coelho-e1674568875855.png`,
        accent: T,
        tags: ["Aetna", "Bupa Global", "International Health"],
      },
      {
        name: "Ciara Boulton",
        slug: "ciara-boulton",
        title: "International Benefits Consultant",
        bio: "A background in travel insurance informs Ciara's practical and client-friendly approach to supporting internationally mobile employees and their healthcare needs.",
        img: `${BASE}/2024/01/Ciara-Boulton.png`,
        accent: P,
        tags: ["Travel Insurance", "International Support"],
      },
      {
        name: "Sophie Rogers",
        slug: "sophie-rogers",
        title: "International Benefits Consultant",
        bio: "Sophie ensures international clients get all the support they need on their global employee benefits policies.",
        img: `${BASE}/2025/04/sophie-rogers-scaled-e1744810230169.png`,
        accent: T,
        tags: ["Global Benefits", "International"],
      },
    ],
  },
  {
    name: "Operations & Support",
    description: "The team that keeps everything running smoothly, from finance and compliance to client support.",
    members: [
      {
        name: "Stuart Box",
        slug: "stuart-box",
        title: "Head of Client Services",
        bio: "With a background spanning account management and financial services, Stuart leads the client services team, ensuring every Engage client relationship is proactive, responsive, and built on trust.",
        img: `${BASE}/2023/01/Stuart-Box-copy.png`,
        accent: T,
        tags: ["Account Management", "Client Services"],
      },
      {
        name: "Adena Stonely",
        slug: "adena-stonely",
        title: "Finance Manager",
        bio: "Oversees the company's finances, ensuring Engage runs with the rigour and transparency that clients and partners expect from an FCA-regulated firm.",
        img: `${BASE}/2023/05/Adena-Stonely-1.png`,
        accent: P,
        tags: ["Finance", "FCA Regulated"],
      },
      {
        name: "Emma Rose-Angus",
        slug: "emma-rose-angus",
        title: "Partnerships Manager",
        bio: "Builds and manages the strategic partnerships that extend Engage's reach, enabling even more businesses to access world-class employee benefits advice.",
        img: `${BASE}/2025/04/emma-profile-Edited.png`,
        accent: T,
        tags: ["Strategic Partnerships", "Business Development"],
      },
      {
        name: "Joanne Lloyd",
        slug: "joanne-lloyd",
        title: "Research & Pricing Analyst",
        bio: "Tracks the latest data, price-points, and product developments across the market, making sure Engage's advice is always informed by the most current intelligence.",
        img: `${BASE}/2023/01/Joanne-Lloyd-e1674570051794.png`,
        accent: P,
        tags: ["Market Research", "Data"],
      },
      {
        name: "Emily Ager",
        slug: "emily-ager",
        title: "Client Services Executive",
        bio: "Often the first port of call for clients seeking support with their policies, Emily helps clients navigate their benefits quickly and confidently.",
        img: `${BASE}/2024/05/Emily-Ager-N0-BG-e1721919350416.png`,
        accent: T,
        tags: ["Client Support", "Policy Queries"],
      },
      {
        name: "Steph Lee",
        slug: "steph-lee",
        title: "Client Services Executive",
        bio: "Steph has returned to the insurance industry to help ensure our clients get the very best support day to day.",
        img: `${BASE}/2024/07/Steph-Lee-e1722247578394.png`,
        accent: P,
        tags: ["Client Support", "Insurance"],
      },
      {
        name: "Nadia Cruz",
        slug: "nadia-cruz",
        title: "Client Services Executive",
        bio: "Nadia helps ensure all clients' policies are up-to-date and working as they should, providing smooth and responsive ongoing support.",
        img: `${BASE}/2025/10/nadia-cruz-e1761568726572.png`,
        accent: T,
        tags: ["Client Support", "Policy Management"],
      },
    ],
  },
];

export const allMembers: TeamMember[] = departments.flatMap((d) => d.members);
