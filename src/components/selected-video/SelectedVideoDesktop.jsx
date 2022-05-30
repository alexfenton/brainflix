import React from "react";
import "./SelectedVideo.scss";


const SelectedVideoDesktop = (props) => {
  
  return (
    <div className="selectedVideo__section">
      <div className="selectedVideo__image-container">
        <video
          className="selectedVideo__image"
          poster={props.selectedVideo.image}
          controls
        ></video>
    </div>
      </div>
  )
};

export default SelectedVideoDesktop;