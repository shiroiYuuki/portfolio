import { ExpertiseItem, LearnJourneyItem } from './types';

export const PERSONAL_INFO = {
  name: 'Yuuki.Onion',
  role: 'Tech Enthusiast & Student Builder',
  tagline: 'Just a tech enthusiast who enjoys coding, learning, and building useful things.',
  description: `Hi, I'm Yuuki.Onion.

I'm a technology enthusiast and self-driven learner with a passion for programming, Linux, networking, artificial intelligence, digital design, and video editing.

I enjoy building projects, solving problems, and exploring how technology works behind the scenes. Whether it's writing code, designing visuals, creating content, or experimenting with new ideas, I see every project as an opportunity to learn and improve.

Currently, I'm focused on developing my skills in Python, Linux, networking, AI platforms, digital design, and content creation. My goal is to combine technical knowledge and creativity to build useful, engaging, and meaningful digital experiences.

Learning never stops. Every project is a step forward.`,
  quote: {
    text: 'Learning never ends in technology. Every challenge is an open door to understand how the digital world really works, and every project teaches something new.',
    author: 'Yuuki.Onion'
  },
  education: 'Currently learning through hands-on projects, deep technical documentation, system experimentation, and continuous practice.',
  contact: {
    email: 'yuukianakmagang@gmail.com',
    github: 'https://github.com/shiroiYuuki',
    tiktok: 'https://www.tiktok.com/@yuutech.onion',
    youtube: 'https://www.youtube.com/@YuuTech-onion',
    saweria: 'https://saweria.co/YUUKINEKO',
    discord: 'yuuki_neko'
  }
};

export const EXPERTISE_ITEMS: ExpertiseItem[] = [
  {
    id: 'programming',
    title: 'Programming',
    description: 'Writing clean and optimized code. Currently studying Python, C++, and modern software paradigms.',
    iconName: 'Code'
  },
  {
    id: 'linux',
    title: 'Linux',
    description: 'Exploring system administration, writing shell scripts, configuring Unix environments, and understanding kernel concepts.',
    iconName: 'Terminal'
  },
  {
    id: 'networking',
    title: 'Networking',
    description: 'Understanding network architecture, protocols (TCP/IP, DNS, HTTP), routing, firewall rules, and virtual networks.',
    iconName: 'Globe'
  },
  {
    id: 'iot',
    title: 'Internet of Things',
    description: 'Exploring microcontroller platforms, smart automation designs, sensor integration, and home sandbox systems.',
    iconName: 'Cpu'
  },
  {
    id: 'problem-solving',
    title: 'Problem Solving',
    description: 'Approaching system bottlenecks, security flags, and algorithmic glitches with a logical, root-cause analytical mindset.',
    iconName: 'ShieldAlert'
  }
];

export const JOURNEY_ITEMS: LearnJourneyItem[] = [
  {
    id: '1',
    title: 'Exploring Artificial Intelligence',
    period: 'Mar 2026 - Present',
    status: 'Exploring',
    description: 'Experimenting with generative AI SDKs like @google/genai, exploring agent workflows, and integrating smart suggestions into micro-tools.',
    skills: ['Prompt Engineering', 'Gemini API', 'Model Context', 'Agent Flows']
  },
  {
    id: '2',
    title: 'Learning Web Development & UI Layouts',
    period: 'Jan 2026 - Present',
    status: 'In Progress',
    description: 'Designing highly responsive, dark-mode-first modular portfolio structures and interactive widgets using modern React and Tailwind CSS.',
    skills: ['React 19', 'Vite', 'Tailwind v4', 'State Management']
  },
  {
    id: '3',
    title: 'Learning Networking Foundations (TCP/IP)',
    period: 'Nov 2025 - Jan 2026',
    status: 'Completed',
    description: 'Studying subnet architecture, TCP/IP handshake mechanisms, router setups, DNS resolution, and troubleshooting ports using telnet, curl, and dig.',
    skills: ['TCP/IP', 'Routing Tables', 'DNS Hierarchy', 'Subnetting']
  },
  {
    id: '4',
    title: 'Learning Linux Administration & Scripts',
    period: 'Sep 2025 - Present',
    status: 'In Progress',
    description: 'Setting up headless server layouts, configuring user privileges, managing systemd services, and drafting automation bash/zsh scripts.',
    skills: ['Bash Scripting', 'SSH & Keys', 'Systemd Services', 'Permissions']
  },
  {
    id: '5',
    title: 'Python Fundamentals',
    period: 'Jun 2025 - Present',
    status: 'In Progress',
    description: 'Acquiring core programming structures. Built multi-threaded terminal calculators, directory clean-up scripts, and mock database queries.',
    skills: ['Python 3', 'File I/O', 'Data Structures', 'REST Endpoints']
  },
  {
    id: '8',
    title: 'C++ Fundamentals',
    period: 'Oct 2025 - Mar 2026',
    status: 'Completed',
    description: 'Mastering low-level performance concepts, memory allocation, standard structures, and robust object-oriented system development.',
    skills: ['C++', 'Pointers', 'OOP paradigm', 'System Algorithms']
  },
  {
    id: '6',
    title: 'Building Personal Projects & Sandbox Tools',
    period: 'Ongoing',
    status: 'Exploring',
    description: 'Creating local developer environments to test experimental code structures. Building toolkits to make task tracking easier.',
    skills: ['Git VCS', 'Local Servers', 'JSON Databases', 'Sandbox Runs']
  },
  {
    id: '7',
    title: 'Exploring Open Source Communities',
    period: 'Ongoing',
    status: 'Exploring',
    description: 'Reading public source-code hubs, contributing documentation, and reviewing code patterns to learn software architectures from experts.',
    skills: ['GitHub', 'Git Flow', 'Package Managers', 'Open Source Etiquette']
  }
];
