
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  type: "login" | "register";
}

const AuthLayout = ({ children, title, subtitle, type }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side with background image and content */}
      <div className="hidden md:flex md:w-1/2 resume-gradient items-center justify-center p-10">
        <div className="max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/" className="flex items-center mb-8">
              <span className="text-2xl font-bold text-white">ResumePulse</span>
            </Link>
            <h2 className="text-3xl font-bold text-white mb-4">
              {type === "login"
                ? "Welcome back to ResumePulse"
                : "Join ResumePulse today"}
            </h2>
            <p className="text-white/80 text-lg">
              {type === "login"
                ? "Log in to access your professionally designed resumes and continue your job search journey."
                : "Create an account to build stunning resumes, save templates, and track your job applications."}
            </p>
            
            <div className="mt-12 bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <p className="text-white font-medium text-lg">
                "ResumePulse helped me land interviews at my top 3 target companies. The AI-powered content suggestions made all the difference!"
              </p>
              <div className="mt-4">
                <p className="text-white font-medium">Alex Chen</p>
                <p className="text-white/70">Product Manager at TechCorp</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Right side with form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-10 bg-white">
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="md:hidden mb-8">
            <Link to="/" className="flex items-center mb-4">
              <span className="text-xl font-bold gradient-text">ResumePulse</span>
            </Link>
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            {title}
          </h1>
          <p className="text-gray-600 mb-8">{subtitle}</p>
          
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export default AuthLayout;
