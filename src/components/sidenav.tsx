import {
  Home,
  SquareStack,
  Workflow,
  Rocket,
  Cpu,
  Bot,
  Asterisk,
  BellElectric,
  Lock,
  Search,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export default function Sidenav() {
  return (
    <div className="flex flex-col gap-y-6">
      <div className="flex items-center gap-x-4">
        <Select>
          <SelectTrigger className="flex-1" value="dev">
            <SelectValue placeholder="Environment" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="dev">dev</SelectItem>
            <SelectItem value="stage">stage</SelectItem>
            <SelectItem value="prod">production</SelectItem>
          </SelectContent>
        </Select>
        <Search size={24} className="cursor-pointer" />
      </div>
      <ul className="flex flex-col gap-y-1 text-sm">
        <li className="flex justify-between items-center bg-slate-600 px-2 py-1 rounded-md w-full cursor-pointer">
          <div className="flex items-center gap-x-2">
            <Home size={14} /> Home
          </div>
        </li>
        <li className="flex justify-between items-center hover:bg-slate-600 px-2 py-1 rounded-md w-full cursor-pointer">
          <div className="flex items-center gap-x-2">
            <SquareStack size={14} /> Runs
          </div>
        </li>
        <li className="flex justify-between items-center hover:bg-slate-600 px-2 py-1 rounded-md w-full cursor-pointer">
          <div className="flex items-center gap-x-2">
            <Workflow size={14} /> Flow
          </div>
        </li>
        <li className="flex justify-between items-center hover:bg-slate-600 px-2 py-1 rounded-md w-full cursor-pointer">
          <div className="flex items-center gap-x-2">
            <Rocket size={14} /> Deployments
          </div>
        </li>
        <li className="flex justify-between items-center hover:bg-slate-600 px-2 py-1 rounded-md w-full cursor-pointer">
          <div className="flex items-center gap-x-2">
            <Cpu size={14} /> Work Pools
          </div>
        </li>
        <li className="flex justify-between items-center hover:bg-slate-600 px-2 py-1 rounded-md w-full cursor-pointer">
          <div className="flex items-center gap-x-2">
            <Bot size={14} /> Automations
          </div>
        </li>
        <li className="flex justify-between items-center hover:bg-slate-600 px-2 py-1 rounded-md w-full cursor-pointer">
          <div className="flex items-center gap-x-2">
            <Asterisk size={14} /> Event Feeds
          </div>
        </li>
        <li className="flex justify-between items-center hover:bg-slate-600 px-2 py-1 rounded-md w-full cursor-pointer">
          <div className="flex items-center gap-x-2">
            <BellElectric size={14} /> Incidents
          </div>
          <Lock size={14} className="text-neutral-500" />
        </li>
      </ul>
    </div>
  );
}
