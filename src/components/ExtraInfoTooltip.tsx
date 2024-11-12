import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info } from "lucide-react";

interface ExtraInfoTooltipProps {
  description?: string;
  size?: number;
  children?: React.ReactNode;
  className?: string;
}

export default function ExtraInfoTooltip({
  description,
  size,
  children,
  className,
}: ExtraInfoTooltipProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Info size={size} className={className} />
        </TooltipTrigger>
        <TooltipContent
          side="top"
          align="center"
          sideOffset={10}
          className="border-gray-700 border"
        >
          {children || description}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
