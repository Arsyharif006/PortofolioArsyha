import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ExperienceCard = ({ year, title, company, description }) => (
  <div
    className="relative mb-8"
    data-aos="fade-up" // Add this line
  >
    <div className="absolute left-0 transform -translate-x-[5px] bg-yellow-500 w-5 h-5 rounded-full"></div>
    <div className="ml-10">
      <div className="text-gray-300 mb-2">{year}</div>
      <div className="bg-gray-700 p-4 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <div className="text-gray-400">{company}</div>
        <p className="mt-4 text-gray-300">{description}</p>
      </div>
    </div>
  </div>
);

const ExperienceSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Animation easing
      once: true, // Whether animation should happen only once
    });
  }, []);

  const experiences = [
    {
      year: "2022",
      title: "Website Pemesanan Makanan Kantin Sekolah",
      company: "Frontend & Backend Developer",
      description:
        "Website Pemesanan Makanan Kantin Sekolah yang dirancang untuk memudahkan siswa dalam memesan makanan secara online dari kantin. Proyek ini dikembangkan oleh dua siswa sebagai bagian dari tugas ujian kompetensi kejuruan. Proyek ini berhasil diselesaikan dalam waktu yang ditentukan dan mendapatkan apresiasi yang tinggi dari penguji ujikom karena inovasi dan kegunaannya dalam konteks sekolah. ",
    },
    {
      year: "2023",
      title: "Program Dicoding Pengembangan Website Laundry",
      company: "Analis & Designer",
      description:
        "Proyek ini bertujuan untuk merancang dan mengembangkan sebuah website laundry yang memudahkan pelanggan dalam memesan layanan laundry secara online. Proses perancangan melibatkan berbagai langkah mulai dari pembuatan flowchart, use case, activity diagram, hingga penerapan metode Software Development Life Cycle (SDLC) dan pembuatan mockup menggunakan Figma. Proyek ini juga salah satu program yang diselenggarakan dicoding.",
    },
    {
      year: "2024",
      title: "Website Sistem Pengajuan PKL Online",
      company: "Fullstack Developer",
      description:
        "Sistem Pengajuan PKL Online yang dirancang untuk memudahkan siswa dalam mengajukan permohonan praktik kerja lapangan secara digital. Proyek ini dikembangkan oleh tim yang terdiri dari empat orang sebagai bagian dari tugas ujian level. Tujuan utama dari sistem ini adalah untuk meningkatkan efisiensi dan transparansi dalam proses pengajuan dan persetujuan PKL, serta mendapatkan nilai yang memuaskan berdasarkan evaluasi dari penguji.",
    },
  ];

  return (
    <>
      <section
        id="experiences"
        className="bg-gray-900 py-5 md:py-24 relative overflow-hidden"
      >
        <div className="absolute inset-x-0 top-[-2rem] md:h-[4rem] h-[3rem] w-[250vh] bg-yellow-600 transform rotate-[5deg] origin-top-left mt-24" >
          <h2 className="text-2xl md:text-4xl font-bold text-gray-100 absolute z-10 mt-2 md:mt-2 md:pl-24 pl-12 rotate-[1deg]"  data-aos="fade-up" >
            Experience
          </h2>
        </div>
        <div className="md:px-16 px-10 mt-[25vh] md:mt-[30vh]">
          <div className="relative before:absolute before:left-1 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-700">
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={index}
                year={exp.year}
                title={exp.title}
                company={exp.company}
                description={exp.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ExperienceSection;
