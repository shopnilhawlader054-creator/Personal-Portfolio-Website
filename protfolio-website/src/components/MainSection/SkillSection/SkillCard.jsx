import React from 'react';

function SkillCard() {
  const techStack = [
    { name: "Python", icon: "🐍" },
    { name: "Django", icon: "🚀" },
    { name: "React", icon: "⚛️" },
    { name: "JavaScript", icon: "JS" },
    { name: "Tailwind", icon: "🎨" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Git", icon: "📦" },
    { name: "REST APIs", icon: "⚡" }
  ];

  return (
    <div className="w-full max-w-3xl mx-auto px-3 sm:px-6 mt-8 z-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md flex items-center gap-2 sm:gap-3 hover:border-white/20 transition-all group min-w-0 overflow-hidden"
          >
            <span className="shrink-0 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-base sm:text-xl rounded-lg sm:rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
              {tech.icon}
            </span>
            <div className="min-w-0 flex-1">
              <h4 className="text-xs sm:text-sm font-semibold text-white truncate">
                {tech.name}
              </h4>
              <span className="block text-[9px] sm:text-[11px] text-neutral-400 font-mono truncate">
                Verified Stack
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillCard;