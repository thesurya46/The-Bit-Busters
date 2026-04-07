import { motion } from "motion/react";
import { Github, Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Alex Chen",
    role: "Full-Stack Developer",
    skills: ["React", "Node.js", "PostgreSQL", "Docker"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    github: "https://github.com/alexchen",
    linkedin: "https://linkedin.com/in/alexchen",
  },
  {
    name: "Sarah Johnson",
    role: "Frontend Architect",
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    github: "https://github.com/sarahjohnson",
    linkedin: "https://linkedin.com/in/sarahjohnson",
  },
  {
    name: "Marcus Williams",
    role: "Backend Engineer",
    skills: ["Python", "FastAPI", "MongoDB", "Redis"],
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    github: "https://github.com/marcuswilliams",
    linkedin: "https://linkedin.com/in/marcuswilliams",
  },
  {
    name: "Priya Patel",
    role: "AI/ML Engineer",
    skills: ["TensorFlow", "PyTorch", "Python", "NLP"],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    github: "https://github.com/priyapatel",
    linkedin: "https://linkedin.com/in/priyapatel",
  },
  {
    name: "David Kim",
    role: "DevOps Engineer",
    skills: ["AWS", "Kubernetes", "CI/CD", "Terraform"],
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    github: "https://github.com/davidkim",
    linkedin: "https://linkedin.com/in/davidkim",
  },
  {
    name: "Emma Rodriguez",
    role: "UI/UX Designer & Developer",
    skills: ["Figma", "React", "Design Systems", "Animation"],
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    github: "https://github.com/emmarodriguez",
    linkedin: "https://linkedin.com/in/emmarodriguez",
  },
];

export default function Team() {
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
              Meet Our Team
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Six talented individuals with diverse skills and a shared passion for
            creating exceptional software
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-cyan-400 mb-4">{member.role}</p>

                  <div className="mb-4">
                    <p className="text-sm text-gray-400 mb-2">Skills:</p>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-slate-800 text-sm rounded-full border border-cyan-500/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-600 transition-all duration-300"
                      aria-label="GitHub"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-600 transition-all duration-300"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
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
