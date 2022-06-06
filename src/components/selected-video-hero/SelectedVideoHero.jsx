import React, { Component } from "react";
import "./SelectedVideoHero.scss";
import { api_key, api_url } from "../../utils/api";
import axios from "axios";
import { Link } from "react-router-dom";
import { getSingleVideo } from "../../utils/api";

export default class SelectedVideoHero extends Component {
  state = {
    videoData: null,
    selectedVideo: "id",
  };

  componentDidMount() {
    const videoID = this.props.match.params.videoID;

    getSingleVideo(videoID).then((response) =>
      this.setState({ videoData: response.data.videos })
    );
  }

  componentDidUpdate(prevProps) {
    const videoID = this.props.match.params.videoID;

    if (prevProps.match.params.videoID !== videoID) {
      axios
        .get(`${api_url}/${videoID}${api_key}`)
        .then((response) =>
          this.setState({ videoData: response.data.videos })
        );
    }
  }

  render() {

const {image} = this.state.data.videoData;

    return (
      <div className="selectedVideo__section">
        <div className="selectedVideo__image-container">
          <video
            className="selectedVideo__image"
            poster={image}
            controls
          ></video>
        </div>
      </div>
    );
  }
}
