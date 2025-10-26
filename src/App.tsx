import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import { DayPickerProvider } from "react-day-picker";
import { Outlet } from "react-router-dom"; // si usas React Router
import NotFound from "./pages/NotFound";
import Facilitors from "./pages/Facilitors";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import ScrollToTop from "./ScrollToTop";
import Consultancy from "./pages/Consultancy";
import WorkShop from "./pages/WorkShop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Index />} />
          <Route path="/consultorias" element={<Consultancy />} />
          <Route path="/talleres" element={<WorkShop />} />
          <Route path="/inicio" element={<Index />} />
          <Route path="/facilitadores" element={<Facilitors />}></Route>
          <Route path="/nosotros" element={<AboutUs />}></Route>
          <Route path="/contactanos" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
