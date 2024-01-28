import React from 'react';

function VideoPlayer({ videoSource, className }) {
  return (
    <div className={className}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover rounded"
      >
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoPlayer;
