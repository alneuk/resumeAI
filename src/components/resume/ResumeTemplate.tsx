
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Mail, Phone, MapPin, Globe, Linkedin, Github } from "lucide-react";

interface ResumeProps {
  templateName: string;
  data: {
    personalInfo: {
      name: string;
      title: string;
      email: string;
      phone: string;
      location: string;
      website?: string;
      linkedin?: string;
      github?: string;
    };
    summary: string;
    experience: Array<{
      title: string;
      company: string;
      location: string;
      startDate: string;
      endDate: string;
      description: string;
      highlights: string[];
    }>;
    education: Array<{
      degree: string;
      school: string;
      location: string;
      startDate: string;
      endDate: string;
      description?: string;
      gpa?: string;
    }>;
    skills: Array<{
      category: string;
      items: string[];
    }>;
    projects?: Array<{
      name: string;
      description: string;
      technologies: string[];
      link?: string;
    }>;
  };
}

const ResumeTemplate = ({ templateName, data }: ResumeProps) => {
  const [hovering, setHovering] = useState(false);
  
  const handleDownload = () => {
    // This would be the code to generate a PDF and download it
    console.log("Downloading resume...");
  };
  
  const renderModernTemplate = () => {
    return (
      <div className="bg-white shadow-lg p-8 max-w-4xl mx-auto">
        {/* Header - Personal Info */}
        <header className="mb-8 border-b border-gray-200 pb-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-1">{data.personalInfo.name}</h1>
          <p className="text-xl text-resume-primary mb-4">{data.personalInfo.title}</p>
          
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-1" /> {data.personalInfo.email}
            </div>
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-1" /> {data.personalInfo.phone}
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" /> {data.personalInfo.location}
            </div>
            {data.personalInfo.website && (
              <div className="flex items-center">
                <Globe className="h-4 w-4 mr-1" /> {data.personalInfo.website}
              </div>
            )}
            {data.personalInfo.linkedin && (
              <div className="flex items-center">
                <Linkedin className="h-4 w-4 mr-1" /> {data.personalInfo.linkedin}
              </div>
            )}
            {data.personalInfo.github && (
              <div className="flex items-center">
                <Github className="h-4 w-4 mr-1" /> {data.personalInfo.github}
              </div>
            )}
          </div>
        </header>
        
        {/* Summary */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-resume-primary mb-2">Professional Summary</h2>
          <p className="text-gray-700">{data.summary}</p>
        </section>
        
        {/* Experience */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-resume-primary mb-4">Work Experience</h2>
          <div className="space-y-4">
            {data.experience.map((job, index) => (
              <div key={index} className="border-l-2 border-resume-primary pl-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-900">{job.title}</h3>
                    <p className="text-gray-700">{job.company} • {job.location}</p>
                  </div>
                  <p className="text-sm text-gray-600">{job.startDate} - {job.endDate}</p>
                </div>
                <p className="mt-2 text-gray-700">{job.description}</p>
                <ul className="mt-2 list-disc list-inside text-gray-700">
                  {job.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        
        {/* Education */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-resume-primary mb-4">Education</h2>
          <div className="space-y-4">
            {data.education.map((edu, index) => (
              <div key={index} className="border-l-2 border-resume-primary pl-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                    <p className="text-gray-700">{edu.school} • {edu.location}</p>
                  </div>
                  <p className="text-sm text-gray-600">{edu.startDate} - {edu.endDate}</p>
                </div>
                {edu.gpa && <p className="mt-1 text-gray-700">GPA: {edu.gpa}</p>}
                {edu.description && <p className="mt-2 text-gray-700">{edu.description}</p>}
              </div>
            ))}
          </div>
        </section>
        
        {/* Skills */}
        <section>
          <h2 className="text-lg font-semibold text-resume-primary mb-4">Skills</h2>
          <div className="space-y-3">
            {data.skills.map((skillGroup, index) => (
              <div key={index}>
                <h3 className="font-medium text-gray-800">{skillGroup.category}</h3>
                <div className="mt-1 flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Projects (if available) */}
        {data.projects && data.projects.length > 0 && (
          <section className="mt-6">
            <h2 className="text-lg font-semibold text-resume-primary mb-4">Projects</h2>
            <div className="space-y-4">
              {data.projects.map((project, index) => (
                <div key={index} className="border-l-2 border-resume-primary pl-4">
                  <h3 className="font-semibold text-gray-900">{project.name}</h3>
                  <p className="mt-1 text-gray-700">{project.description}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" 
                      className="mt-1 inline-block text-sm text-resume-primary hover:underline">
                      View Project
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    );
  };

  return (
    <div 
      className="relative"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {hovering && (
        <div className="absolute top-4 right-4 z-10">
          <Button 
            onClick={handleDownload}
            className="bg-resume-primary hover:bg-resume-secondary"
            size="sm"
          >
            <Download className="h-4 w-4 mr-2" /> Download PDF
          </Button>
        </div>
      )}
      
      {templateName === "modern" && renderModernTemplate()}
    </div>
  );
};

export default ResumeTemplate;
