import React from "react";
import "./SelectedVideoComments.scss";
import userImage from "../../assets/Images/Mohan-muruge.jpg";
import placeholder from "../../assets/Images/placeholder.png";
import comment from "../../assets/Icons/add_comment.svg";

const SelectedVideoComments = (props) => {
  return (
    <div className="comments__section">
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
          <form className="comments__input-container">
          <label for="comments__input" className="comments__input-heading">join the conversation</label>
            <input
            type="text"
              name="comments__input"
              id="comments__input"
              className="comments__input"
              placeholder="Add a new comment"
            ></input>
            <button className="comments__button" type="submit">
              <img className="button__icon" alt="" src={comment}></img>
              <p className="button__label">comment</p>
            </button>
          </form>
        </div>
      </div>
      {props.selectedVideo.comments.map((comment) => {
        const commentDate = new Date(comment.timestamp);
        return (
          <div className="comments__comment-container"
          key={comment.id}>
            <div className="comments__avi-container">
            <img src={placeholder} alt="" className="comments__avatar" /> 
              </div>
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

export default SelectedVideoComments;
