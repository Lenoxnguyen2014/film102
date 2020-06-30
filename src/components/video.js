import React from "react"


const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div >
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
      autoPlay loop playsInline muted
      className="has-ratio" width="640" height="360" 
    />
  </div>
)
export default Video