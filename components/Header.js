import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { ColumnsIcon, PenToolIcon, ImageIcon, SettingsIcon, CloudIcon } from "./icons"

export default function Header() {
  return (
    <div className="flex items-center justify-between bg-[#2c3e50] p-4 text-white">
      <h1 className="text-xl font-bold">Magical Resume</h1>
      <div className="flex items-center space-x-4">
        <ColumnsIcon className="h-5 w-5" />
        <PenToolIcon className="h-5 w-5" />
        <ImageIcon className="h-5 w-5" />
        <SettingsIcon className="h-5 w-5" />
        <CloudIcon className="h-5 w-5" />
        <Button className="bg-[#1abc9c] text-white">Download</Button>
        <Switch id="optimize-toggle" />
        <Label className="text-sm" htmlFor="optimize-toggle">
          Optimizer
        </Label>
        <Badge variant="secondary">13</Badge>
        <Button className="block" variant="outline">
          My Documents
        </Button>
      </div>
    </div>
  )
}