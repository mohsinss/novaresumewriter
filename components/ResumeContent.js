import { Avatar, AvatarImage } from "@/components/ui/avatar"
import AppRes from "./ResumeContent/AppRes"

export default function ResumeContent() {
  return (
    <div className="flex flex-col p-4 bg-white" style={{ width: '794px', height: '1123px', margin: '20px'}}> {/* Custom style for A4 size */}
     <AppRes />
    </div>
  )
}