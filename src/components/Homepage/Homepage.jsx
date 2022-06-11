import React, { Component } from "react";
import "./Homepage.scss";
import { getSingleVideo } from "../../utils/api";
import SelectedVideoDetails from "../selected-video-details/SelectedVideoDetails";
import SelectedVideoComments from "../selected-video-comments/SelectedVideoComments";
import OtherVideos from "../other-videos/OtherVideos";

export default class Homepage extends Component {
  state = {
    videoData: null,
    selectedVideo: "25ce5d91-a262-4dcf-bb87-42b87546bcfa",
  };

  componentDidMount() {
    const videoID = "25ce5d91-a262-4dcf-bb87-42b87546bcfa";

    getSingleVideo(videoID).then((response) => {
      this.setState({ videoData: response.data });
      console.log(response.data, "test");
    });
  }

  componentDidUpdate(prevProps) {
    const videoID = this.props.match.params.videoID;
    console.log(this.props.match);
    console.log(videoID, "video ID");
    if (prevProps.match.params.videoID !== videoID) {
      getSingleVideo(videoID).then((response) => {
        this.setState({ videoData: response.data });
        console.log(response.data, "test");
      });
    }
  }

  render() {
    if (!this.state.videoData) {
      return;
    }
    const { image } = this.state.videoData;
    console.log(this.state.videoData, "test");
    return (
      <div className="selectedVideo__section">
        <div className="selectedVideo__image-container">
          <video
            className="selectedVideo__image"
            poster={image}
            controls
          ></video>
        </div>
        <SelectedVideoDetails selectedVideo={this.state.videoData} />
        <SelectedVideoComments selectedVideo={this.state.videoData} />
        <OtherVideos />
      </div>
    );
  }
}
