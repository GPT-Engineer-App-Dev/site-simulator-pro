import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./layouts/navbar";
import Index from "./pages/Index";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#1e1e1e]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Add more routes here */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
