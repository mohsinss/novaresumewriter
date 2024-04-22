import { Button } from "@/components/ui/button"

export default function Sidebar() {
  return (
    <div className="flex flex-col items-center bg-[#34495e] p-4 text-white space-y-4">
      <Button className="text-left w-full">My Content</Button>
      <Button className="text-left w-full">Switch Template</Button>
      <Button className="text-left w-full">AI Assistant</Button>
    </div>
  )
}