import { Toaster } from "@/components/ui/toaster";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClientInstance } from "@/lib/query-client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Home from "@/pages/Home";

function App() {
  return (
    <HelmetProvider>
      <div className="w-full max-w-full overflow-x-hidden">
        <Helmet>
          <title>Greek Me — UK's Viral Greek Street Food Franchise</title>
          <meta
            name="description"
            content="Launch a Greek Me franchise from your commercial kitchen. High margins, rapid ticket times, 100% Halal certified Greek street food system."
          />
          <link rel="canonical" href="https://www.greekme.uk/" />
        </Helmet>

        <QueryClientProvider client={queryClientInstance}>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Router>

          <Toaster />
        </QueryClientProvider>
      </div>
    </HelmetProvider>
  );
}

export default App;
