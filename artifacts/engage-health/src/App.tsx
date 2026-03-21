import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { useEffect, useLayoutEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// Pages
import Home from "@/pages/Home";
import GetAQuote from "@/pages/GetAQuote";
import Team from "@/pages/Team";
import TeamMemberProfile from "@/pages/TeamMemberProfile";
import EmployeeBenefits from "@/pages/EmployeeBenefits";
import InternationalBenefits from "@/pages/InternationalBenefits";
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

  // Prevent browser from automatically restoring scroll position on navigation
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location]);
  
  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/get-a-quote" component={GetAQuote} />
      <Route path="/team" component={Team} />
      <Route path="/team/:slug" component={TeamMemberProfile} />
      <Route path="/employee-benefits" component={EmployeeBenefits} />
      <Route path="/employee-benefits/group-health-insurance" component={GroupHealthInsurance} />
      <Route path="/employee-benefits/:slug">
        {() => <ServicePage category="employee-benefits" services={employeeBenefitsServices} />}
      </Route>
      <Route path="/international-benefits" component={InternationalBenefits} />
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
