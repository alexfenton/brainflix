import React, { Component } from "react";
import "./Upload.scss";
import { NavLink } from "react-router-dom";
import axios from "axios";

export default class Upload extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const postedVideo = JSON.stringify({
      title: event.target.title.value,
      description: event.target.description.value,
    });

    axios.post("http://localhost:8080/upload", { postedVideo });
  };

  state = {
    chosenThumbnail: {},
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
              src={"../../assets/Images/placeholder.png"}
              alt=""
            ></img>
          </div>
          <form className="upload__form" onSubmit={this.handleSubmit}>
            <label for="title" className="upload__input-heading">
              title your video
            </label>
            <br></br>
            <input
              type="text"
              id="title"
              name="title"
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
              id="description"
              name="description"
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
