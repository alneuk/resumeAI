
import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { Plus, Upload, FileText, Edit } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [openApiKeyDialog, setOpenApiKeyDialog] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const { toast } = useToast();

  const handleSaveApiKey = () => {
    // In a real app, you would securely store this API key
    localStorage.setItem("resumepulse_api_key", apiKey);
    
    toast({
      title: "API Key Saved",
      description: "Your API key has been saved successfully.",
    });
    
    setOpenApiKeyDialog(false);
  };

  const resumes = [
    {
      id: 1,
      title: "Software Developer Resume",
      lastUpdated: "2 days ago",
      template: "Modern"
    },
    {
      id: 2,
      title: "Product Manager Application",
      lastUpdated: "1 week ago",
      template: "Professional"
    }
  ];

  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Manage your resumes and settings here.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="col-span-1">
            <CardHeader className="pb-2">
              <CardTitle>API Integration</CardTitle>
              <CardDescription>Connect your AI API key for enhanced features</CardDescription>
            </CardHeader>
            <CardContent>
              <Dialog open={openApiKeyDialog} onOpenChange={setOpenApiKeyDialog}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full">Configure API Key</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Set your API Key</DialogTitle>
                    <DialogDescription>
                      Enter your AI API key to enable AI-powered features like content enhancement, summary generation, and more.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="apiKey">API Key</Label>
                      <Input
                        id="apiKey"
                        placeholder="Enter your API key"
                        value={apiKey}
                        onChange={(e) => setApiKey(e.target.value)}
                      />
                      <p className="text-sm text-gray-500">Your API key is stored securely and never shared.</p>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit" onClick={handleSaveApiKey}>Save Key</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
          
          <Card className="col-span-1">
            <CardHeader className="pb-2">
              <CardTitle>Quick Stats</CardTitle>
              <CardDescription>Overview of your resume activity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Total Resumes</span>
                  <span className="font-medium">{resumes.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Last Updated</span>
                  <span className="font-medium">{resumes[0]?.lastUpdated || "N/A"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">AI Features</span>
                  <span className="font-medium text-yellow-600">
                    {localStorage.getItem("resumepulse_api_key") ? "Enabled" : "Disabled"}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="col-span-1">
            <CardHeader className="pb-2">
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Create or modify your resumes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Link to="/builder">
                <Button className="w-full mb-2 bg-resume-primary hover:bg-resume-secondary">
                  <Plus className="h-4 w-4 mr-2" /> New Resume
                </Button>
              </Link>
              <Link to="/builder?upload=true">
                <Button variant="outline" className="w-full">
                  <Upload className="h-4 w-4 mr-2" /> Upload Resume
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="resumes" className="w-full">
          <TabsList>
            <TabsTrigger value="resumes">My Resumes</TabsTrigger>
            <TabsTrigger value="templates">Templates</TabsTrigger>
          </TabsList>
          
          <TabsContent value="resumes" className="space-y-4 mt-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">My Resumes</h2>
              <Link to="/builder">
                <Button size="sm" className="bg-resume-primary hover:bg-resume-secondary">
                  <Plus className="h-4 w-4 mr-2" /> Create New
                </Button>
              </Link>
            </div>
            
            {resumes.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {resumes.map((resume) => (
                  <Card key={resume.id}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{resume.title}</CardTitle>
                      <CardDescription>Last updated: {resume.lastUpdated}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-sm">
                        <span className="text-gray-500">Template: </span>
                        <span>{resume.template}</span>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm">
                        <FileText className="h-4 w-4 mr-2" /> Preview
                      </Button>
                      <Link to={`/builder/${resume.id}`}>
                        <Button size="sm" className="bg-resume-primary hover:bg-resume-secondary">
                          <Edit className="h-4 w-4 mr-2" /> Edit
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-8">
                  <FileText className="h-12 w-12 text-gray-400 mb-4" />
                  <p className="text-gray-600 mb-4">You haven't created any resumes yet</p>
                  <Link to="/builder">
                    <Button className="bg-resume-primary hover:bg-resume-secondary">
                      <Plus className="h-4 w-4 mr-2" /> Create Your First Resume
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )}
          </TabsContent>
          
          <TabsContent value="templates" className="space-y-4 mt-6">
            <h2 className="text-xl font-semibold">Available Templates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {["Modern", "Professional", "Creative", "Minimal", "Executive", "Technical"].map((template, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{template}</CardTitle>
                    <CardDescription>ATS-friendly professional design</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-32 bg-gray-100 rounded-md flex items-center justify-center">
                      <span className="text-gray-500 text-sm">Template Preview</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link to={`/builder?template=${template.toLowerCase()}`} className="w-full">
                      <Button className="w-full bg-resume-primary hover:bg-resume-secondary">
                        Use This Template
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
