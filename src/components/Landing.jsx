import React, { useState } from "react";

const Landing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlayButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container lg:bg-blue-50 rounded-3xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-7 py-8 lg:py-24">
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl banner-heading sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
            Transform your <span className="text-blue-700">Earbuds</span> with
            Futuristic <br className="hidden sm:block" />{" "}
            <span className="text-blue-700">AI-Features</span>
          </h1>
          <p className="text-base sm:text-lg">
            Experience the next generation of{" "}
            <span className="font-bold">TWS earbuds</span> with advanced{" "}
            <span className="font-bold">AI-capabilities</span> designed to
            enhance your audio experience and keep you connected seamlessly.
          </p>
        </div>
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
          <div className="relative aspect-w-16 aspect-h-9">
            <button
              onClick={handlePlayButtonClick}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 transition duration-300"
            >
              <i className="fa-solid text-5xl text-red-500 bg-white rounded-full fa-circle-play"></i>
            </button>
            <img
              src="img_main_hero.png"
              alt="AI-powered earbuds"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
          onClick={handleCloseModal}
        >
          <div
            className="rounded-lg overflow-hidden max-w-3xl w-full mx-4 sm:mx-6 lg:mx-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-3xl text-red-500"
            >
              &times;
            </button>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/9E8nJroBppc?si=mLIFOtPki1F8xs6m"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Landing;
