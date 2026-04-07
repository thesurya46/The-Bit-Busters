import { motion } from "motion/react";
import { Target, Eye, Award } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              About The Bit Busters
            </span>
          </h1>
          <p className="text-xl text-gray-300">
            A community of passionate developers building the future
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 p-8 bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl"
        >
          <h2 className="text-3xl font-bold mb-6 text-cyan-400">Our Story</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              The Bit Busters started as a small group of 6 passionate developers
              who shared a common vision: to push the boundaries of technology and
              create innovative solutions that make a difference.
            </p>
            <p>
              What began as late-night coding sessions and hackathon collaborations
              has evolved into a thriving community dedicated to excellence in
              software development, AI innovation, and cutting-edge web
              technologies.
            </p>
            <p>
              Today, we're proud to be known as{" "}
              <a
                href="https://linkedin.com/company/codoria"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline"
              >
                Codoria
              </a>{" "}
              on LinkedIn, where we share our journey, insights, and connect with
              fellow tech enthusiasts from around the world.
            </p>
          </div>
        </motion.section>

        {/* Mission, Vision, Goals */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
            className="p-6 bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
              <Target size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-cyan-400">Mission</h3>
            <p className="text-gray-300">
              To deliver innovative, high-quality software solutions that solve
              real-world problems and empower businesses and individuals through
              technology.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
              <Eye size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-purple-400">Vision</h3>
            <p className="text-gray-300">
              To become a leading force in technological innovation, creating a
              global community of developers who collaborate, learn, and build the
              future together.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
              <Award size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-pink-400">Goals</h3>
            <p className="text-gray-300">
              Continuously learn and adapt to emerging technologies, foster a
              culture of innovation and collaboration, and create impactful
              projects that inspire the next generation of developers.
            </p>
          </motion.div>
        </div>

        {/* Codoria Highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Connect with Codoria</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Follow our professional journey on LinkedIn where we share insights,
            updates, and connect with the global tech community.
          </p>
          <a
            href="https://linkedin.com/company/codoria"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg hover:opacity-90 transition-opacity"
          >
            Visit Codoria on LinkedIn
          </a>
        </motion.div>
      </div>
    </div>
  );
}
