import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import anthropic from "anthropic";

export default function Sidebar({ onTemplateChange, experienceItems, setExperienceItems }) {
  const [showTemplateButtons, setShowTemplateButtons] = useState(false);
  const [showAIAssistant, setShowAIAssistant] = useState(false);
  const [keywords, setKeywords] = useState("");
  const [text, setText] = useState("");
  const [languageStyle, setLanguageStyle] = useState("professional");

  const handleTemplateClick = () => {
    setShowTemplateButtons(!showTemplateButtons);
  };

  const handleAIAssistantClick = () => {
    setShowAIAssistant(!showAIAssistant);
  };

  const handleSubmit = async () => {
    console.log("handleSubmit called");
    console.log({ experienceItems, text, languageStyle, keywords }); // Log the data being sent

    try {
        const response = await fetch("/api/generateBulletPoints", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ experienceItems, text, languageStyle, keywords }),
        });

        console.log("Response received:", response);  // Log the raw response object

        if (response.ok) {
            const data = await response.json();
            console.log("Data received:", data);  // Log the parsed data
            const updatedExperienceItems = data.experienceItems;
            console.log("Updated experience items:", updatedExperienceItems);  // Log the updated experience items

            setExperienceItems(updatedExperienceItems);
        } else {
            console.error("Error generating bullet points:", response.statusText);
            response.text().then(text => console.error("Error details:", text));
        }
    } catch (error) {
        console.error("Error generating bullet points:", error);
    }
};

  

  const colors = [
    "blue",
    "green",
    "red",
    "purple",
    "orange",
    "yellow",
    "teal",
    "pink",
    "indigo",
    "gray",
    "black",
    "brown",
  ];

  return (
    <div className="flex flex-col items-center bg-[#34495e] p-4 text-white space-y-4">
      <Button className="text-left w-full">My Content</Button>
      <Button className="text-left w-full" onClick={handleTemplateClick}>
        Switch Template
      </Button>
      {showTemplateButtons && (
        <div className="grid grid-cols-4 gap-2">
          {colors.map((color) => (
            <div
              key={color}
              className={`w-6 h-6 rounded-full cursor-pointer`}
              style={{ backgroundColor: color }}
              onClick={() => onTemplateChange(color)}
            />
          ))}
        </div>
      )}
      <Button className="text-left w-full" onClick={handleAIAssistantClick}>
        AI Assistant
      </Button>
      {showAIAssistant && (
        <div className="space-y-4 w-full">
          <Input
            type="text"
            placeholder="Keywords"
            color="black"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            style={{ color: "black" }}

          />
<Textarea
  placeholder="Enter text..."
  value={text}
  onChange={(e) => setText(e.target.value)}
  style={{ color: "black" }}
/>
          <Select onValueChange={(value) => setLanguageStyle(value)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select language style" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="professional">Professional</SelectItem>
              <SelectItem value="serious">Serious</SelectItem>
              <SelectItem value="funny">Funny</SelectItem>
              <SelectItem value="old-english">Old English</SelectItem>
              <SelectItem value="texan-english">Texan English</SelectItem>
              <SelectItem value="artist">Artist</SelectItem>
            </SelectContent>
          </Select>
          <Button className="bg-blue-500 text-white w-full" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      )}
    </div>
  );
}