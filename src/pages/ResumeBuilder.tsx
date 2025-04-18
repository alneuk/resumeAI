
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { ArrowLeft, Save } from "lucide-react";
import ResumeBuilderForm from "@/components/resume/ResumeBuilderForm";
import ResumeTemplate from "@/components/resume/ResumeTemplate";

const sampleResumeData = {
  personalInfo: {
    name: "Jane Smith",
    title: "Senior Frontend Developer",
    email: "jane.smith@example.com",
    phone: "(555) 123-4567",
    location: "San Francisco, CA",
    website: "janesmith.dev",
    linkedin: "linkedin.com/in/janesmith",
    github: "github.com/janesmith",
  },
  summary: "Experienced frontend developer with 5+ years of expertise in building responsive web applications using React, TypeScript, and modern frontend technologies. Passionate about creating intuitive user interfaces and optimizing application performance.",
  experience: [
    {
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      startDate: "January 2020",
      endDate: "Present",
      description: "Lead frontend developer for a SaaS platform with over 10,000 active users.",
      highlights: [
        "Architected and implemented a component library used across multiple products, reducing development time by 40%",
        "Optimized application performance, improving load time by 60% and user retention by 25%",
        "Mentored junior developers and established best practices for frontend development"
      ],
    },
    {
      title: "Frontend Developer",
      company: "WebSolutions Agency",
      location: "San Francisco, CA",
      startDate: "June 2017",
      endDate: "December 2019",
      description: "Developed responsive web applications for various clients in different industries.",
      highlights: [
        "Built interactive dashboards using React, Redux, and D3.js for data visualization",
        "Implemented responsive designs ensuring compatibility across all modern browsers and devices",
        "Collaborated with designers to transform Figma mockups into pixel-perfect interfaces"
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of California",
      location: "Berkeley, CA",
      startDate: "August 2013",
      endDate: "May 2017",
      gpa: "3.8/4.0",
      description: "Coursework included Web Development, Data Structures, Algorithms, and Software Engineering.",
    },
  ],
  skills: [
    {
      category: "Frontend Technologies",
      items: ["React", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3/SCSS", "Redux"],
    },
    {
      category: "Tools & Methodologies",
      items: ["Git", "Webpack", "Jest", "Agile/Scrum", "CI/CD", "Responsive Design"],
    },
  ],
  projects: [
    {
      name: "E-commerce Platform",
      description: "A fully responsive e-commerce platform with product catalog, shopping cart, and payment integration.",
      technologies: ["React", "Redux", "Node.js", "Express", "MongoDB"],
      link: "github.com/janesmith/ecommerce",
    },
    {
      name: "Data Visualization Dashboard",
      description: "Interactive dashboard displaying real-time analytics with filterable charts and graphs.",
      technologies: ["React", "D3.js", "Firebase", "Tailwind CSS"],
      link: "github.com/janesmith/dashboardapp",
    },
  ],
};

const ResumeBuilder = () => {
  const [resumeData, setResumeData] = useState(sampleResumeData);
  const [activeView, setActiveView] = useState("edit");
  const [selectedTemplate, setSelectedTemplate] = useState("modern");
  const [isSaving, setIsSaving] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  
  // Parse URL parameters (for template selection, etc.)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const template = params.get("template");
    
    if (template) {
      setSelectedTemplate(template);
    }
    
    // If upload=true is in the URL, we would show the upload UI
    // This would be implemented with actual upload functionality
  }, [location]);
  
  const handleUpdateResumeData = (data: any) => {
    setResumeData(data);
  };
  
  const handleSaveResume = () => {
    setIsSaving(true);
    
    // Mock API call to save resume
    setTimeout(() => {
      toast({
        title: "Resume Saved",
        description: "Your resume has been saved successfully.",
      });
      setIsSaving(false);
    }, 1500);
  };
  
  const handleBack = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-4 sm:px-6 lg:px-8">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Button variant="ghost" onClick={handleBack} className="mr-4">
              <ArrowLeft className="h-4 w-4 mr-2" /> Back
            </Button>
            <h1 className="text-xl font-semibold">Resume Builder</h1>
          </div>
          
          <div className="flex items-center space-x-2">
            <Tabs value={activeView} onValueChange={setActiveView} className="w-auto">
              <TabsList>
                <TabsTrigger value="edit">Edit</TabsTrigger>
                <TabsTrigger value="preview">Preview</TabsTrigger>
              </TabsList>
            </Tabs>
            
            <Button onClick={handleSaveResume} disabled={isSaving} className="bg-resume-primary hover:bg-resume-secondary">
              <Save className="h-4 w-4 mr-2" /> {isSaving ? "Saving..." : "Save Resume"}
            </Button>
          </div>
        </div>
      </header>
      
      <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <TabsContent value="edit" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <div className="sticky top-24">
                <Card className="p-4 mb-4">
                  <h2 className="text-lg font-semibold mb-4">Template</h2>
                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      variant={selectedTemplate === "modern" ? "default" : "outline"}
                      className={selectedTemplate === "modern" ? "bg-resume-primary hover:bg-resume-secondary" : ""}
                      onClick={() => setSelectedTemplate("modern")}
                    >
                      Modern
                    </Button>
                    <Button
                      variant={selectedTemplate === "professional" ? "default" : "outline"}
                      className={selectedTemplate === "professional" ? "bg-resume-primary hover:bg-resume-secondary" : ""}
                      onClick={() => setSelectedTemplate("professional")}
                      disabled
                    >
                      Professional
                    </Button>
                    <Button
                      variant={selectedTemplate === "creative" ? "default" : "outline"}
                      className={selectedTemplate === "creative" ? "bg-resume-primary hover:bg-resume-secondary" : ""}
                      onClick={() => setSelectedTemplate("creative")}
                      disabled
                    >
                      Creative
                    </Button>
                    <Button
                      variant={selectedTemplate === "minimal" ? "default" : "outline"}
                      className={selectedTemplate === "minimal" ? "bg-resume-primary hover:bg-resume-secondary" : ""}
                      onClick={() => setSelectedTemplate("minimal")}
                      disabled
                    >
                      Minimal
                    </Button>
                  </div>
                </Card>
                
                <Card className="p-4">
                  <h2 className="text-lg font-semibold mb-2">Tips</h2>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Keep your resume to 1-2 pages maximum</li>
                    <li>• Quantify achievements with numbers when possible</li>
                    <li>• Tailor your resume for each job application</li>
                    <li>• Use action verbs to start bullet points</li>
                    <li>• Check for typos and grammatical errors</li>
                  </ul>
                </Card>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <Card className="p-6">
                <ResumeBuilderForm
                  initialData={resumeData}
                  onUpdate={handleUpdateResumeData}
                />
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="preview" className="mt-0">
          <div className="bg-white p-4 rounded-lg shadow">
            <ResumeTemplate
              templateName={selectedTemplate}
              data={resumeData}
            />
          </div>
        </TabsContent>
      </div>
    </div>
  );
};

export default ResumeBuilder;
