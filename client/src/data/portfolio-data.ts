import { Shield, Network, Server, Code, Cloud, SearchCode, Lock, Cpu } from 'lucide-react';

export interface Skill {
  title: string;
  skills: string;
}

export interface Certification {
  title: string;
  icon: React.ReactNode;
}

export interface Experience {
  title: string;
  organization?: string;
  date: string;
  responsibilities: string[];
}

export interface Affiliation {
  title: string;
  organization: string;
  icon: React.ReactNode;
}

export interface Publication {
  title: string;
  authors: string;
  tags: string[];
  citations: number;
  link: string;
}

export interface Project {
  title: string;
  year: string;
  description: string;
  technologies: string[];
  icon: React.ReactNode;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
}

export interface Award {
  title: string;
  year: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
}

// Data export will be implemented here when needed
