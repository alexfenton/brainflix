import React from "react";
import "./SelectedVideoHero.scss";


const SelectedVideoHero = (props) => {
  
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

export default SelectedVideoHero;