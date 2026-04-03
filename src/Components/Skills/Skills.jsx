import React from "react";
import {
  FaBootstrap,
  FaCss3,
  FaGit,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNode,
  FaReact,
} from "react-icons/fa";
import { SiMongodb, SiNetlify, SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "HTML", level: "Intermediate", percent: 80, color: "#E34F26", icon: <FaHtml5 size={30} /> },
  { name: "CSS", level: "Intermediate", percent: 75, color: "#1572B6", icon: <FaCss3 size={30} /> },
  { name: "React", level: "Intermediate", percent: 70, color: "#61DAFB", icon: <FaReact size={30} /> },
  { name: "JavaScript", level: "Intermediate", percent: 70, color: "#F7DF1E", icon: <FaJs size={30} /> },
  { name: "MongoDB", level: "Intermediate", percent: 70, color: "#47A248", icon: <SiMongodb size={30} /> },
  { name: "Bootstrap", level: "Intermediate", percent: 80, color: "#8F00FF", icon: <FaBootstrap size={30} /> },
  { name: "Tailwind", level: "Intermediate", percent: 70, color: "#38B2AC", icon: <SiTailwindcss size={30} /> },
  { name: "Git", level: "Intermediate", percent: 75, color: "#F1502F", icon: <FaGit size={30} /> },
  { name: "GitHub", level: "Intermediate", percent: 70, color: "#ffffff", icon: <FaGithub size={30} /> },
  { name: "Netlify", level: "Intermediate", percent: 60, color: "#00C7B7", icon: <SiNetlify size={30} /> },
  { name: "Node.js", level: "Intermediate", percent: 60, color: "#339933", icon: <FaNode size={30} /> },
];

const Skills = () => {
  return (
    <div id="Skills" className="p-10 md:p-24 md:pb-0 text-white">
      <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Skills & Experience
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-zinc-950 p-6 rounded-2xl 
                       transition-all duration-300 
                       hover:scale-105 hover:shadow-lg"
          >
            {/* Icon + Tooltip */}
            <div className="relative group flex justify-center mb-4">
              <div
                className="p-4 rounded-xl transition-all duration-300"
                style={{
                  color: skill.color,
                  filter: `drop-shadow(0 0 12px ${skill.color})`,
                }}
              >
                {skill.icon}
              </div>

              {/* Tooltip */}
              <span className="absolute -top-8 bg-black text-xs px-3 py-1 rounded-md 
                               opacity-0 group-hover:opacity-100 
                               transition-all duration-300">
                {skill.name}
              </span>
            </div>

            {/* Skill Name */}
            <h2 className="text-lg font-semibold text-center mb-1">
              {skill.name}
            </h2>

            {/* Level */}
            <p className="text-sm text-gray-400 text-center mb-3">
              {skill.level}
            </p>

            {/* Progress Bar */}
            <div className="w-full bg-zinc-800 rounded-full h-2 overflow-hidden">
              <div
                className="h-2 rounded-full transition-all duration-700"
                style={{
                  width: `${skill.percent}%`,
                  backgroundColor: skill.color,
                }}
              />
            </div>

            <p className="text-xs text-right mt-2 text-gray-400">
              {skill.percent}%
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
