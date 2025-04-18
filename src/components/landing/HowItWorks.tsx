
import { motion } from "framer-motion";
import { FileText, Edit, Download } from "lucide-react";

const steps = [
  {
    title: "Choose Your Template",
    description: "Select from our collection of professional, ATS-friendly resume templates designed for your industry.",
    icon: <FileText className="h-8 w-8 text-white" />,
    color: "bg-resume-primary"
  },
  {
    title: "Add Your Information",
    description: "Input your details or upload an existing resume. Our AI will help enhance and optimize your content.",
    icon: <Edit className="h-8 w-8 text-white" />,
    color: "bg-resume-secondary"
  },
  {
    title: "Download & Apply",
    description: "Download your finished resume in your preferred format and start applying for your dream jobs.",
    icon: <Download className="h-8 w-8 text-white" />,
    color: "bg-resume-accent"
  }
];

const HowItWorks = () => {
  return (
    <div className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Creating a professional resume has never been easier
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-start justify-between max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center mb-10 md:mb-0 w-full md:w-1/3 md:px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block h-0.5 w-full bg-gray-200 absolute top-8 left-1/2 z-0"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
