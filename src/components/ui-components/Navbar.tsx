
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useToast } from "@/components/ui/use-toast";

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const handleApiKeyDemo = () => {
    toast({
      title: "Coming Soon!",
      description: "API key integration will be available in the next update.",
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold gradient-text">ResumePulse</span>
            </Link>
          </div>
          
          {!isMobile && (
            <nav className="hidden md:flex space-x-8 items-center">
              <Link to="/" className="text-gray-700 hover:text-resume-primary transition-colors">
                Home
              </Link>
              <Link to="/templates" className="text-gray-700 hover:text-resume-primary transition-colors">
                Templates
              </Link>
              <Link to="/features" className="text-gray-700 hover:text-resume-primary transition-colors">
                Features
              </Link>
              <Button variant="outline" size="sm" className="mr-2" onClick={handleApiKeyDemo}>
                API Key
              </Button>
              <Link to="/login">
                <Button variant="outline" size="sm" className="mr-2">Log in</Button>
              </Link>
              <Link to="/register">
                <Button size="sm" className="bg-resume-primary hover:bg-resume-secondary">Sign Up</Button>
              </Link>
            </nav>
          )}
          
          {isMobile && (
            <div className="md:hidden">
              <Button variant="ghost" onClick={toggleMenu} size="icon">
                {isMenuOpen ? <X /> : <Menu />}
              </Button>
            </div>
          )}
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobile && isMenuOpen && (
        <div className="md:hidden animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-b-lg">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-resume-primary transition-colors" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/templates" className="block px-3 py-2 text-gray-700 hover:text-resume-primary transition-colors" onClick={toggleMenu}>
              Templates
            </Link>
            <Link to="/features" className="block px-3 py-2 text-gray-700 hover:text-resume-primary transition-colors" onClick={toggleMenu}>
              Features
            </Link>
            <Button variant="outline" size="sm" className="ml-3 mt-2" onClick={handleApiKeyDemo}>
              API Key
            </Button>
            <div className="flex space-x-2 px-3 py-2">
              <Link to="/login" className="w-1/2">
                <Button variant="outline" className="w-full" onClick={toggleMenu}>Log in</Button>
              </Link>
              <Link to="/register" className="w-1/2">
                <Button className="w-full bg-resume-primary hover:bg-resume-secondary" onClick={toggleMenu}>Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
