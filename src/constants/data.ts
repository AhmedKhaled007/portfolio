import { PersonalInfo, SkillCategory, Experience, Project, Education, Course } from '../types';

export const personalInfo: PersonalInfo = {
  name: "Ahmed Khaled Habiba",
  title: "Senior Software Engineer",
  location: "Saudi Arabia",
  email: "ahmedk4720@gmail.com",
  phone: "+966 556093635",
  github: "https://github.com/AhmedKhaled007",
  domain: "ahmedhabiba.dev"
};

export const professionalSummary = "Senior Backend Engineer (Python) with 5+ years building and operating scalable, secure microservices and APIs. Deep experience with FastAPI/Django, event-driven systems, and cloud deployments. Strong in authentication/authorization (OAuth2/OIDC, JWT, RBAC), CI/CD (GitHub Actions), observability (Prometheus/Grafana, Sentry), and rigorous testing (pytest, integration tests, load testing). Comfortable collaborating across product and ML teams; integrated and served computer-vision models in production.";

export const skills: SkillCategory[] = [
  {
    category: "Languages & Core",
    skills: ["Python", "JavaScript", "TypeScript", "C#", "Bash"]
  },
  {
    category: "Backend Frameworks",
    skills: ["FastAPI", "Django", "Flask", "RESTful APIs", "WebSockets", "AsyncIO"]
  },
  {
    category: "Frontend & Mobile",
    skills: ["React", "React Native", "HTML", "CSS", "Bootstrap", "Tailwind"]
  },
  {
    category: "Databases & ORMs",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQLAlchemy", "Alembic", "Query optimization"]
  },
  {
    category: "Message Queues & Event-Driven",
    skills: ["RabbitMQ", "Kafka", "Celery", "MQTT", "Cron jobs"]
  },
  {
    category: "Observability & Monitoring",
    skills: ["Prometheus", "Grafana", "Sentry", "Cloud logs/metrics"]
  },
  {
    category: "Cloud & Infrastructure",
    skills: ["AWS (EC2, ECS, Lambda, S3)", "Docker", "Kubernetes", "Nginx", "HAproxy", "Terraform", "Github Actions", "Feature flags"]
  },
  {
    category: "Architecture & Design",
    skills: ["System Design", "Microservices", "Load Balancing", "Domain-Driven Design", "OOP & Design Patterns"]
  },
  {
    category: "Security & Authentication",
    skills: ["OAuth2/OIDC (Auth Code + PKCE)", "JWT", "RBAC", "SSO/MFA", "Dependency scanning (Dependabot, Bandit, Trivy)"]
  },
  {
    category: "AI & Machine Learning",
    skills: ["Fine-tuning ML models", "Computer Vision", "AI Analysis"]
  }
];

export const experiences: Experience[] = [
  {
    company: "Ocucon UK",
    position: "Senior Software Developer",
    duration: "April 2023 – Present",
    description: [
      "Architected and maintained FastAPI-based microservices handling 10K+ requests/hour with 99.9% uptime",
      "Integrated and fine-tuned machine learning models for computer vision applications, reducing processing time by 40%",
      "Built reusable Python libraries and automation scripts, improving team development efficiency by 30%",
      "Deployed services using Docker, Docker Swarm, and automated CI/CD pipelines with GitHub Actions, reducing deployment time by 60%",
      "Contributed to frontend development with React and React Native for cross-platform mobile app",
      "Implemented secure authentication & authorization using OAuth2/OIDC, JWT, and RBAC for enterprise access control",
      "Collaborated in Agile sprints with cross-functional teams, participating in planning, code reviews, and architectural decisions"
    ],
    technologies: ["Python", "FastAPI", "Docker", "Docker Swarm", "GitHub Actions", "React", "React Native", "OAuth", "JWT", "RBAC", "Machine Learning"]
  },
  {
    company: "Ocucon UK",
    position: "Mid-Level Backend Developer",
    duration: "Dec 2021 – April 2023",
    description: [
      "Built and maintained production services, including a dedicated authentication/authorization service using TDD approach and OpenAPI contracts",
      "Introduced Celery workers backed by RabbitMQ/Kafka for background jobs and event-driven workflows with idempotency and retry policies",
      "Improved database reliability with Alembic migrations, query optimization through indexing, and connection pooling",
      "Evolved core architecture using Domain-Driven Design principles to scale service boundaries and interfaces",
      "Enhanced test coverage to 85%+ with pytest, dockerized integration tests against real services, and Locust load tests"
    ],
    technologies: ["Python", "FastAPI", "TDD", "OpenAPI", "Celery", "RabbitMQ", "Kafka", "Alembic", "PostgreSQL", "DDD", "pytest", "Locust"]
  },
  {
    company: "Ofaly Egypt",
    position: "Junior Backend Python Developer",
    duration: "April 2020 – Dec 2021",
    description: [
      "Developed RESTful APIs using FastAPI and Django for chat application and POS system with WebSockets for real-time features",
      "Built event-driven services with RabbitMQ and scheduled cron tasks for automated maintenance and reporting",
      "Integrated comprehensive unit/integration tests into CI/CD pipeline, reducing production bugs by 50%",
      "Deployed containerized workloads with Docker and configured NGINX as reverse proxy/load balancer for high availability"
    ],
    technologies: ["Python", "FastAPI", "Django", "WebSockets", "RabbitMQ", "Docker", "Nginx", "CI/CD"]
  }
];

export const projects: Project[] = [

];

export const education: Education[] = [
  {
    degree: "Python Full Stack Developer Diploma",
    institution: "ITI (Information Technology Institute, Egypt)",
    duration: "Feb 2020",
    description: "Comprehensive full-stack development program focusing on Python, web technologies, and software engineering best practices"
  }
];

export const courses: Course[] = [
  {
    title: "AWS Cloud Practitioner Essentials",
    institution: "Amazon Web Services",
    platform: "Coursera",
    url: "https://www.coursera.org/learn/aws-cloud-practitioner-essentials"
  },
  {
    title: "ChatGPT Prompt Engineering for Developers",
    institution: "DeepLearning.AI",
    platform: "Coursera",
    url: "https://www.coursera.org/learn/chatgpt-prompt-engineering-for-developers-project"
  },
  {
    title: "Generative AI for Everyone",
    institution: "DeepLearning.AI",
    platform: "Coursera",
    url: "https://www.coursera.org/learn/generative-ai-for-everyone"
  },
  {
    title: "Kubernetes Fundamentals",
    institution: "LearnKartS",
    platform: "Coursera",
    url: "https://www.coursera.org/learn/certified-kubernetes-application-developer-kubernetes-fundamentals"
  },
  {
    title: "Artificial Intelligence Analyst",
    institution: "IBM",
    platform: "On-site",
    url: "https://www.credly.com/badges/1d0da11b-1604-4e11-952e-a7dc792601cb/public_url"
  }
];