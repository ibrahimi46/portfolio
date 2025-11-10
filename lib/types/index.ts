export interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  featured?: boolean;
}

export interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    tags: string[];
    github?: string;
    live?: string;
    featured?: boolean;
  };
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}