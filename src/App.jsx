import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter , Routes, Route } from "react-router-dom";
import { ResumeProvider } from "@/context/ResumeContext";
import Navbar from "@/components/Navbar";
import Home from "./pages/Home";
import Builder from "./pages/Builder";
import Templates from "./pages/Templates";
import About from "./pages/About";
import MyResume from "./pages/MyResume";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ResumeProvider>
        <Toaster />
        <Sonner />
        <HashRouter >
          <div className="flex min-h-dvh flex-col">
            <a href="#main-content" className="fixed left-4 top-3 z-[60] -translate-y-20 bg-[#10172a] px-4 py-2 text-white transition-transform focus:translate-y-0">Skip to content</a>
            <Navbar />
            <main id="main-content" className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/builder" element={<Builder />} />
                <Route path="/templates" element={<Templates />} />
                <Route path="/my-resume" element={<MyResume />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
        </HashRouter >
      </ResumeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
