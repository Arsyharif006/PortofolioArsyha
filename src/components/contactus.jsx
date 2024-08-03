import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      to_email: 'aryaarmdhn006@gmail.com' // Target email address
    };

    emailjs.send(
      'service_8frshyd', // Replace with your EmailJS service ID
      'template_z0539ne', // Replace with your EmailJS template ID
      templateParams,
      'Bv34EjYOXmVERukhe' // Replace with your EmailJS user ID
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Message sent successfully!');
    })
    .catch((err) => {
      console.log('FAILED...', err);
      alert('Failed to send the message. Please try again later.');
    });

    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section  id="contact" className="bg-gray-800 text-white py-0 pt-16 pb-5 md:px-16 px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-12">
        {/* Contact Info */}
        <div className="w-full lg:w-1/2 flex flex-col space-y-6" data-aos="fade">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Contact Us</h2>
            <p className="mt-4 text-gray-400">
            Terima kasih telah meluangkan waktu untuk mengunjungi website portofolio saya. Jika Anda memiliki tawaran, pertanyaan, atau sekedar ingin menghubungi saya, jangan ragu untuk mengontak saya melalui media sosial atau email yang tersedia..
            </p>
          </div>
          <div>
            <h3 className="text-md md:text-xl font-semibold">Telp</h3>
            <p className="text-gray-400">+62-897-8396-392</p>
          </div>
          <div>
            <h3 className="text-md md:text-xl font-semibold">Email</h3>
            <p className="text-gray-400">aryaarmdhn006@gmail.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-1/2 bg-white text-gray-900 p-5 rounded-lg shadow-lg" data-aos="fade">
          <h3 className="text-2xl font-semibold mb-6 text-center">Kirim Pesan</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="name">Nama</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                className="w-full p-3 border border-gray-300 rounded" 
                placeholder="Nama Anda" 
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                className="w-full p-3 border border-gray-300 rounded" 
                placeholder="Email" 
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="message">Pesan</label>
              <textarea 
                id="message" 
                name="message"
                className="w-full p-3 border border-gray-300 rounded" 
                placeholder="Ketik pesan anda..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-blue-800 text-white py-3 rounded hover:bg-blue-700 transition duration-300"
            >
              Kirim
            </button>
          </form>
        </div>
      </div>
      <p className="text-gray-200 text-center mt-10">© 2024 Arsyha. All rights reserved.
      </p>
    </section>
  );
}

export default ContactUs;
