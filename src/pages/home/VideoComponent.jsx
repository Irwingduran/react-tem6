import React from "react";

const VideoComponent = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center px-6 lg:px-8 mt-10">
      {/* Video Section */}
      <div className="w-full md:w-1/2 mb-6 md:mb-0 md:mr-8">
        <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
          <iframe
            src="https://www.youtube.com/embed/dQ-GGaIOweo?si=bMJc1l8Gkpc-mUCA"
            title="YouTube video player"
            className="absolute top-0 left-0 w-full h-full border-0 rounded-lg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Aprende más...</h2>
        <h3 className="text-2xl font-semibold text-gray-700 mb-2">
           Mitos sobre la urología:
        </h3>
        <p className="text-gray-600 mb-4">
        El Urólogo Ivo Humberto Pineda nos habla sobre los mitos de la urología.
        </p>
    

      
      </div>
    </div>
  );
};

export default VideoComponent;
