import { PersonalInfo, SkillCategory, Experience, Project } from '../types';

export const personalInfo: PersonalInfo = {
  name: "Ahmed Khaled Habiba",
  title: "Senior Software Engineer",
  location: "Remote • Egypt",
  email: "ahmedk4720@gmail.com",
  phone: "+20 1114447720",
  github: "https://github.com/AhmedKhaled007",
  domain: "ahmedhabiba.dev"
};

export const professionalSummary = "Senior Software Engineer with 5+ years of expertise architecting and optimizing enterprise-grade backend systems. Specialized in Python/FastAPI microservices with seamless machine learning integration, serving 10K+ requests/hour with 99.9% uptime. Proven track record in building secure authentication systems, implementing CI/CD pipelines, and leading cross-functional teams in Agile environments.";

export const skills: SkillCategory[] = [
  {
    category: "Core Backend",
    skills: ["Python", "FastAPI", "Django", "Flask", "RESTful APIs", "WebSockets", "Python Async"]
  },
  {
    category: "Frontend & Mobile",
    skills: ["React", "React Native", "JavaScript", "TypeScript", "HTML/CSS", "Bootstrap"]
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQLAlchemy"]
  },
  {
    category: "DevOps & Cloud",
    skills: ["Docker", "Docker Swarm", "GitHub Actions", "AWS", "Heroku", "Nginx", "Linux", "CI/CD"]
  },
  {
    category: "Architecture & Security",
    skills: ["Microservices", "Domain-Driven Design", "Load Balancing", "JWT", "OAuth 2.0", "RBAC", "API Gateway"]
  },
  {
    category: "AI/ML & Testing",
    skills: ["ML Model Fine-tuning", "Computer Vision", "OCR", "TDD", "Unit Testing", "RabbitMQ"]
  }
];

export const experiences: Experience[] = [
  {
    company: "Tech Company",
    position: "Senior Software Engineer",
    duration: "2020 - Present",
    description: [
      "Architected and optimized enterprise-grade backend systems serving 10K+ requests/hour",
      "Led development of Python/FastAPI microservices with ML integration",
      "Implemented secure authentication systems with JWT and OAuth 2.0",
      "Built CI/CD pipelines reducing deployment time by 60%"
    ],
    technologies: ["Python", "FastAPI", "Docker", "AWS", "PostgreSQL"]
  }
];

export const projects: Project[] = [
  {
    title: "ML-Powered Microservices Platform",
    description: "Enterprise-grade microservices platform with integrated machine learning capabilities for real-time data processing and analysis.",
    technologies: ["Python", "FastAPI", "Docker", "PostgreSQL", "Redis", "Machine Learning"],
    github: "https://github.com/AhmedKhaled007"
  },
  {
    title: "Authentication & Authorization System",
    description: "Secure, scalable authentication system with JWT tokens, OAuth 2.0, and role-based access control (RBAC).",
    technologies: ["Python", "FastAPI", "JWT", "OAuth 2.0", "PostgreSQL"],
    github: "https://github.com/AhmedKhaled007"
  },
  {
    title: "Real-time Analytics Dashboard",
    description: "Real-time data visualization dashboard with WebSocket connections and interactive charts for business intelligence.",
    technologies: ["React", "TypeScript", "WebSockets", "Python", "FastAPI"],
    github: "https://github.com/AhmedKhaled007"
  }
];