import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown, Building2, Search, Loader2 } from "lucide-react";

const INDUSTRIES = [
  "Accounting & Finance","Advertising & Marketing","Aerospace & Defence","Agriculture & Farming",
  "Architecture & Design","Automotive","Banking & Financial Services","Biotechnology",
  "Broadcasting & Media","Business Consulting","Chemical & Pharmaceutical","Construction & Real Estate",
  "Consumer Goods & Retail","Cybersecurity","Data & Analytics","Education & Training",
  "Energy & Utilities","Engineering","Entertainment & Sports","Environmental Services",
  "Fashion & Apparel","Food & Beverage","Government & Public Sector","Healthcare & Medical",
  "Hospitality & Tourism","Human Resources","Information Technology","Insurance",
  "Legal Services","Logistics & Supply Chain","Manufacturing","Market Research",
  "Mining & Resources","Non-Profit & Charity","Printing & Publishing","Professional Services",
  "Property & Real Estate","Public Relations","Recruitment & Staffing","Research & Development",
  "Retail & E-Commerce","Software & SaaS","Telecommunications","Transport & Aviation",
  "Venture Capital & Private Equity","Wholesale & Distribution",
];

const COUNTRIES = [
  "United Kingdom","United States","Afghanistan","Albania","Algeria","Andorra","Angola",
  "Antigua and Barbuda","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas",
  "Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia",
  "Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi",
  "Cabo Verde","Cambodia","Cameroon","Canada","Central African Republic","Chad","Chile","China",
  "Colombia","Comoros","Congo (Brazzaville)","Congo (Kinshasa)","Costa Rica","Croatia","Cuba",
  "Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador",
  "Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Fiji",
  "Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala",
  "Guinea","Guinea-Bissau","Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia",
  "Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya",
  "Kiribati","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya",
  "Liechtenstein","Lithuania","Luxembourg","Madagascar","Malawi","Malaysia","Maldives","Mali",
  "Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco",
  "Mongolia","Montenegro","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal",
  "Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Korea","North Macedonia",
  "Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru",
  "Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda","Saint Kitts and Nevis",
  "Saint Lucia","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe",
  "Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia",
  "Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka",
  "Sudan","Suriname","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand",
  "Timor-Leste","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu",
  "Uganda","Ukraine","United Arab Emirates","Uruguay","Uzbekistan","Vanuatu","Vatican City",
  "Venezuela","Vietnam","Yemen","Zambia","Zimbabwe",
];

interface Props {
  coverType: string;
  company: string;
  industry: string;
  country: string;
  onChange: (field: string, value: string) => void;
  // hidden fields populated on company select
  companyAddress?: string;
  companySic?: string;
}

export default function Step3Company({ coverType, company, industry, country, onChange }: Props) {
  const isUK = coverType === "UK Company";
  const [results, setResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showIndustryDropdown, setShowIndustryDropdown] = useState(false);
  const [industrySearch, setIndustrySearch] = useState(industry);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const industryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
      if (industryRef.current && !industryRef.current.contains(e.target as Node)) {
        setShowIndustryDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!isUK || !showDropdown || company.length < 2) {
      setResults([]);
      return;
    }
    
    const timer = setTimeout(async () => {
      setIsLoading(true);
      try {
        const proxyUrl = import.meta.env.VITE_COMPANIES_PROXY_URL;
        const res = await fetch(`${proxyUrl}?q=${encodeURIComponent(company)}`);
        if (res.ok) {
          const data = await res.json();
          setResults(data.items || []);
        } else {
          setResults([]);
        }
      } catch (err) {
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [company, isUK, showDropdown]);

  const handleSelect = (comp: any) => {
    onChange("company", comp.title);
    onChange("companyAddress", comp.address_snippet || "");
    onChange("companySic", comp.description || "");
    setShowDropdown(false);
  };

  const inputClass = "w-full px-5 py-3.5 rounded-[12px] border-[1.5px] border-border bg-muted/30 text-[15px] font-medium text-foreground outline-none transition-all focus:border-primary focus:bg-white focus:shadow-[0_0_0_3px_rgba(118,24,111,0.08)] placeholder:text-muted-foreground/60";
  const labelClass = "text-[11px] font-extrabold uppercase tracking-[0.09em] text-muted-foreground mb-2 block";

  return (
    <div className="flex flex-col flex-1 items-center px-6">
      <div className="w-full max-w-[520px] flex flex-col flex-1 justify-center py-8">

        {/* Brand icon */}
        <div className="w-12 h-12 rounded-[13px] flex items-center justify-center mb-7 flex-shrink-0"
             style={{ background: "linear-gradient(135deg,#003648,#76186f)" }}>
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </div>

        <h1 className="text-[34px] font-extrabold text-foreground tracking-tight leading-[1.15] mb-2">
          About your<br /><span className="text-primary">company</span>
        </h1>
        <p className="text-[15px] text-muted-foreground mb-8 leading-relaxed">
          A few details to help us tailor your quotes.
        </p>

        <div className="flex flex-col gap-5">
          <div className="relative" ref={dropdownRef}>
            <label className={labelClass}>
              Company name <span className="text-primary normal-case font-normal">*</span>
              {isUK && <span className="ml-2 normal-case font-normal text-muted-foreground/70">— powered by Companies House</span>}
            </label>
            <div className="relative">
              <input
                value={company}
                onChange={(e) => {
                  onChange("company", e.target.value);
                  setShowDropdown(true);
                }}
                onFocus={() => setShowDropdown(true)}
                placeholder={isUK ? "Search Companies House…" : "Enter company name"}
                className={inputClass}
              />
              {isUK && isLoading && (
                 <Loader2 className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground animate-spin" />
              )}
              {isUK && !isLoading && !company && (
                 <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/50" />
              )}
            </div>

            {/* Dropdown */}
            {isUK && showDropdown && (company.length >= 2) && (
              <div className="absolute z-50 top-full left-0 right-0 mt-2 bg-white rounded-[12px] shadow-xl border border-gray-100 overflow-hidden max-h-64 overflow-y-auto">
                {isLoading && results.length === 0 ? (
                  <div className="p-4 text-center text-sm font-medium text-gray-500">Searching Companies House...</div>
                ) : results.length > 0 ? (
                  <ul className="py-2">
                    {results.map((r, i) => (
                      <li
                        key={i}
                        className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-50 last:border-0 transition-colors"
                        onClick={() => handleSelect(r)}
                      >
                        <div className="flex items-start gap-3">
                          <Building2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          <div>
                            <div className="text-sm font-bold text-gray-800 leading-tight">{r.title}</div>
                            {r.address_snippet && (
                              <div className="text-xs font-medium text-gray-500 mt-1 line-clamp-1">{r.address_snippet}</div>
                            )}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="p-4 text-center text-sm font-medium text-gray-500">No companies found</div>
                )}
              </div>
            )}
          </div>
          <div className="relative" ref={industryRef}>
            <label className={labelClass}>Industry</label>
            <input
              value={industrySearch}
              onChange={(e) => {
                setIndustrySearch(e.target.value);
                onChange("industry", e.target.value);
                setShowIndustryDropdown(true);
              }}
              onFocus={() => setShowIndustryDropdown(true)}
              placeholder="e.g. Technology"
              className={inputClass}
            />
            {showIndustryDropdown && (
              <div className="absolute z-50 top-full left-0 right-0 mt-2 bg-white rounded-[12px] shadow-xl border border-gray-100 overflow-hidden max-h-56 overflow-y-auto">
                <ul className="py-2">
                  {INDUSTRIES.filter(i => i.toLowerCase().includes(industrySearch.toLowerCase())).map((ind) => (
                    <li
                      key={ind}
                      className="px-4 py-2.5 hover:bg-gray-50 cursor-pointer text-sm font-medium text-gray-800 transition-colors"
                      onClick={() => {
                        setIndustrySearch(ind);
                        onChange("industry", ind);
                        setShowIndustryDropdown(false);
                      }}
                    >
                      {ind}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div>
            <label className={labelClass}>Headquarters country</label>
            <div className="relative">
              <select
                value={country}
                onChange={(e) => onChange("country", e.target.value)}
                className={cn(
                  inputClass,
                  "appearance-none pr-10 cursor-pointer",
                  !country && "text-muted-foreground/60"
                )}
              >
                {COUNTRIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
