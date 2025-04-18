
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="pt-20 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 pr-0 lg:pr-8">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Craft <span className="gradient-text">AI-Powered</span> Resumes That Get You Hired
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              ResumePulse uses AI to help you create professional, ATS-friendly resumes that showcase your skills and experience. Stand out from the crowd and land your dream job.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link to="/builder">
                <Button size="lg" className="w-full sm:w-auto bg-resume-primary hover:bg-resume-secondary">
                  Create Your Resume <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/templates">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  View Templates
                </Button>
              </Link>
            </motion.div>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              className="rounded-lg shadow-xl bg-white overflow-hidden border border-gray-200"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="p-1 resume-gradient"></div>
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-resume-light flex items-center justify-center mr-4">
                    <div className="w-10 h-10 rounded-full resume-gradient"></div>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">Jane Doe</h2>
                    <p className="text-gray-600">Frontend Developer</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold text-resume-primary uppercase tracking-wider mb-2">Experience</h3>
                    <div className="pl-4 border-l-2 border-resume-primary">
                      <p className="font-medium">Senior Frontend Developer</p>
                      <p className="text-sm text-gray-600">TechCorp Inc • 2020 - Present</p>
                      <p className="text-sm text-gray-700 mt-1">Led the development of responsive web applications using React and TypeScript.</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-semibold text-resume-primary uppercase tracking-wider mb-2">Education</h3>
                    <div className="pl-4 border-l-2 border-resume-primary">
                      <p className="font-medium">Bachelor of Computer Science</p>
                      <p className="text-sm text-gray-600">University of Technology • 2016 - 2020</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-semibold text-resume-primary uppercase tracking-wider mb-2">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-resume-light text-resume-primary rounded-full text-sm">React</span>
                      <span className="px-3 py-1 bg-resume-light text-resume-primary rounded-full text-sm">TypeScript</span>
                      <span className="px-3 py-1 bg-resume-light text-resume-primary rounded-full text-sm">JavaScript</span>
                      <span className="px-3 py-1 bg-resume-light text-resume-primary rounded-full text-sm">CSS/SCSS</span>
                      <span className="px-3 py-1 bg-resume-light text-resume-primary rounded-full text-sm">UI/UX</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
