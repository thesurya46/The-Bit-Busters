import { Link } from "react-router";
import { ArrowRight, Code, Rocket, Users, Zap } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: Code,
      title: "Innovative Solutions",
      description: "Building cutting-edge applications with modern technologies",
    },
    {
      icon: Users,
      title: "Collaborative Team",
      description: "6 passionate developers working together to create magic",
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description: "Rapid development and deployment of high-quality projects",
    },
    {
      icon: Zap,
      title: "Performance First",
      description: "Optimized code for blazing-fast user experiences",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-5xl mx-auto text-center">
          <div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Breaking Limits.
              </span>
              <br />
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Building Future.
              </span>
            </h1>
          </div>

          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Welcome to The Bit Busters - a community of 6 passionate developers
            and tech enthusiasts creating innovative solutions and pushing the
            boundaries of technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/community"
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg hover:opacity-90 transition-all duration-200 flex items-center space-x-2"
            >
              <span>Join Community</span>
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/projects"
              className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-cyan-500/30 rounded-lg hover:border-cyan-500/50 hover:opacity-90 transition-all duration-200"
            >
              Explore Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                What We Do
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We combine expertise, innovation, and passion to deliver exceptional
              solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="p-6 bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl hover:border-cyan-500/50 transition-all duration-200 cursor-pointer"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 hover:bg-opacity-90 transition-all duration-200">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-12 text-center hover:opacity-95 transition-opacity duration-200">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our community and be part of the innovation. Let's create the
              future together.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg hover:opacity-90 transition-all duration-200"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

