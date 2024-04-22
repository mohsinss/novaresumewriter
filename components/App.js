import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { AvatarImage, Avatar } from "@/components/ui/avatar"
import Header from "./Header"
import Sidebar from "./Sidebar"
import ResumeContent from "./ResumeContent"
import AppRes from "./ResumeContent/AppRes"


export default function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-grow">
        <Sidebar />
        <div className="flex-grow overflow-y-auto">
          <ResumeContent />
          <AppRes />
        </div>
      </div>
    </div>
  )
}