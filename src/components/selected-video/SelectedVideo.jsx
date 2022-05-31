import React from "react";
import "./SelectedVideo.scss";
import userImage from "../../assets/Images/Mohan-muruge.jpg";
import comment from "../../assets/Icons/add_comment.svg";
import views from "../../assets/Icons/views.svg";
import likes from "../../assets/Icons/likes.svg";

const SelectedVideo = (props) => {
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
      <div className="comments__container">
        <div className="comments__counter-container">
          <p className="comments__counter">
            {props.selectedVideo.comments.length} comments
          </p>
        </div>
        <div className="comments__user-container">
          <div className="comments__avatar-container">
            <img src={userImage} alt="You" className="comments__avatar" />
          </div>
          <div className="comments__input-container">
            <div className="comments__input-heading">join the conversation</div>
            <input
              className="comments__input"
              placeholder="Add a new comment"
            ></input>
            <button className="comments__button">
              <img className="button__icon" alt="" src={comment}></img>
              <p className="button__label">comment</p>
            </button>
          </div>
        </div>
      </div>
      {props.selectedVideo.comments.map((comment) => {
        const commentDate = new Date(comment.timestamp);
        return (
          <div className="comments__comment-container">
            <div className="comments__avi-container">pic</div>
            <div className="comments__content-container">
              <div className="comments__details-container">
                <div className="comments__name-container">
                  <p className="comments__name"> {comment.name}</p>
                </div>
                <div className="comments__date-container">
                  <p className="comments__date">
                    {" "}
                    {commentDate.toLocaleDateString("en-US")}
                  </p>
                </div>
              </div>
              <div className="comments__post-container">
                <div className="comments__post">{comment.comment}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SelectedVideo;
