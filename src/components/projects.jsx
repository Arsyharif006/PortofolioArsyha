import React, { useState } from 'react';

const projects = [
  {
    id: 1,
    image: 'path/to/image1.jpg',
    title: 'Project 1',
    category: 'Web Development',
  },
  {
    id: 2,
    image: 'path/to/image2.jpg',
    title: 'Project 2',
    category: 'Mobile Development',
  },
  {
    id: 3,
    image: 'path/to/image3.jpg',
    title: 'Project 3',
    category: 'UI/UX',
  },
  {
    id: 4,
    image: 'path/to/image4.jpg',
    title: 'Project 4',
    category: 'Web Development',
  },
  // Add more projects as needed
];

const categories = ['All', 'Web Development', 'Mobile Development', 'UI/UX'];

const ProjectSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-12 md:py-16 px-8 md:px-16 bg-gray-900">
     <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 relative" data-aos="fade-up">
        Projects
        <div className='h-2 w-[11vh] md:w-[19vh] bg-yellow-600 rounded-lg mt-2 ' data-aos="fade-up"></div>
      </h2>
      <div className="flex justify-center flex-wrap mb-8" data-aos="fade-up">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-3 py-1 m-1 rounded-full md:text-lg text-sm ${
              selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-400'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" data-aos="fade-up">
        {filteredProjects.map((project) => (
          <div key={project.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-32 object-cover" />
            <div className="p-2">
              <h3 className="text-base font-semibold text-gray-800 mb-1">{project.title}</h3>
              <p className="text-sm text-gray-600">{project.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
