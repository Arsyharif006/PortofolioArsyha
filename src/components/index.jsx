// src/components/Index.js

import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import me from "../image/mee.png";
import SkillsSection from "./skillsSection";
import ExperienceSection from "./experiences";
import CertificateSection from "./certificates";
import ProjectsSection from "./projects";
import ContactUsSection from './contactus';

const useTypingEffect = (phrases, typingSpeed = 100, pauseTime = 2000) => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (isTyping && !isDeleting) {
        setCharIndex((prev) => prev + 1);

        if (charIndex === phrases[textIndex].length) {
          setIsTyping(false);
          setIsDeleting(true);
          setTimeout(() => {
            setIsTyping(true);
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % phrases.length);
            setCharIndex(0);
          }, pauseTime);
        }
      } else if (isDeleting) {
        setCharIndex((prev) => prev - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
        }
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [isTyping, isDeleting, charIndex, textIndex]);

  return phrases[textIndex].substring(0, charIndex);
};

const Index = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations
      easing: 'ease-in-out', // Easing for animations
      once: true, // Animation should happen only once
    });
  }, []);

  const phrases = ["Front End Developer", "UI/UX Designer"];
  const typedText = useTypingEffect(phrases);
  const markerRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fill");
          } else {
            entry.target.classList.remove("animate-fill");
          }
        });
      },
      { threshold: 0.5 }
    );

    markerRefs.current.forEach((marker) => {
      if (marker) observer.observe(marker);
    });

    return () => {
      markerRefs.current.forEach((marker) => {
        if (marker) observer.unobserve(marker);
      });
    };
  }, []);

  const handleClick = () => {
    window.open('https://drive.google.com/drive/folders/15hvzq6b-kQKN8AnYp7rZMaVjw6viyg5k?usp=drive_link', '_blank');
  };

  return (
    <>
      <header
        id="dashboard"
        className="bg-gray-800 py-[9rem] md:pb-0"
        data-aos="fade-in" // Add AOS animation
      >
        <div className="flex flex-col-reverse md:flex-row items-center justify-center md:px-0 px-9" data-aos="fade-up">
          <div className="flex md:flex-col items-center justify-center md:mr-16 md:ml-16 md:mb-14 mt-10 text-3xl">
            <a href="https://github.com/Arsyha06" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faGithub}
                className="text-gray-400 cursor-pointer hover:text-gray-100 md:mb-4 md:mr-0 mr-3"
              />
            </a>
            <a href="https://instagram.com/yaseo.n" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-gray-400 cursor-pointer hover:text-gray-100 md:mb-4 md:mr-0 mr-3"
              />
            </a>
            <a href="https://wa.me/08978396392" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="text-gray-400 cursor-pointer hover:text-gray-100 mb-0"
              />
            </a>
          </div>
        
          <div className="mb-8 mt-8 md:mb-20 md:mr-[5rem]" data-aos="fade-right">
            <h1 className="text-[24px] font-bold font-pins text-white md:text-6xl">
              I'm a
            </h1>
            <h1 className="text-[25px] font-bold font-pins text-yellow-600 md:text-6xl">
              {typedText}
              <span className="ml-1" id="cursor-animation">
                |
              </span>
            </h1>
            <p className="mt-4 md:mt-7 md:mr-13 text-[15px] md:text-base text-gray-400 font-pins">
              Hai..nama saya Muhammad Arya Ramadhan, saya seorang junior
              developer, saya cukup berpengalaman di bidang front end developer
              dan ui/ux developer selama 3 tahun saya bersekolah di SMKN 1
              Ciomas, saya tinggal di Bogor Jawa Barat.
            </p>
            <button
            onClick={handleClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5"
          >
            Lihat CV
          </button>
          </div>
          <img
            src={me}
            alt="me"
            className="rounded-full w-[25vh] bg-gray-100 md:w-full md:opacity-80 opacity-85 md:rounded-none md:bg-transparent"
            data-aos="zoom-in" // Add AOS animation
          />
        </div>
      </header>

      <SkillsSection />
      <ExperienceSection />
      <CertificateSection />
      <ProjectsSection />
      <ContactUsSection />
    </>
  );
};

export default Index;
