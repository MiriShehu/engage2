import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// Pages
import Home from "@/pages/Home";
import Solutions from "@/pages/Solutions";
import Products from "@/pages/Products";
import GetAQuote from "@/pages/GetAQuote";
import Team from "@/pages/Team";
import TeamMemberProfile from "@/pages/TeamMemberProfile";
import EmployeeBenefits from "@/pages/EmployeeBenefits";
import GroupHealthInsurance from "@/pages/GroupHealthInsurance";
import ServicePage from "@/pages/ServicePage";
import { employeeBenefitsServices } from "@/data/employeeBenefitsServices";
import { internationalBenefitsServices } from "@/data/internationalBenefitsServices";
import BlogPost from "@/pages/BlogPost";
import Xcelerate from "@/pages/Xcelerate";
import KnowledgeHub from "@/pages/KnowledgeHub";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/solutions" component={Solutions} />
      <Route path="/products" component={Products} />
      <Route path="/get-a-quote" component={GetAQuote} />
      <Route path="/team" component={Team} />
      <Route path="/team/:slug" component={TeamMemberProfile} />
      <Route path="/employee-benefits" component={EmployeeBenefits} />
      <Route path="/employee-benefits/group-health-insurance" component={GroupHealthInsurance} />
      <Route path="/employee-benefits/:slug">
        {() => <ServicePage category="employee-benefits" services={employeeBenefitsServices} />}
      </Route>
      <Route path="/international-benefits/:slug">
        {() => <ServicePage category="international-benefits" services={internationalBenefitsServices} />}
      </Route>
      <Route path="/xcelerate" component={Xcelerate} />
      <Route path="/knowledge-hub" component={KnowledgeHub} />
      <Route path="/knowledge-hub/:slug">
        {(params) => <BlogPost slug={params.slug} />}
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <ScrollToTop />
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
