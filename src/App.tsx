import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import Sleep from "./pages/Sleep";
import Discover from "./pages/Discover";
import LiveAarti from "./pages/LiveAarti";
import Guru from "./pages/Guru";
import NotFound from "./pages/NotFound";
import { initializeAnalytics, trackPageView } from "./utils/analytics";

const queryClient = new QueryClient();

// Analytics tracker component
const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view on route change
    const pageName = location.pathname === '/' ? 'Home' : location.pathname.substring(1);
    trackPageView(pageName);
  }, [location]);

  return null;
};

const App = () => {
  // Initialize analytics on app load
  useEffect(() => {
    initializeAnalytics();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AnalyticsTracker />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/sleep" element={<Sleep />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/live-aarti" element={<LiveAarti />} />
            <Route path="/guru" element={<Guru />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
