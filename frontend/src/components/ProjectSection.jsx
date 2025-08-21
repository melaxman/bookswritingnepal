import React, { useState, useEffect } from 'react';
import project1 from '../assets/b1.jpg';
import project2 from '../assets/b2.jpg';
import project3 from '../assets/b3.jpg';
import project4 from '../assets/b4.jpg';
// import project5 from '../assets/b5.jpg';
import project6 from '../assets/b6.jpg';

// ✅ Updated image order: b1, b6, b4, b2, b3, b5
const projects = [
  { image: project1 },
  { image: project6 },
  { image: project4 },
  { image: project2 },
  { image: project3 },
  // { image: project5 }
];

const ProjectSection = () => {
  const [start, setStart] = useState(0);
  const [showImage, setShowImage] = useState(null);
  const visible = 3; // Show only 3 books at a time

  useEffect(() => {
    const interval = setInterval(() => {
      setStart((prev) => (prev + 1) % projects.length);
    }, 3000); // Slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setStart((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleNext = () => {
    setStart((prev) => (prev + 1) % projects.length);
  };

  const visibleProjects = [];
  for (let i = 0; i < visible; i++) {
    visibleProjects.push(projects[(start + i) % projects.length]);
  }

  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Centered heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-16">
          Our Books
        </h2>

        {/* Controls */}
        <div className="relative">
          <div className="absolute -top-16 right-0 flex items-center space-x-4 z-10">
            <button
              onClick={handlePrev}
              className="bg-white shadow-xl rounded-full w-12 h-12 flex items-center justify-center text-2xl text-indigo-700 hover:bg-indigo-600 hover:text-white transition"
              aria-label="Previous"
            >
              &#8592;
            </button>
            <button
              onClick={handleNext}
              className="bg-white shadow-xl rounded-full w-12 h-12 flex items-center justify-center text-2xl text-indigo-700 hover:bg-indigo-600 hover:text-white transition"
              aria-label="Next"
            >
              &#8594;
            </button>
          </div>

          {/* Book Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 justify-center">
            {visibleProjects.map((project, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 150} // stagger animation by index
                data-aos-once="false" // allow animation every time on scroll
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 group transition-all hover:shadow-xl hover:border-indigo-400 cursor-pointer max-w-[300px] mx-auto"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={`Book ${idx + 1}`}
                    className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <button
                      className="bg-white rounded-full p-3 shadow text-xl hover:bg-indigo-100 transition"
                      onClick={() => setShowImage(project.image)}
                      aria-label="View Image"
                    >
                      <svg
                        className="w-7 h-7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="12" cy="12" r="3" />
                        <path d="M2.05 12C3.81 7.61 7.92 4.5 12 4.5s8.19 3.11 9.95 7.5c-1.76 4.39-5.87 7.5-9.95 7.5s-8.19-3.11-9.95-7.5z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {showImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setShowImage(null)}
        >
          <div
            className="relative bg-white rounded-xl shadow-2xl p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-3 text-3xl text-gray-700 hover:text-red-500"
              onClick={() => setShowImage(null)}
              aria-label="Close"
            >
              ×
            </button>
            <img
              src={showImage}
              alt="Project"
              className="max-w-[80vw] max-h-[70vh] rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectSection;
