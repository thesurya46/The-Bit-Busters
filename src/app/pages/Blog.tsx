import { motion } from "motion/react";
import { Link } from "react-router";
import { Calendar, User, Tag } from "lucide-react";

const blogPosts = [
  {
    slug: "mastering-react-hooks",
    title: "Mastering React Hooks: A Complete Guide",
    excerpt:
      "Deep dive into React Hooks with practical examples and best practices for modern React development.",
    author: "Sarah Johnson",
    date: "April 2, 2026",
    category: "Web Dev",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
  },
  {
    slug: "ai-code-generation",
    title: "The Future of AI in Code Generation",
    excerpt:
      "Exploring how artificial intelligence is revolutionizing the way we write and maintain code.",
    author: "Priya Patel",
    date: "March 28, 2026",
    category: "AI",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
  },
  {
    slug: "kubernetes-best-practices",
    title: "Kubernetes Best Practices for Production",
    excerpt:
      "Essential guidelines for deploying and managing Kubernetes clusters in production environments.",
    author: "David Kim",
    date: "March 25, 2026",
    category: "DevOps",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop",
  },
  {
    slug: "data-structures-algorithms",
    title: "Essential Data Structures Every Developer Should Know",
    excerpt:
      "A comprehensive guide to fundamental data structures and their real-world applications.",
    author: "Alex Chen",
    date: "March 20, 2026",
    category: "DSA",
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=600&fit=crop",
  },
  {
    slug: "tailwind-design-systems",
    title: "Building Scalable Design Systems with Tailwind CSS",
    excerpt:
      "Learn how to create maintainable and scalable design systems using Tailwind CSS and component libraries.",
    author: "Emma Rodriguez",
    date: "March 15, 2026",
    category: "Web Dev",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&h=600&fit=crop",
  },
  {
    slug: "python-fastapi-guide",
    title: "Building High-Performance APIs with FastAPI",
    excerpt:
      "Discover why FastAPI is becoming the go-to framework for building modern Python APIs.",
    author: "Marcus Williams",
    date: "March 10, 2026",
    category: "Backend",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&h=600&fit=crop",
  },
];

const categories = ["All", "Web Dev", "AI", "DevOps", "DSA", "Backend"];

export default function Blog() {
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
              Tech Blog & Insights
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tutorials, insights, and technical articles from our team
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg hover:border-cyan-500/50 transition-all duration-300"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={`/blog/${post.slug}`}
                className="block group h-full"
              >
                <div className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-cyan-500/80 backdrop-blur-sm text-sm rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 flex-1">
                      {post.excerpt}
                    </p>

                    <div className="space-y-2 text-sm text-gray-400">
                      <div className="flex items-center space-x-2">
                        <User size={16} />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Calendar size={16} />
                          <span>{post.date}</span>
                        </div>
                        <span className="text-cyan-400">{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
