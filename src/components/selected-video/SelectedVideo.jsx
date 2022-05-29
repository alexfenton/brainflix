import React from "react";
import "./SelectedVideo.scss";
import {displayComment} from "./sandbox"

const SelectedVideo = (props) => {
  console.log(props.selectedVideo.comments);
  console.log(props.title);
  return (
    <div className="selectedVideo__section">
      <div className="selectedVideo__image-container">
        <img
          className="selectedVideo__image"
          src={props.selectedVideo.image}
          alt="video"
        ></img>
      </div>
      <div className="selectedVideo__heading-container">
        <p className="selectedVideo__heading">{props.selectedVideo.title}</p>
      </div>
      <div className="selectedVideo__details-container">
        <div className="selectedVideo__details">
          <p className="selectedVideo__details-author">
            By {props.selectedVideo.channel}
          </p>
        </div>
        <div className="selectedVideo__details">
          <p className="selectedVideo__timestamp">
            {props.selectedVideo.timestamp}
          </p>
        </div>
        <div className="selectedVideo__details">
          {props.selectedVideo.views}
        </div>
        <div className="selectedVideo__details">
          {props.selectedVideo.likes}
        </div>
      </div>
      <div className="selectedVideo__description">
        {props.selectedVideo.description}
      </div>
      <div className="comments__container">
        <div className="comments__counter-container">
          <p className="comments__counter">
            {props.selectedVideo.comments.length} comments
          </p>
        </div>
        <div className="comments__user-container">
          <div className="comments__avi-container">pic</div>
          <div className="comments__input-container">
            <input
              className="comments__input"
              placeholder="Add a new comment"
            ></input>
            <button className="comments__button">
              <img
                className="button-icon"
                href="../../assets/Icons/add_comment.svg"
                alt=""
              ></img>
              comment
            </button>
          </div>
        </div>
        {props.selectedVideo.comments.map((comment) => (
          <div className="comments__comment-container">
            <div className="comments__avi-container">pic</div>
            <div className="comments__content-container">
              <div className="comments__details-container">
                <div className="comments__name-container">
                  <p className="comments__name"> {comment.name}</p>
                </div>
                <div className="comments__date-container">
                  <p className="comments__date"> {comment.timestamp}</p>
                </div>
              </div>
              <div className="comments__post-container">{comment.comment}</div>
            </div>
          </div>
        ))}
      </div>
      {/* {props.selectedVideoProp.comments.map((comment) => {
        return (
        <h1>{comment.title}</h1>
        );
      })} */}
    </div>
  );
};

export default SelectedVideo;
