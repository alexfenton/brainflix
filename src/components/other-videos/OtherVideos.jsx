import "./OtherVideos.scss";
import axios from "axios";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class OtherVideos extends Component {
  state = {
    videos: [],
  };

  componentDidMount() {
    axios.get(`http://localhost:8080/videos`).then((response) => {
      this.setState({ videos: response.data});
    });
  }

  render() {
    const nonSelected = this.state.videos.filter(
      (video) => video.id !== this.state.selectedVideo
    );

    return (
      <div className="otherVideos__section">
        <div className="otherVideos__heading-container">
          <p className="otherVideos__heading">Next videos</p>
        </div>
        {nonSelected.map((video) => {
          return (
            <NavLink
              className="nav__link"
              key={video.id}
              to={`/videos/${video.id}`}
            >
              <div className="otherVideos__item-container" key={video.id}>
                <div className="otherVideos__thumbnail-container">
                  <img
                    className="otherVideos__thumbnail"
                    src={video.image}
                    alt=""
                  ></img>
                </div>
                <div className="otherVideos__text-container">
                  <div className="otherVideos__title-container">
                    <p className="otherVideos__title">{video.title}</p>
                  </div>
                  <div className="otherVideos__channel-container">
                    <p className="otherVideos__channel">{video.channel}</p>
                  </div>
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    );
  }
}
