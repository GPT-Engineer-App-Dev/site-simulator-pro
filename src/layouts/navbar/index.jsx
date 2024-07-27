import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-[#1e1e1e] text-white">
      <div className="flex items-center space-x-6">
        <NavLink to="/" className="flex items-center space-x-2">
          <Rocket className="h-6 w-6" />
          <span className="text-xl font-bold">NeetCode</span>
        </NavLink>
        <NavLink to="/courses" className="hover:text-gray-300">Courses</NavLink>
        <NavLink to="/practice" className="hover:text-gray-300">Practice</NavLink>
        <NavLink to="/roadmap" className="hover:text-gray-300">Roadmap</NavLink>
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="outline" className="bg-[#2c5e3f] text-white border-none hover:bg-[#2c5e3f]/80">Pro</Button>
        <Button variant="ghost" size="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
        </Button>
        <Button variant="secondary" className="bg-[#4a72ff] text-white hover:bg-[#4a72ff]/80">Sign in</Button>
      </div>
    </nav>
  );
};

export default Navbar;
