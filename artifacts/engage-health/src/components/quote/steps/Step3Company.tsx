import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

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
  company: string;
  industry: string;
  country: string;
  onChange: (field: string, value: string) => void;
}

export default function Step3Company({ company, industry, country, onChange }: Props) {
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
          <div>
            <label className={labelClass}>Company name <span className="text-primary normal-case font-normal">*</span></label>
            <input
              value={company}
              onChange={(e) => onChange("company", e.target.value)}
              placeholder="Acme Ltd"
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>Industry</label>
            <input
              value={industry}
              onChange={(e) => onChange("industry", e.target.value)}
              placeholder="e.g. Technology"
              className={inputClass}
            />
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
