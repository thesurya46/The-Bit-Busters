import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "AI Code Assistant",
    description:
      "An intelligent code completion tool powered by machine learning that helps developers write better code faster.",
    techStack: ["Python", "TensorFlow", "React", "FastAPI"],
    liveDemo: "https://demo.bitbusters.dev/ai-assistant",
    github: "https://github.com/bitbusters/ai-assistant",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
  },
  {
    title: "DevOps Dashboard",
    description:
      "A comprehensive monitoring and deployment dashboard for managing cloud infrastructure and CI/CD pipelines.",
    techStack: ["Next.js", "Node.js", "Docker", "Kubernetes"],
    liveDemo: "https://demo.bitbusters.dev/devops",
    github: "https://github.com/bitbusters/devops-dashboard",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  },
  {
    title: "Social Analytics Platform",
    description:
      "Real-time social media analytics tool providing insights and sentiment analysis across multiple platforms.",
    techStack: ["React", "Python", "MongoDB", "Redis"],
    liveDemo: "https://demo.bitbusters.dev/analytics",
    github: "https://github.com/bitbusters/social-analytics",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  },
  {
    title: "E-Learning Hub",
    description:
      "An interactive learning platform with video courses, live sessions, and progress tracking for developers.",
    techStack: ["React", "Node.js", "PostgreSQL", "AWS"],
    liveDemo: "https://demo.bitbusters.dev/elearning",
    github: "https://github.com/bitbusters/elearning-hub",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
  },
  {
    title: "Task Automation Suite",
    description:
      "A powerful automation framework that streamlines repetitive tasks and workflows for development teams.",
    techStack: ["Python", "TypeScript", "RabbitMQ", "Docker"],
    liveDemo: "https://demo.bitbusters.dev/automation",
    github: "https://github.com/bitbusters/task-automation",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop",
  },
  {
    title: "Design System Library",
    description:
      "A comprehensive component library and design system for building consistent, accessible user interfaces.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Storybook"],
    liveDemo: "https://demo.bitbusters.dev/design-system",
    github: "https://github.com/bitbusters/design-system",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Our Projects
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our portfolio of innovative solutions and cutting-edge
            applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4 flex-1">{project.description}</p>

                  <div className="mb-4">
                    <p className="text-sm text-gray-400 mb-2">Tech Stack:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-slate-800 text-sm rounded-full border border-cyan-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg hover:opacity-90 transition-opacity"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">Live Demo</span>
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
