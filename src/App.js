import { Component } from "react";
import videos from "./data/videos.json";
import videoDetails from "./data/video-details.json";
import "./App.scss";
import SelectedVideo from "./components/selected-video/SelectedVideo";
import { OtherVideos } from "./components/other-videos/OtherVideos";
import Nav from "./components/nav/Nav";
import SelectedVideoDesktop from "./components/selected-video/SelectedVideoDesktop";

class App extends Component {
  state = {
    videos: videos,
    selectedVideo: videoDetails[0],
    commentValue: "test",
    commentLine: [{ commentID: "", text: "test" }],
  };

  renderSelectedVideo = (id) => {
    const newSelectedVideo = videoDetails.filter((video) => video.id === id);

    this.setState({ selectedVideo: newSelectedVideo[0] });
    return newSelectedVideo;
  };
  handleComment = (e) => {
    this.setState({
      commentValue: e.target.value,
    });
  };
  render() {
    // console.log(this.state.allVideos);
    return (
      <div className="App">
        <Nav />
        <div className="main">
          {/* <SelectedVideoDesktop selectedVideo={this.state.selectedVideo} /> */}
          <SelectedVideo
            selectedVideo={this.state.selectedVideo}
            commentValue={this.state.commentValue}
            commentID={this.state.commentLine.commentID}
            commentText={this.state.commentLine.text}
          />
          <OtherVideos
            videos={this.state.videos}
            currentVideoID={this.state.selectedVideo.id}
            selectedVideo={this.renderSelectedVideo}
          />
        </div>
      </div>
    );
  }
}

export default App;
