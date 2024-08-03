import React, { useState } from "react";
import LightDark from "../image/Light&Dark.png";
import Light from "../image/Light.png";
import Dark from "../image/Dark.png";
// Importing the icons
import { FaHtml5, FaReact, FaLaravel, FaPhp } from "react-icons/fa";
import { FaFigma, FaCss3Alt, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const Skills = () => {
  const [hoverDirection, setHoverDirection] = useState("");

  const iconsAtZero = [
    {
      icon: <FaHtml5 className="text-orange-500 md:w-8 md:h-8 h-3 w-3" />,
      style: { right: "90%", top: "10%" },
    },
    {
      icon: <FaReact className="text-blue-400 md:w-8 md:h-8 h-3 w-3" />,
      style: { right: "110%", top: "30%" },
    },
    {
      icon: <FaLaravel className="text-red-600 md:w-8 md:h-8 h-3 w-3" />,
      style: { right: "120%", top: "60%" },
    },
    {
      icon: <FaPhp className="text-indigo-600 md:w-8 md:h-8 h-3 w-3" />,
      style: { right: "110%", top: "90%" },
    },
  ];

  const iconsAtHundred = [
    {
      icon: <FaFigma className="text-red-500 md:w-8 md:h-8 h-3 w-3" />,
      style: { left: "110%", top: "10%" },
    },
    {
      icon: <SiTailwindcss className="text-blue-500 md:w-8 md:h-8 h-3 w-3" />,
      style: { left: "130%", top: "30%" },
    },
    {
      icon: <FaCss3Alt className="text-blue-400 md:w-8 md:h-8 h-3 w-3" />,
      style: { left: "140%", top: "60%" },
    },
    {
      icon: <FaBootstrap className="text-indigo-600 md:w-8 md:h-8 h-3 w-3" />,
      style: { left: "120%", top: "90%" },
    },
  ];

  return (
    <section
      id="skills"
      className="bg-gray-900 py-10 md:py-0 md:pt-16 px-4 md:px-16"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        setHoverDirection(x < rect.width / 2 ? "left" : "right");
      }}
      onMouseLeave={() => setHoverDirection("")}
    >
      <h2 className="text-2xl md:text-4xl font-bold text-gray-100 text-center mb-10" data-aos="fade-up">
        My Skills
      </h2>
      <div className="relative flex justify-center items-center">
        <div className="relative w-[20vh] h-[20vh] md:w-[80vh] md:h-[80vh] group">
          <img
            src={LightDark}
            alt="LightDark"
            className={`absolute inset-0 w-full h-full  `}
          />
          <img
            src={Light}
            alt="Light"
            className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${
              hoverDirection === "left" ? "opacity-100" : "opacity-0"
            }`}
            style={{
              clipPath:
                hoverDirection === "left"
                  ? `polygon(0 0, 100% 0, 100% 100%, 0 100%)`
                  : `polygon(0 0, 50% 0, 50% 100%, 0 100%)`,
            }}
          />
          <img
            src={Dark}
            alt="Dark"
            className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${
              hoverDirection === "right" ? "opacity-100" : "opacity-0"
            }`}
            style={{
              clipPath:
                hoverDirection === "right"
                  ? `polygon(0 0, 100% 0, 100% 100%, 0 100%)`
                  : `polygon(50% 0, 100% 0, 100% 100%, 50% 100%)`,
            }}
          />
          <div
            className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
              hoverDirection === "left" ? "opacity-100 animate-slideInFromRight" : "opacity-0"
            }`}
          >
            {iconsAtHundred.map((item, index) => (
              <div
                key={index}
                className="absolute flex justify-center items-center animate-fadeIn"
                style={{
                  ...item.style,
                  transform: "translate(-50%, -50%)",
                  zIndex: 10,
                }}
              >
                <div className="flex items-center justify-center w-8 h-8 md:w-16 md:h-16 rounded-full bg-white shadow-lg relative">
                  {item.icon}
                </div>
              </div>
            ))}
          </div>
          <div
            className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
              hoverDirection === "right" ? "opacity-100 animate-slideInFromLeft" : "opacity-0"
            }`}
          >
            {iconsAtZero.map((item, index) => (
              <div
                key={index}
                className="absolute flex justify-center items-center animate-fadeIn"
                style={{
                  ...item.style,
                  transform: "translate(-50%, -50%)",
                  zIndex: 10,
                }}
              >
                <div className="flex items-center justify-center w-8 h-8 md:w-16 md:h-16 rounded-full bg-white shadow-lg relative">
                  {item.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Custom animation style */}
      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInFromLeft {
          0% {
            opacity: 0;
            transform: translateX(-100%);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInFromRight {
          0% {
            opacity: 0;
            transform: translateX(100%);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }

        .animate-slideInFromLeft {
          animation: slideInFromLeft 0.5s ease-in-out;
        }

        .animate-slideInFromRight {
          animation: slideInFromRight 0.5s ease-in-out;
        }

        .group:hover .group-hover\\:opacity-100 {
          opacity: 1;
        }
        .group:hover .group-hover\\:opacity-0 {
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Skills;
