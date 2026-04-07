import React, { useState } from "react";
import { Trophy, Calendar, Users, Instagram } from "lucide-react";
import { Link } from "react-router";
import { Toggle } from "../components/ui/toggle";

const achievements = [
  {
    icon: Trophy,
    title: "Hackathon Winners",
    description: "IIT, Bhubaneswar Hackathon and Trident Hackathon Club Selector",
    date: "2025-2026",
  },
  {
    icon: Trophy,
    title: "Open Source Contributors",
    description: "Contributing 20+ repositories",
    date: "2025-2026",
  },
  {
    icon: Calendar,
    title: "Community Workshops",
    description: "Hosted 12+ technical workshops and coding bootcamps",
    date: "Throughout 2025",
    link: "https://www.linkedin.com/company/106766869/admin/dashboard/",
  },
  {
    icon: Users,
    title: "Growing Community",
    description: "1000+ members across social media platforms",
    date: "As of April 2026",
    link: "https://www.linkedin.com/company/106766869/admin/dashboard/",
  },
];

const events = [
  {
    title: "1st Hackathon held at IIT Bhubaneswar",
    date: "Oct 2025",
    type: "Web Development",
    status: "Completed",
  },
  {
    title: "2nd Trident Academy Hackathon",
    date: "March 2026",
    type: "Web Development",
    status: "Completed",
  },
  {
    title: "3rd Silicon University Hackathon",
    date: "April 2026",
    type: "Frontend Design and AI uses",
    status: "Completed",
  },
  {
    title: "4th GIFT Autonomous Hackathon",
    date: "January 2026",
    type: "Full Stack Development",
    status: "Completed",
  },
];

export default function Community() {
  const [showInstagram, setShowInstagram] = useState(false);

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Join Our Community
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Connect with fellow developers, participate in events, and grow
            together
          </p>
        </div>

        {/* Achievements Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Our Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.title}
                className="p-6 bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl hover:border-cyan-500/50 transition-all duration-200 cursor-pointer"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 hover:bg-opacity-90 transition-all duration-200">
                  <achievement.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                <p className="text-gray-400 text-sm mb-2">
                  {achievement.description}
                </p>
                {achievement.link && (
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:underline text-sm block"
                  >
                    Join on LinkedIn →
                  </a>
                )}
                <p className="text-cyan-400 text-xs">{achievement.date}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Events Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Events & Hackathons
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.map((event, index) => (
              <div
                key={event.title}
                className="p-6 bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl hover:border-cyan-500/50 transition-all duration-200"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold">{event.title}</h3>
                  <span
                    className={`px-3 py-1 text-xs rounded-full ${
                      event.status === "Upcoming"
                        ? "bg-cyan-500/20 text-cyan-400"
                        : "bg-emerald-500/20 text-emerald-400"
                    }`}
                  >
                    {event.status}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-2">{event.type}</p>
                <p className="text-cyan-400 text-sm">{event.date}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Instagram Toggle Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Instagram</h2>
            <Toggle
              pressed={showInstagram}
              onPressedChange={setShowInstagram}
              className="data-[state=on]:bg-cyan-500"
            >
              Toggle Instagram Posts
            </Toggle>
          </div>
          {showInstagram && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="aspect-square bg-slate-800/50 border border-gray-700 rounded-lg flex items-center justify-center text-gray-500 text-sm">
                Instagram posts placeholder (Demo content)
              </div>
              <div className="aspect-square bg-slate-800/50 border border-gray-700 rounded-lg flex items-center justify-center text-gray-500 text-sm">
                Instagram posts placeholder (Demo content)
              </div>
              <div className="aspect-square bg-slate-800/50 border border-gray-700 rounded-lg flex items-center justify-center text-gray-500 text-sm">
                Instagram posts placeholder (Demo content)
              </div>
              <div className="aspect-square bg-slate-800/50 border border-gray-700 rounded-lg flex items-center justify-center text-gray-500 text-sm">
                Instagram posts placeholder (Demo content)
              </div>
            </div>
          )}
        </section>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-12 text-center hover:opacity-95 transition-all duration-200">
          <h2 className="text-4xl font-bold mb-4">Ready to Join?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Become part of our growing community and collaborate with talented
            developers from around the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://discord.gg/bitbusters"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg hover:opacity-90 transition-all duration-200"
            >
              Join Discord
            </a>
            <a
              href="https://linkedin.com/company/codoria"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-cyan-500/30 rounded-lg hover:border-cyan-500/50 hover:opacity-90 transition-all duration-200"
            >
              Follow on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

