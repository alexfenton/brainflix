import { Component } from "react";
import videos from "./data/videos.json";
import videoDetails from "./data/video-details.json";
import "./App.css";
import SelectedVideo from "./components/selected-video/SelectedVideo";
import { OtherVideos } from "./components/other-videos/OtherVideos";
import Nav from "./components/nav/Nav";

class App extends Component {
  state = {
    videos: videos,
    selectedVideo: videoDetails[0],
  };

  renderSelectedVideo = (id) => {
    const newSelectedVideo = videoDetails.filter((video) => video.id === id);

    this.setState({ selectedVideo: newSelectedVideo[0] });
    return newSelectedVideo;
  };
  render() {
    // console.log(this.state.allVideos);
    return (
      <div className="App">
        <Nav />
        <SelectedVideo selectedVideo={this.state.selectedVideo} />
        <OtherVideos
          videos={this.state.videos}
          currentVideoID={this.state.selectedVideo.id}
          selectedVideo={this.renderSelectedVideo}
        />
      </div>
    );
  }
}

export default App;
