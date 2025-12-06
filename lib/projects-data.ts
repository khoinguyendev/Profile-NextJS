export interface Project {
  slug: string
  title: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  liveUrl: string
  githubUrl: string
  demoVideoUrl: string
  features: string[]
}

export const projects: Project[] = [
  {
    slug: "e-commerce-platform",
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with cart functionality, payment processing, and inventory management. Built with Next.js, Stripe, and PostgreSQL.",
    longDescription:
      "This comprehensive e-commerce solution was built to handle high-traffic online stores with complex inventory needs. The platform features a blazing-fast frontend built with Next.js and server-side rendering for optimal SEO performance. The backend integrates seamlessly with Stripe for secure payment processing, supporting multiple payment methods including credit cards, Apple Pay, and Google Pay. The inventory management system includes real-time stock tracking, automated low-stock alerts, and bulk product import/export capabilities. Admin users have access to a powerful dashboard with sales analytics, customer insights, and order management tools.",
    image: "/modern-e-commerce-dashboard-with-product-listings.jpg",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind", "Prisma", "Vercel"],
    liveUrl: "#",
    githubUrl: "#",
    demoVideoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    features: [
      "Real-time inventory tracking with low-stock alerts",
      "Secure payment processing with Stripe integration",
      "Advanced product filtering and search",
      "Customer account management and order history",
      "Admin dashboard with sales analytics",
      "Responsive design optimized for all devices",
    ],
  },
  {
    slug: "task-management-app",
    title: "Task Management App",
    description:
      "A collaborative project management tool featuring real-time updates, drag-and-drop functionality, and team workspaces.",
    longDescription:
      "Built for teams that need to stay organized and collaborative, this task management application brings together the best features of modern project management tools. The drag-and-drop Kanban board interface makes it easy to visualize workflow and move tasks through different stages. Real-time updates powered by Socket.io ensure that all team members see changes instantly, eliminating the need for constant page refreshes. Team workspaces allow for project isolation and customizable permissions, making it suitable for both small teams and larger organizations.",
    image: "/task-management-kanban-board-dark-theme.jpg",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Redis", "Express", "JWT"],
    liveUrl: "#",
    githubUrl: "#",
    demoVideoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    features: [
      "Drag-and-drop Kanban board interface",
      "Real-time collaboration with live updates",
      "Team workspaces with customizable permissions",
      "Task comments and file attachments",
      "Due date reminders and notifications",
      "Activity log and project timeline view",
    ],
  },
  {
    slug: "analytics-dashboard",
    title: "Analytics Dashboard",
    description:
      "Interactive data visualization dashboard with real-time metrics, custom charts, and exportable reports for business intelligence.",
    longDescription:
      "This analytics dashboard transforms raw data into actionable insights through beautiful, interactive visualizations. Built with Vue.js and D3.js, the frontend delivers smooth animations and responsive charts that adapt to any screen size. The Python FastAPI backend processes large datasets efficiently, with Redis caching for frequently accessed metrics. Users can create custom dashboards by selecting from a library of chart types, configure data sources, and schedule automated reports. The platform integrates with popular data sources including Google Analytics, Salesforce, and custom APIs.",
    image: "/analytics-dashboard-with-charts-and-graphs-dark-mo.jpg",
    technologies: ["Vue.js", "D3.js", "Python", "FastAPI", "AWS", "Redis", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
    demoVideoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    features: [
      "Interactive charts with drill-down capabilities",
      "Custom dashboard builder with drag-and-drop",
      "Automated report generation and scheduling",
      "Multi-source data integration",
      "Real-time metric updates",
      "Export to PDF, CSV, and Excel formats",
    ],
  },
  {
    slug: "social-media-scheduler",
    title: "Social Media Scheduler",
    description:
      "Automated social media posting tool with AI-powered content suggestions, analytics tracking, and multi-platform support.",
    longDescription:
      "Streamline your social media presence with this intelligent scheduling platform. The application leverages OpenAI's GPT models to generate engaging content suggestions based on your brand voice and industry trends. The intuitive calendar interface makes it easy to plan and visualize your content strategy across multiple platforms including Twitter, LinkedIn, Instagram, and Facebook. Built-in analytics track engagement metrics and provide insights to optimize posting times and content types. The tRPC API ensures type-safe communication between the frontend and backend, while Prisma handles database operations with PostgreSQL.",
    image: "/social-media-scheduling-calendar-interface.jpg",
    technologies: ["Next.js", "OpenAI", "Prisma", "tRPC", "Vercel", "PostgreSQL", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
    demoVideoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    features: [
      "AI-powered content suggestions and optimization",
      "Multi-platform scheduling (Twitter, LinkedIn, Instagram, Facebook)",
      "Visual content calendar with drag-and-drop",
      "Engagement analytics and performance insights",
      "Optimal posting time recommendations",
      "Team collaboration with approval workflows",
    ],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
