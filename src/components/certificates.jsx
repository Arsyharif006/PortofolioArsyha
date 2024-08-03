import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

// Import images from local files
import certificate1 from '../image/serti1.png';
import certificate2 from '../image/serti2.png';
import certificate3 from '../image/serti3.png';
import certificate4 from '../image/serti4.png';
import certificate5 from '../image/serti5.png';
import certificate6 from '../image/serti6.png';
import certificate7 from '../image/serti7.png';
import certificate8 from '../image/serti8.png';
import certificate9 from '../image/serti10.png';
import certificate10 from '../image/serti9.png';
import certificate11 from '../image/serti11.png';

const certificates = [
  {
    image: certificate1,
    title: "Belajar Dasar Google Cloud (Dicoding)",
  },
  {
    image: certificate2,
    title: "Pengenalan Logika Pemograman (Dicoding)",
  },
  {
    image: certificate3,
    title: "Dasar Pemograman Untuk Memulai Menjadi Pengembang Software (Dicoding)",
  },
  {
    image: certificate4,
    title: "Belajar Pemograman Javascript (Dicoding)",
  },
  {
    image: certificate5,
    title: "Belajar Membuat FrontEnd (Dicoding)",
  },
  {
    image: certificate6,
    title: "Belajar UX Design (Dicoding)",
  },
  {
    image: certificate7,
    title: "Belajar Pemograman Web (Dicoding)",
  },
  {
    image: certificate8,
    title: "Program Seminar Literasi Digital (Kominfo)",
  },
  {
    image: certificate9,
    title: "Program Pelatihan CSS Magician Series (SMKCODING)",
  },
  {
    image: certificate10,
    title: "Peraih Medali Emas Bidang Informatika (Pon Indonesia)",
  },
  {
    image: certificate11,
    title: "Peraih Medali Emas Bidang Informatika (Puskantara)",
  },
];

const CertificateSection = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (index) => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(index);
      setActiveIndex(index);
    }
  };

  return (
    <section
      id="certificates"
      className="bg-gray-800 py-12 md:py-24 px-12 md:px-16"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-10" data-aos="fade-up">
        Certificates
        <div className='h-2 w-[15vh] md:w-[26vh] bg-yellow-600 rounded-lg mt-2 ' data-aos="fade-up"></div>
      </h2>
      <Swiper
        ref={swiperRef}
        modules={[Navigation]}
        spaceBetween={20}
        navigation={false} // Disable default navigation
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
          0: {
            slidesPerView: 1,
          },
        }}
        className="mySwiper"
      >
        {certificates.map((certificate, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full">
              <img
                src={certificate.image}
                alt={certificate.title}
                className="object-cover"
              />
              <div className="p-4 flex-grow flex flex-col">
                <h3 className="text-lg h-20 font-semibold text-gray-800 mb-2">
                  {certificate.title}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center mt-10">
        {certificates.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`w-3 h-3 rounded-full mx-1 ${
              activeIndex === index ? 'bg-white' : 'bg-gray-500'
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default CertificateSection;
