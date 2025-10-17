import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import WellnessPath from "./pages/WellnessPath";
import DivineMoments from "./pages/DivineMoments";
import AskRadha from "./pages/AskRadha";
import DivineStore from "./pages/DivineStore";
import MusicPlayerPage from "./pages/MusicPlayer";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/wellness" element={<WellnessPath />} />
          <Route path="/moments" element={<DivineMoments />} />
          <Route path="/music" element={<MusicPlayerPage />} />
          <Route path="/ask-radha" element={<AskRadha />} />
          <Route path="/store" element={<DivineStore />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
