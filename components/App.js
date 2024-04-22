import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { AvatarImage, Avatar } from "@/components/ui/avatar"
import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import ResumeContent from "./ResumeContent";

export default function App() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const handleTemplateChange = (color) => {
    setSelectedTemplate(color);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-grow">
        <Sidebar onTemplateChange={handleTemplateChange} />
        <div className="flex-grow overflow-y-auto">
          <ResumeContent selectedTemplate={selectedTemplate} />
        </div>
      </div>
    </div>
  );
}