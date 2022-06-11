import React, { Component } from "react";
import "./Upload.scss";
import videoDetails from "../../data/video-details.json";
import { NavLink } from "react-router-dom";

export default class Upload extends Component {
  state = {
    chosenThumbnail:
      videoDetails[Math.floor(Math.random() * videoDetails.length)],
  };
  render() {
    return (
      <section className="upload__section">
        <h1 className="upload__section-heading">Upload Video</h1>
        <div className="input__container">
          <div className="image__container">
            <h3 className="upload__input-heading">video thumbnail</h3>
            <img
              className="upload__image"
              src={this.state.chosenThumbnail.image}
              alt=""
            ></img>
          </div>
          <form className="upload__form">
            <label for="upload__title" className="upload__input-heading">
              title your video
            </label>
            <br></br>
            <input
              type="text"
              id="upload__title"
              name="upload__title"
              className="upload__input-title"
              placeholder="Add a title to your video"
            ></input>
            <br></br>
            <label for="upload__description" className="upload__input-heading">
              add a video description
            </label>
            <br></br>
            <input
              type="text"
              id="upload__description"
              name="upload__description"
              className="upload__input-description"
              placeholder="Add a description to your video"
            ></input>
            <br></br>
            <div className="button__container">
              <NavLink className="nav__link" to={`/`}>
                <button className="button__publish" type="submit">
                  publish
                </button>
              </NavLink>
              <button className="button__cancel">cancel</button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}
