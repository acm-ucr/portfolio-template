import { DesignIcon, ToolIcon, EfficiencyIcon, SupportIcon } from "./icons";
import { ReactNode } from "react";

interface BoxItem {
  id: string;
  icon: ReactNode;
  name: string;
  description: string;
}

export const boxes: BoxItem[] = [
  {
    id: "designBox",
    icon: DesignIcon,
    name: "Best Design Practices",
    description:
      "Crafting intuitive, accessible, and modern interfaces focused on seamless user experiences and clean aesthetics",
  },
  {
    id: "toolBox",
    icon: ToolIcon,
    name: "Pro Tools",
    description:
      "Leveraging industry-standard modern stacks including Next.js, React, and Tailwind CSS to build robust applications",
  },
  {
    id: "efficiencyBox",
    icon: EfficiencyIcon,
    name: "High Efficiency",
    description:
      "Writing optimized, performant code and streamlined workflows to ensure fast load times and clean architecture",
  },
  {
    id: "supportBox",
    icon: SupportIcon,
    name: "Support",
    description:
      "Providing continuous collaboration, clear communication, and reliable maintenance throughout the development lifecycle",
  },
];
