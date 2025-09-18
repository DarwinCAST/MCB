import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import { DayPickerProvider } from "react-day-picker";
import { Outlet } from "react-router-dom"; // si usas React Router
import NotFound from "./pages/NotFound";
import Courses from "./pages/Courses";
import Facilitors from "./pages/Facilitors";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import ScrollToTop from "./ScrollToTop";

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
          <Route path="/Courses" element={<Courses />} />
          <Route path="/Home" element={<Index />} />
          <Route path="/Facilitors" element={<Facilitors />}></Route>
          <Route path="/AboutUs" element={<AboutUs />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
