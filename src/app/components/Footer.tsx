import { Link } from "react-router";
import { Github, Linkedin, Instagram, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Team", path: "/team" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/bitbusters", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/company/codoria", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/bitbusters", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com/bitbusters", label: "Twitter" },
    { icon: Mail, href: "mailto:hello@bitbusters.dev", label: "Email" },
  ];

  return (
    <footer className="bg-slate-900 border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold">BB</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                The Bit Busters
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Breaking Limits. Building Future.
            </p>
            <p className="text-gray-400 text-sm">
              A community of passionate developers and tech enthusiasts.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-600 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Follow us on{" "}
              <a
                href="https://linkedin.com/company/codoria"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline"
              >
                Codoria
              </a>
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} The Bit Busters. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
