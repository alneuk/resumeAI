
import { motion } from "framer-motion";
import { Sparkles, FileText, Upload, Palette, Award, Zap } from "lucide-react";

const features = [
  {
    title: "AI-Powered Content",
    description: "Transform basic information into professionally written content with our AI assistant.",
    icon: <Sparkles className="h-8 w-8 text-resume-primary" />
  },
  {
    title: "ATS-Friendly Templates",
    description: "Choose from professionally designed templates optimized for Applicant Tracking Systems.",
    icon: <FileText className="h-8 w-8 text-resume-primary" />
  },
  {
    title: "Resume Upload & Parse",
    description: "Upload your existing resume and let our AI extract and enhance your information.",
    icon: <Upload className="h-8 w-8 text-resume-primary" />
  },
  {
    title: "Custom Styling",
    description: "Personalize colors, fonts, and layouts to match your personal brand and industry.",
    icon: <Palette className="h-8 w-8 text-resume-primary" />
  },
  {
    title: "Industry-Specific Suggestions",
    description: "Receive tailored content suggestions based on your target industry and role.",
    icon: <Award className="h-8 w-8 text-resume-primary" />
  },
  {
    title: "Instant Download",
    description: "Download your finished resume in PDF, DOCX, or other formats with one click.",
    icon: <Zap className="h-8 w-8 text-resume-primary" />
  }
];

const FeaturesSection = () => {
  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Powerful Features</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Create professional, ATS-optimized resumes with these powerful tools
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:border-resume-primary hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
