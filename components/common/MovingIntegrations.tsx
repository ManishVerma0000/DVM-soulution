"use client";
import React, { useState, useEffect } from "react";
import {
  Mail,
  Calendar,
  FileText,
  MessageSquare,
  Database,
  Zap,
  Triangle,
  Folder,
  Users,
  Settings,
  Cloud,
  BarChart3,
  Coins,
  Link2,
  Smartphone,
  Code,
  Coffee,
  Github,
} from "lucide-react";

const MovingIntegrations = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Define icons with their colors and fixed positions
  const icons = [
    {
      Icon: Mail,
      color: "text-red-500",
      id: "gmail",
      title: "Gmail",
      left: 5,
      top: 10,
    },
    {
      Icon: Calendar,
      color: "text-blue-500",
      id: "calendar",
      title: "Calendar",
      left: 21,
      top: 5,
    },
    {
      Icon: FileText,
      color: "text-green-500",
      id: "docs",
      title: "Documents",
      left: 37,
      top: 15,
    },
    {
      Icon: MessageSquare,
      color: "text-purple-500",
      id: "slack",
      title: "Slack",
      left: 53,
      top: 8,
    },
    {
      Icon: Database,
      color: "text-orange-500",
      id: "database",
      title: "Database",
      left: 69,
      top: 12,
    },
    {
      Icon: Zap,
      color: "text-yellow-500",
      id: "zapier",
      title: "Zapier",
      left: 85,
      top: 6,
    },
    {
      Icon: Triangle,
      color: "text-teal-500",
      id: "drive",
      title: "Drive",
      left: 8,
      top: 35,
    },
    {
      Icon: Folder,
      color: "text-indigo-500",
      id: "folder",
      title: "Folder",
      left: 24,
      top: 40,
    },
    {
      Icon: Users,
      color: "text-pink-500",
      id: "teams",
      title: "Teams",
      left: 40,
      top: 30,
    },
    {
      Icon: Settings,
      color: "text-gray-500",
      id: "settings",
      title: "Settings",
      left: 56,
      top: 38,
    },
    {
      Icon: Cloud,
      color: "text-cyan-500",
      id: "cloud",
      title: "Cloud",
      left: 72,
      top: 32,
    },
    {
      Icon: BarChart3,
      color: "text-emerald-500",
      id: "analytics",
      title: "Analytics",
      left: 88,
      top: 36,
    },
    {
      Icon: Coins,
      color: "text-amber-500",
      id: "blockchain",
      title: "Blockchain",
      left: 12,
      top: 60,
    },
    {
      Icon: Link2,
      color: "text-violet-500",
      id: "crypto",
      title: "Crypto API",
      left: 28,
      top: 65,
    },
    {
      Icon: Smartphone,
      color: "text-rose-500",
      id: "mobile",
      title: "Mobile Development",
      left: 44,
      top: 58,
    },
    {
      Icon: Code,
      color: "text-sky-500",
      id: "native",
      title: "Native Development",
      left: 60,
      top: 63,
    },
    {
      Icon: Coffee,
      color: "text-orange-600",
      id: "java",
      title: "Java Development",
      left: 76,
      top: 55,
    },
    {
      Icon: Github,
      color: "text-slate-400",
      id: "github",
      title: "GitHub",
      left: 92,
      top: 62,
    },
  ];

  // Fixed animation delays for consistent SSR/client rendering
  const animationDelays = [
    0, 0.3, 0.6, 0.9, 1.2, 1.5, 1.8, 2.1, 2.4, 2.7, 3.0, 3.3, 3.6, 3.9, 4.2,
    4.5, 4.8, 5.1,
  ];
  const animationDurations = [
    6, 7, 8, 6.5, 7.5, 8.5, 6.2, 7.2, 8.2, 6.8, 7.8, 8.8, 6.3, 7.3, 8.3, 6.7,
    7.7, 8.7,
  ];

  if (!isClient) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col items-center justify-center p-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Connect with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400">
              100+ Integrations
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Automate your workflow with popular AI Automation tools and services
          </p>
        </div>
        <div className="relative w-full max-w-7xl h-[500px]">
          {icons.map(({ Icon, color, id, left, top }) => (
            <div
              key={id}
              className={`absolute p-4 bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 ${color}`}
              style={{
                left: `${left}%`,
                top: `${top}%`,
              }}
            >
              <Icon size={32} className="drop-shadow-lg" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col items-center justify-center p-8 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-16 z-10">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Connect with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400">
            100+ Integrations
          </span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Automate your workflow with popular AI Automation tools and services
        </p>
      </div>

      {/* Floating Icons Container */}
      <div className="relative w-full max-w-7xl h-[500px]">
        {icons.map(({ Icon, color, id, title, left, top }, index) => (
          <div
            key={id}
            className={`absolute p-4 bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 transition-all duration-300 hover:scale-110 hover:bg-white/20 cursor-pointer group ${color}`}
            style={{
              left: `${left}%`,
              top: `${top}%`,
              animation: `float-${index} ${animationDurations[index]}s ease-in-out infinite`,
              animationDelay: `${animationDelays[index]}s`,
            }}
          >
            <Icon size={32} className="drop-shadow-lg" />
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-2 py-1 rounded-md text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              {title}
            </div>
          </div>
        ))}
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${(i * 5.263) % 100}%`,
              top: `${(i * 3.14159) % 100}%`,
              animation: `twinkle ${2 + (i % 3)}s ease-in-out infinite`,
              animationDelay: `${(i * 0.1) % 2}s`,
            }}
          />
        ))}
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float-0 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        @keyframes float-1 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(-3deg);
          }
        }
        @keyframes float-2 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-25px) rotate(7deg);
          }
        }
        @keyframes float-3 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-18px) rotate(-5deg);
          }
        }
        @keyframes float-4 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-22px) rotate(4deg);
          }
        }
        @keyframes float-5 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-16px) rotate(-6deg);
          }
        }
        @keyframes float-6 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-28px) rotate(8deg);
          }
        }
        @keyframes float-7 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-12px) rotate(-2deg);
          }
        }
        @keyframes float-8 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-24px) rotate(6deg);
          }
        }
        @keyframes float-9 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-19px) rotate(-4deg);
          }
        }
        @keyframes float-10 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-21px) rotate(3deg);
          }
        }
        @keyframes float-11 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-17px) rotate(-7deg);
          }
        }
        @keyframes float-12 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        @keyframes float-13 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-26px) rotate(-8deg);
          }
        }
        @keyframes float-14 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-14px) rotate(3deg);
          }
        }
        @keyframes float-15 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-23px) rotate(-6deg);
          }
        }
        @keyframes float-16 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-18px) rotate(7deg);
          }
        }
        @keyframes float-17 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-27px) rotate(-4deg);
          }
        }
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
      `}</style>
    </div>
  );
};

export default MovingIntegrations;
