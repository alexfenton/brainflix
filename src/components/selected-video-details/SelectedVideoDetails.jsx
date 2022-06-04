import React from "react";
import "./SelectedVideoDetails.scss";
import views from "../../assets/Icons/views.svg";
import likes from "../../assets/Icons/likes.svg";

const SelectedVideoDetails = (props) => {
  const longDate = new Date(props.selectedVideo.timestamp);

  return (
    <div className="selectedVideo__section">
      <div className="selectedVideo__heading-container">
        <h2 className="selectedVideo__heading">{props.selectedVideo.title}</h2>
      </div>
      <div className="selectedVideo__details-container">
        <div className="selectedVideo__details">
          <p className="selectedVideo__details-author">
            By {props.selectedVideo.channel}
          </p>
        </div>
        <div className="selectedVideo__details">
          <p className="selectedVideo__timestamp">
            {longDate.toLocaleDateString("en-US")}
          </p>
        </div>
        <div className="selectedVideo__details">
          <img className="selectedVideo__icon" src={views} alt=""></img>
          {props.selectedVideo.views}
        </div>
        <div className="selectedVideo__details">
          <img className="selectedVideo__icon" src={likes} alt=""></img>
          {props.selectedVideo.likes}
        </div>
      </div>
      <div className="selectedVideo__description">
        {props.selectedVideo.description}
      </div>
    </div>
  );
};

export default SelectedVideoDetails;
