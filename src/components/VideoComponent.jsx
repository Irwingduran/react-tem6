import React from "react";

const VideoComponent = () => {
  return (
    <div className="px sm:px-6 lg:px-8 text-center mb-12 py-12 px-6 mt-10">
      <h2 className='text-4xl font-bold text-gray-800'>Mitos sobre la Urología</h2>
      <p className='mt-4 text-lg text-gray-600'></p>
      <div className="flex justify-center items-center">
        <div className="w-full max-w-4xl">
          <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
            <iframe
              src="https://www.youtube.com/embed/dQ-GGaIOweo?si=bMJc1l8Gkpc-mUCA"
              title="YouTube video player"
              className="absolute top-0 left-0 w-full h-full border-0 "
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoComponent;


