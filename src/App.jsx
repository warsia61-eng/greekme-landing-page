import { Toaster } from "@/components/ui/toaster";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClientInstance } from "@/lib/query-client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";

function App() {
  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <QueryClientProvider client={queryClientInstance}>
        <Router>

          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>

        </Router>

        <Toaster />
      </QueryClientProvider>
    </div>
  );
}

export default App;