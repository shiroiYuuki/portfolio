export interface ExpertiseItem {
  id: string;
  title: string;
  description: string;
  iconName: string; // Used to dynamically choose lucide icons
}

export interface LearnJourneyItem {
  id: string;
  title: string;
  period: string;
  status: 'In Progress' | 'Completed' | 'Exploring';
  description: string;
  skills: string[];
}

export interface ContactInfo {
  email: string;
  github: string;
}
