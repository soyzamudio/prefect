import { Info } from "lucide-react";
import React, { useState } from "react";
import ExtraInfoModal from "./ExtraInfoModal";
import ExtraInfoTooltip from "./ExtraInfoTooltip";

type Size = "small" | "default" | "large";

interface ExtraInformationProps {
  type: "tooltip" | "modal";
  title?: string;
  description?: string;
  size?: Size;
  children?: React.ReactNode;
  actions?: React.ReactNode;
  iconSize?: Size;
  className?: string;
}

export default function ExtraInformation({
  type = "tooltip",
  title,
  description,
  size = "default",
  children,
  actions,
  className = "",
}: ExtraInformationProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const iconSizes: Record<Size, number> = {
    small: 14,
    default: 16,
    large: 20,
  };

  if (type === "tooltip") {
    return (
      <ExtraInfoTooltip
        description={description}
        size={iconSizes[size]}
        className={className}
      >
        {children}
      </ExtraInfoTooltip>
    );
  }

  if (type === "modal") {
    return (
      <>
        <button
          type="button"
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
            e.stopPropagation();
            setIsOpen(true);
          }}
        >
          <Info size={iconSizes[size]} className={className} /> {isOpen}
        </button>
        <ExtraInfoModal
          title={title}
          isOpen={isOpen}
          onOpenChange={setIsOpen}
          actions={actions}
        >
          {children}
        </ExtraInfoModal>
      </>
    );
  }

  return null;
}
