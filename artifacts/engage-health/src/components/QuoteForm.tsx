import { useState } from "react";
import { Check, ArrowRight, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

export function QuoteForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    size: "",
    products: [] as string[],
    name: "",
    company: "",
    email: "",
    phone: ""
  });

  const sizes = ["1-10", "11-50", "51-250", "250+"];
  const products = [
    "Health Insurance", "Life Insurance", "Income Protection",
    "Dental / Optical", "Corporate Wellness", "Not Sure Yet"
  ];

  const handleToggleProduct = (prod: string) => {
    setFormData(prev => ({
      ...prev,
      products: prev.products.includes(prod) 
        ? prev.products.filter(p => p !== prod)
        : [...prev.products, prod]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-border text-center flex flex-col items-center justify-center min-h-[400px]">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <Check className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-secondary mb-2">Request Received!</h3>
        <p className="text-muted-foreground mb-8">
          Thanks {formData.name}. One of our experts will review your details and contact you shortly with tailored options.
        </p>
        <button 
          onClick={() => { setIsSuccess(false); setStep(1); setFormData({size: "", products: [], name: "", company: "", email: "", phone: ""})}}
          className="text-primary font-bold hover:underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-border relative overflow-hidden">
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-muted">
        <div 
          className="h-full bg-primary transition-all duration-500 ease-out"
          style={{ width: `${(step / 3) * 100}%` }}
        />
      </div>

      <div className="mb-8 mt-2 flex justify-between items-center">
        <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Step {step} of 3</div>
        {step > 1 && (
          <button onClick={() => setStep(step - 1)} className="text-sm font-medium text-muted-foreground flex items-center hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back
          </button>
        )}
      </div>

      <form onSubmit={step === 3 ? handleSubmit : (e) => { e.preventDefault(); setStep(step + 1); }}>
        {/* STEP 1 */}
        <div className={cn("transition-all duration-300", step === 1 ? "block opacity-100 translate-x-0" : "hidden opacity-0 translate-x-8")}>
          <h3 className="text-2xl font-bold text-secondary mb-2">How large is your team?</h3>
          <p className="text-muted-foreground mb-8">Select the number of employees you're looking to cover.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {sizes.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setFormData({...formData, size: s})}
                className={cn(
                  "p-4 rounded-xl border-2 text-left font-bold transition-all",
                  formData.size === s 
                    ? "border-primary bg-primary/5 text-primary" 
                    : "border-border hover:border-primary/30 text-secondary"
                )}
              >
                {s} Employees
              </button>
            ))}
          </div>
          <button
            type="button"
            disabled={!formData.size}
            onClick={() => setStep(2)}
            className="btn-cta w-full flex items-center justify-center gap-2 py-4 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continue <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* STEP 2 */}
        <div className={cn("transition-all duration-300", step === 2 ? "block opacity-100 translate-x-0" : "hidden opacity-0 translate-x-8")}>
          <h3 className="text-2xl font-bold text-secondary mb-2">What are you interested in?</h3>
          <p className="text-muted-foreground mb-8">Select all the products you'd like to explore.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {products.map((p) => (
              <label key={p} className={cn(
                "p-4 rounded-xl border-2 flex items-center gap-3 cursor-pointer transition-all",
                formData.products.includes(p)
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-primary/30"
              )}>
                <div className={cn(
                  "w-5 h-5 rounded border flex items-center justify-center transition-colors",
                  formData.products.includes(p) ? "bg-primary border-primary" : "border-muted-foreground"
                )}>
                  {formData.products.includes(p) && <Check className="w-3 h-3 text-white" />}
                </div>
                <span className={cn("font-medium", formData.products.includes(p) ? "text-primary" : "text-secondary")}>
                  {p}
                </span>
              </label>
            ))}
          </div>
          <button
            type="button"
            disabled={formData.products.length === 0}
            onClick={() => setStep(3)}
            className="btn-cta w-full flex items-center justify-center gap-2 py-4 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continue <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* STEP 3 */}
        <div className={cn("transition-all duration-300", step === 3 ? "block opacity-100 translate-x-0" : "hidden opacity-0 translate-x-8")}>
          <h3 className="text-2xl font-bold text-secondary mb-2">Your Details</h3>
          <p className="text-muted-foreground mb-8">Where should we send your comparison quote?</p>
          
          <div className="space-y-4 mb-8">
            <div>
              <label className="block text-sm font-medium text-secondary mb-1">Full Name</label>
              <input 
                required
                type="text" 
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                className="w-full p-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-secondary mb-1">Company Name</label>
              <input 
                required
                type="text" 
                value={formData.company}
                onChange={e => setFormData({...formData, company: e.target.value})}
                className="w-full p-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                placeholder="Acme Ltd"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-secondary mb-1">Work Email</label>
                <input 
                  required
                  type="email" 
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className="w-full p-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-secondary mb-1">Phone Number</label>
                <input 
                  required
                  type="tel" 
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                  className="w-full p-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                  placeholder="07700 900000"
                />
              </div>
            </div>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting || !formData.name || !formData.email}
            className="btn-cta w-full flex items-center justify-center gap-2 py-4 rounded-xl disabled:opacity-50 disabled:transform-none"
          >
            {isSubmitting ? "Processing..." : "Get My Free Quote"} 
            {!isSubmitting && <ArrowRight className="w-5 h-5" />}
          </button>
          <p className="text-center text-xs text-muted-foreground mt-4">
            By submitting, you agree to our Privacy Policy. We keep your data safe.
          </p>
        </div>
      </form>
    </div>
  );
}
