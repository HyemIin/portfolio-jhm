export interface Project {
  slug: string;
  title: string;
  description: string;
  category: string;
  company?: string;
  date: string;
  thumbnail: string;
  tags: string[];
  overview: string;
  role: string;
  team?: string;
  links?: { label: string; url: string }[];
  highlights: string[];
  techStack: string[];
}

export interface ProjectTopic {
  slug: string;
  title: string;
  icon: string;
  summary: string;
  problem: string[];
  solution: string[];
  result: string[];
  retrospect?: string[];
  flow?: string[];
}
