import { Component } from "react";
import videos from "./data/videos.json";
import videoDetails from "./data/video-details.json";
import "./App.scss";
import SelectedVideoDetails from "./components/selected-video-details/SelectedVideoDetails";
import { OtherVideos } from "./components/other-videos/OtherVideos";
import Nav from "./components/nav/Nav";
import SelectedVideoHero from "./components/selected-video-hero/SelectedVideoDesktop";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SelectedVideoComments from "./components/selected-video-comments/SelectedVideoComments";
import Upload from "./components/upload/Upload";

class App extends Component {
  state = {
    videos: videos,
    selectedVideo: videoDetails[0],
    commentValue: "test",
    commentLine: [{ commentID: "", text: "test" }],
    chosenThumbnail:
      videoDetails[Math.floor(Math.random() * videoDetails.length)],
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
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/">
              <SelectedVideoHero selectedVideo={this.state.selectedVideo} />
              <div className="main">
                <div className="selectedVid">
                  <SelectedVideoDetails
                    selectedVideo={this.state.selectedVideo}
                  />
                  <SelectedVideoComments
                    selectedVideo={this.state.selectedVideo}
                    commentValue={this.state.commentValue}
                    commentID={this.state.commentLine.commentID}
                    commentText={this.state.commentLine.text}
                  />
                </div>
                <OtherVideos
                  videos={this.state.videos}
                  currentVideoID={this.state.selectedVideo.id}
                  selectedVideo={this.renderSelectedVideo}
                />
              </div>
            </Route>
            <Route path="/upload">
              <Upload chosenThumbnail={this.state.chosenThumbnail} />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
