
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Minus, Sparkles } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface ResumeBuilderFormProps {
  initialData?: any;
  onUpdate: (data: any) => void;
}

const ResumeBuilderForm = ({ initialData, onUpdate }: ResumeBuilderFormProps) => {
  const [formData, setFormData] = useState(
    initialData || {
      personalInfo: {
        name: "",
        title: "",
        email: "",
        phone: "",
        location: "",
        website: "",
        linkedin: "",
        github: "",
      },
      summary: "",
      experience: [
        {
          title: "",
          company: "",
          location: "",
          startDate: "",
          endDate: "",
          description: "",
          highlights: [""],
        },
      ],
      education: [
        {
          degree: "",
          school: "",
          location: "",
          startDate: "",
          endDate: "",
          gpa: "",
          description: "",
        },
      ],
      skills: [
        {
          category: "Technical Skills",
          items: [""],
        },
      ],
      projects: [
        {
          name: "",
          description: "",
          technologies: [""],
          link: "",
        },
      ],
    }
  );
  
  const { toast } = useToast();

  const handlePersonalInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      personalInfo: {
        ...formData.personalInfo,
        [name]: value,
      },
    });
    onUpdate({
      ...formData,
      personalInfo: {
        ...formData.personalInfo,
        [name]: value,
      },
    });
  };

  const handleSummaryChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      summary: e.target.value,
    });
    onUpdate({
      ...formData,
      summary: e.target.value,
    });
  };

  const handleExperienceChange = (index: number, field: string, value: string) => {
    const updatedExperience = [...formData.experience];
    updatedExperience[index] = {
      ...updatedExperience[index],
      [field]: value,
    };
    
    setFormData({
      ...formData,
      experience: updatedExperience,
    });
    onUpdate({
      ...formData,
      experience: updatedExperience,
    });
  };

  const handleHighlightChange = (expIndex: number, highlightIndex: number, value: string) => {
    const updatedExperience = [...formData.experience];
    updatedExperience[expIndex].highlights[highlightIndex] = value;
    
    setFormData({
      ...formData,
      experience: updatedExperience,
    });
    onUpdate({
      ...formData,
      experience: updatedExperience,
    });
  };

  const addExperienceHighlight = (expIndex: number) => {
    const updatedExperience = [...formData.experience];
    updatedExperience[expIndex].highlights.push("");
    
    setFormData({
      ...formData,
      experience: updatedExperience,
    });
    onUpdate({
      ...formData,
      experience: updatedExperience,
    });
  };

  const removeExperienceHighlight = (expIndex: number, highlightIndex: number) => {
    const updatedExperience = [...formData.experience];
    updatedExperience[expIndex].highlights.splice(highlightIndex, 1);
    
    setFormData({
      ...formData,
      experience: updatedExperience,
    });
    onUpdate({
      ...formData,
      experience: updatedExperience,
    });
  };

  const addExperience = () => {
    setFormData({
      ...formData,
      experience: [
        ...formData.experience,
        {
          title: "",
          company: "",
          location: "",
          startDate: "",
          endDate: "",
          description: "",
          highlights: [""],
        },
      ],
    });
    onUpdate({
      ...formData,
      experience: [
        ...formData.experience,
        {
          title: "",
          company: "",
          location: "",
          startDate: "",
          endDate: "",
          description: "",
          highlights: [""],
        },
      ],
    });
  };

  const removeExperience = (index: number) => {
    const updatedExperience = [...formData.experience];
    updatedExperience.splice(index, 1);
    
    setFormData({
      ...formData,
      experience: updatedExperience,
    });
    onUpdate({
      ...formData,
      experience: updatedExperience,
    });
  };

  const handleEducationChange = (index: number, field: string, value: string) => {
    const updatedEducation = [...formData.education];
    updatedEducation[index] = {
      ...updatedEducation[index],
      [field]: value,
    };
    
    setFormData({
      ...formData,
      education: updatedEducation,
    });
    onUpdate({
      ...formData,
      education: updatedEducation,
    });
  };

  const addEducation = () => {
    setFormData({
      ...formData,
      education: [
        ...formData.education,
        {
          degree: "",
          school: "",
          location: "",
          startDate: "",
          endDate: "",
          gpa: "",
          description: "",
        },
      ],
    });
    onUpdate({
      ...formData,
      education: [
        ...formData.education,
        {
          degree: "",
          school: "",
          location: "",
          startDate: "",
          endDate: "",
          gpa: "",
          description: "",
        },
      ],
    });
  };

  const removeEducation = (index: number) => {
    const updatedEducation = [...formData.education];
    updatedEducation.splice(index, 1);
    
    setFormData({
      ...formData,
      education: updatedEducation,
    });
    onUpdate({
      ...formData,
      education: updatedEducation,
    });
  };

  const handleSkillCategoryChange = (index: number, value: string) => {
    const updatedSkills = [...formData.skills];
    updatedSkills[index].category = value;
    
    setFormData({
      ...formData,
      skills: updatedSkills,
    });
    onUpdate({
      ...formData,
      skills: updatedSkills,
    });
  };

  const handleSkillItemChange = (categoryIndex: number, itemIndex: number, value: string) => {
    const updatedSkills = [...formData.skills];
    updatedSkills[categoryIndex].items[itemIndex] = value;
    
    setFormData({
      ...formData,
      skills: updatedSkills,
    });
    onUpdate({
      ...formData,
      skills: updatedSkills,
    });
  };

  const addSkillItem = (categoryIndex: number) => {
    const updatedSkills = [...formData.skills];
    updatedSkills[categoryIndex].items.push("");
    
    setFormData({
      ...formData,
      skills: updatedSkills,
    });
    onUpdate({
      ...formData,
      skills: updatedSkills,
    });
  };

  const removeSkillItem = (categoryIndex: number, itemIndex: number) => {
    const updatedSkills = [...formData.skills];
    updatedSkills[categoryIndex].items.splice(itemIndex, 1);
    
    setFormData({
      ...formData,
      skills: updatedSkills,
    });
    onUpdate({
      ...formData,
      skills: updatedSkills,
    });
  };

  const addSkillCategory = () => {
    setFormData({
      ...formData,
      skills: [
        ...formData.skills,
        {
          category: "",
          items: [""],
        },
      ],
    });
    onUpdate({
      ...formData,
      skills: [
        ...formData.skills,
        {
          category: "",
          items: [""],
        },
      ],
    });
  };

  const removeSkillCategory = (index: number) => {
    const updatedSkills = [...formData.skills];
    updatedSkills.splice(index, 1);
    
    setFormData({
      ...formData,
      skills: updatedSkills,
    });
    onUpdate({
      ...formData,
      skills: updatedSkills,
    });
  };

  const handleProjectChange = (index: number, field: string, value: string) => {
    const updatedProjects = [...formData.projects];
    updatedProjects[index] = {
      ...updatedProjects[index],
      [field]: value,
    };
    
    setFormData({
      ...formData,
      projects: updatedProjects,
    });
    onUpdate({
      ...formData,
      projects: updatedProjects,
    });
  };

  const handleProjectTechChange = (projectIndex: number, techIndex: number, value: string) => {
    const updatedProjects = [...formData.projects];
    updatedProjects[projectIndex].technologies[techIndex] = value;
    
    setFormData({
      ...formData,
      projects: updatedProjects,
    });
    onUpdate({
      ...formData,
      projects: updatedProjects,
    });
  };

  const addProjectTech = (projectIndex: number) => {
    const updatedProjects = [...formData.projects];
    updatedProjects[projectIndex].technologies.push("");
    
    setFormData({
      ...formData,
      projects: updatedProjects,
    });
    onUpdate({
      ...formData,
      projects: updatedProjects,
    });
  };

  const removeProjectTech = (projectIndex: number, techIndex: number) => {
    const updatedProjects = [...formData.projects];
    updatedProjects[projectIndex].technologies.splice(techIndex, 1);
    
    setFormData({
      ...formData,
      projects: updatedProjects,
    });
    onUpdate({
      ...formData,
      projects: updatedProjects,
    });
  };

  const addProject = () => {
    setFormData({
      ...formData,
      projects: [
        ...formData.projects,
        {
          name: "",
          description: "",
          technologies: [""],
          link: "",
        },
      ],
    });
    onUpdate({
      ...formData,
      projects: [
        ...formData.projects,
        {
          name: "",
          description: "",
          technologies: [""],
          link: "",
        },
      ],
    });
  };

  const removeProject = (index: number) => {
    const updatedProjects = [...formData.projects];
    updatedProjects.splice(index, 1);
    
    setFormData({
      ...formData,
      projects: updatedProjects,
    });
    onUpdate({
      ...formData,
      projects: updatedProjects,
    });
  };

  const handleAIEnhance = (section: string, index?: number) => {
    // This is where you would integrate with the AI API
    toast({
      title: "AI Enhancement",
      description: "This feature requires an API key. Please configure your API key in the dashboard.",
    });
  };

  return (
    <Tabs defaultValue="personal" className="w-full">
      <TabsList className="grid grid-cols-5 mb-4">
        <TabsTrigger value="personal">Personal</TabsTrigger>
        <TabsTrigger value="experience">Experience</TabsTrigger>
        <TabsTrigger value="education">Education</TabsTrigger>
        <TabsTrigger value="skills">Skills</TabsTrigger>
        <TabsTrigger value="projects">Projects</TabsTrigger>
      </TabsList>
      
      {/* Personal Info Section */}
      <TabsContent value="personal">
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.personalInfo.name}
                    onChange={handlePersonalInfoChange}
                  />
                </div>
                <div>
                  <Label htmlFor="title">Professional Title</Label>
                  <Input
                    id="title"
                    name="title"
                    placeholder="Software Engineer"
                    value={formData.personalInfo.title}
                    onChange={handlePersonalInfoChange}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    value={formData.personalInfo.email}
                    onChange={handlePersonalInfoChange}
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="(123) 456-7890"
                    value={formData.personalInfo.phone}
                    onChange={handlePersonalInfoChange}
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  name="location"
                  placeholder="City, State, Country"
                  value={formData.personalInfo.location}
                  onChange={handlePersonalInfoChange}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="website">Website (Optional)</Label>
                  <Input
                    id="website"
                    name="website"
                    placeholder="https://yourwebsite.com"
                    value={formData.personalInfo.website}
                    onChange={handlePersonalInfoChange}
                  />
                </div>
                <div>
                  <Label htmlFor="linkedin">LinkedIn (Optional)</Label>
                  <Input
                    id="linkedin"
                    name="linkedin"
                    placeholder="linkedin.com/in/johndoe"
                    value={formData.personalInfo.linkedin}
                    onChange={handlePersonalInfoChange}
                  />
                </div>
                <div>
                  <Label htmlFor="github">GitHub (Optional)</Label>
                  <Input
                    id="github"
                    name="github"
                    placeholder="github.com/johndoe"
                    value={formData.personalInfo.github}
                    onChange={handlePersonalInfoChange}
                  />
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <Label htmlFor="summary">Professional Summary</Label>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => handleAIEnhance("summary")}
                  >
                    <Sparkles className="h-4 w-4 mr-1 text-resume-primary" /> Enhance with AI
                  </Button>
                </div>
                <Textarea
                  id="summary"
                  placeholder="Write a brief summary of your professional background and key qualifications..."
                  value={formData.summary}
                  onChange={handleSummaryChange}
                  rows={4}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      {/* Experience Section */}
      <TabsContent value="experience">
        <div className="space-y-6">
          {formData.experience.map((exp, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium">Experience {index + 1}</h3>
                  <div className="flex gap-2">
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => handleAIEnhance("experience", index)}
                    >
                      <Sparkles className="h-4 w-4 mr-1 text-resume-primary" /> Enhance
                    </Button>
                    {formData.experience.length > 1 && (
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={() => removeExperience(index)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor={`exp-title-${index}`}>Job Title</Label>
                      <Input
                        id={`exp-title-${index}`}
                        placeholder="Software Engineer"
                        value={exp.title}
                        onChange={(e) => handleExperienceChange(index, "title", e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor={`exp-company-${index}`}>Company</Label>
                      <Input
                        id={`exp-company-${index}`}
                        placeholder="Acme Corp"
                        value={exp.company}
                        onChange={(e) => handleExperienceChange(index, "company", e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor={`exp-location-${index}`}>Location</Label>
                      <Input
                        id={`exp-location-${index}`}
                        placeholder="City, State"
                        value={exp.location}
                        onChange={(e) => handleExperienceChange(index, "location", e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor={`exp-start-${index}`}>Start Date</Label>
                      <Input
                        id={`exp-start-${index}`}
                        placeholder="Jan 2020"
                        value={exp.startDate}
                        onChange={(e) => handleExperienceChange(index, "startDate", e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor={`exp-end-${index}`}>End Date</Label>
                      <Input
                        id={`exp-end-${index}`}
                        placeholder="Present"
                        value={exp.endDate}
                        onChange={(e) => handleExperienceChange(index, "endDate", e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor={`exp-description-${index}`}>Description</Label>
                    <Textarea
                      id={`exp-description-${index}`}
                      placeholder="Brief overview of your role and responsibilities..."
                      value={exp.description}
                      onChange={(e) => handleExperienceChange(index, "description", e.target.value)}
                      rows={3}
                    />
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <Label>Key Achievements/Responsibilities</Label>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => addExperienceHighlight(index)}
                      >
                        <Plus className="h-4 w-4 mr-1" /> Add Bullet
                      </Button>
                    </div>
                    
                    {exp.highlights.map((highlight, hIndex) => (
                      <div key={hIndex} className="flex items-center gap-2 mb-2">
                        <Input
                          placeholder="Developed a feature that increased conversion by 20%..."
                          value={highlight}
                          onChange={(e) => handleHighlightChange(index, hIndex, e.target.value)}
                        />
                        {exp.highlights.length > 1 && (
                          <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            onClick={() => removeExperienceHighlight(index, hIndex)}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          
          <Button
            type="button"
            variant="outline"
            onClick={addExperience}
            className="w-full"
          >
            <Plus className="h-4 w-4 mr-2" /> Add Another Experience
          </Button>
        </div>
      </TabsContent>
      
      {/* Education Section */}
      <TabsContent value="education">
        <div className="space-y-6">
          {formData.education.map((edu, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium">Education {index + 1}</h3>
                  {formData.education.length > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => removeEducation(index)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                  )}
                </div>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor={`edu-degree-${index}`}>Degree/Certificate</Label>
                      <Input
                        id={`edu-degree-${index}`}
                        placeholder="Bachelor of Science in Computer Science"
                        value={edu.degree}
                        onChange={(e) => handleEducationChange(index, "degree", e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor={`edu-school-${index}`}>School/University</Label>
                      <Input
                        id={`edu-school-${index}`}
                        placeholder="University of Technology"
                        value={edu.school}
                        onChange={(e) => handleEducationChange(index, "school", e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor={`edu-location-${index}`}>Location</Label>
                      <Input
                        id={`edu-location-${index}`}
                        placeholder="City, State"
                        value={edu.location}
                        onChange={(e) => handleEducationChange(index, "location", e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor={`edu-start-${index}`}>Start Date</Label>
                      <Input
                        id={`edu-start-${index}`}
                        placeholder="Sep 2016"
                        value={edu.startDate}
                        onChange={(e) => handleEducationChange(index, "startDate", e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor={`edu-end-${index}`}>End Date</Label>
                      <Input
                        id={`edu-end-${index}`}
                        placeholder="May 2020"
                        value={edu.endDate}
                        onChange={(e) => handleEducationChange(index, "endDate", e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor={`edu-gpa-${index}`}>GPA (Optional)</Label>
                    <Input
                      id={`edu-gpa-${index}`}
                      placeholder="3.8/4.0"
                      value={edu.gpa}
                      onChange={(e) => handleEducationChange(index, "gpa", e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor={`edu-description-${index}`}>Description (Optional)</Label>
                    <Textarea
                      id={`edu-description-${index}`}
                      placeholder="Relevant coursework, honors, activities..."
                      value={edu.description}
                      onChange={(e) => handleEducationChange(index, "description", e.target.value)}
                      rows={3}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          
          <Button
            type="button"
            variant="outline"
            onClick={addEducation}
            className="w-full"
          >
            <Plus className="h-4 w-4 mr-2" /> Add Another Education
          </Button>
        </div>
      </TabsContent>
      
      {/* Skills Section */}
      <TabsContent value="skills">
        <div className="space-y-6">
          {formData.skills.map((skill, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-center mb-4">
                  <Label htmlFor={`skill-category-${index}`}>Skill Category</Label>
                  {formData.skills.length > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => removeSkillCategory(index)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                  )}
                </div>
                
                <Input
                  id={`skill-category-${index}`}
                  placeholder="Technical Skills, Languages, Tools, etc."
                  value={skill.category}
                  onChange={(e) => handleSkillCategoryChange(index, e.target.value)}
                  className="mb-4"
                />
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center mb-2">
                    <Label>Skills</Label>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => addSkillItem(index)}
                    >
                      <Plus className="h-4 w-4 mr-1" /> Add Skill
                    </Button>
                  </div>
                  
                  {skill.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-2 mb-2">
                      <Input
                        placeholder="JavaScript, Python, React, etc."
                        value={item}
                        onChange={(e) => handleSkillItemChange(index, itemIndex, e.target.value)}
                      />
                      {skill.items.length > 1 && (
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          onClick={() => removeSkillItem(index, itemIndex)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
          
          <Button
            type="button"
            variant="outline"
            onClick={addSkillCategory}
            className="w-full"
          >
            <Plus className="h-4 w-4 mr-2" /> Add Another Skill Category
          </Button>
        </div>
      </TabsContent>
      
      {/* Projects Section */}
      <TabsContent value="projects">
        <div className="space-y-6">
          {formData.projects.map((project, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium">Project {index + 1}</h3>
                  {formData.projects.length > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => removeProject(index)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                  )}
                </div>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor={`project-name-${index}`}>Project Name</Label>
                    <Input
                      id={`project-name-${index}`}
                      placeholder="E-Commerce Platform"
                      value={project.name}
                      onChange={(e) => handleProjectChange(index, "name", e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <Label htmlFor={`project-description-${index}`}>Description</Label>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => handleAIEnhance("project", index)}
                      >
                        <Sparkles className="h-4 w-4 mr-1 text-resume-primary" /> Enhance with AI
                      </Button>
                    </div>
                    <Textarea
                      id={`project-description-${index}`}
                      placeholder="Describe your project, your role, and the impact it had..."
                      value={project.description}
                      onChange={(e) => handleProjectChange(index, "description", e.target.value)}
                      rows={3}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor={`project-link-${index}`}>Project Link (Optional)</Label>
                    <Input
                      id={`project-link-${index}`}
                      placeholder="https://github.com/yourusername/project"
                      value={project.link}
                      onChange={(e) => handleProjectChange(index, "link", e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <Label>Technologies Used</Label>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => addProjectTech(index)}
                      >
                        <Plus className="h-4 w-4 mr-1" /> Add Technology
                      </Button>
                    </div>
                    
                    {project.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="flex items-center gap-2 mb-2">
                        <Input
                          placeholder="React, Node.js, MongoDB, etc."
                          value={tech}
                          onChange={(e) => handleProjectTechChange(index, techIndex, e.target.value)}
                        />
                        {project.technologies.length > 1 && (
                          <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            onClick={() => removeProjectTech(index, techIndex)}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          
          <Button
            type="button"
            variant="outline"
            onClick={addProject}
            className="w-full"
          >
            <Plus className="h-4 w-4 mr-2" /> Add Another Project
          </Button>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default ResumeBuilderForm;
