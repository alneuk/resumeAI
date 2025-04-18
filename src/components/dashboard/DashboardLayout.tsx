
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { 
  FileText, 
  Settings, 
  LogOut, 
  User, 
  Home, 
  Menu, 
  X 
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  const { toast } = useToast();

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: Home },
    { name: "My Resumes", href: "/dashboard/resumes", icon: FileText },
    { name: "Profile", href: "/dashboard/profile", icon: User },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    // This would be replaced with an actual logout API call
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Mobile Header */}
      {isMobile && (
        <header className="bg-white shadow-sm border-b border-gray-200 px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold gradient-text">ResumePulse</span>
          </Link>
          <Button variant="ghost" onClick={toggleSidebar} size="icon">
            {isSidebarOpen ? <X /> : <Menu />}
          </Button>
        </header>
      )}

      <div className="flex flex-1">
        {/* Sidebar (Desktop always visible, Mobile conditionally visible) */}
        <aside
          className={`${
            isMobile
              ? isSidebarOpen
                ? "fixed inset-y-0 left-0 z-50 w-64 transform translate-x-0"
                : "fixed inset-y-0 left-0 z-50 w-64 transform -translate-x-full"
              : "w-64"
          } bg-white border-r border-gray-200 transition-transform duration-200 ease-in-out overflow-y-auto`}
        >
          <div className="h-full flex flex-col">
            {/* Sidebar Header */}
            {!isMobile && (
              <div className="px-6 py-6 border-b border-gray-200">
                <Link to="/" className="flex items-center">
                  <span className="text-xl font-bold gradient-text">ResumePulse</span>
                </Link>
              </div>
            )}

            {/* Sidebar Navigation */}
            <nav className="flex-1 p-4 space-y-1">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                const Icon = item.icon;
                
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                      isActive
                        ? "bg-resume-primary text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={isMobile ? toggleSidebar : undefined}
                  >
                    <Icon className="h-5 w-5 mr-3" />
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            {/* Sidebar Footer */}
            <div className="p-4 border-t border-gray-200">
              <Button
                variant="ghost"
                className="w-full justify-start text-gray-700 hover:bg-gray-100"
                onClick={handleLogout}
              >
                <LogOut className="h-5 w-5 mr-3" />
                Log out
              </Button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
