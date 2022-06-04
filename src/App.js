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
import axios from "axios";
import { isCompositeComponent } from "react-dom/test-utils";

const api_key = '?api_key="2d876b55-e885-415f-8c94-d9c6445ce9e6"&url';
const url = "https://project-2-api.herokuapp.com/videos";

const getVids = () => {
  axios.get(`${url}${api_key}`).then((response) => {
    console.log(response);
  });
};
var id = "84e96018-4022-434e-80bf-000ce4cd12b8";

const getVidDetails = (id) => {
  axios.get(`${url}/${id}${api_key}`).then((response) => {
    console.log(response);
  });
};

getVids();
getVidDetails(id);

// getVids().response.map(){
//   console.log(data.title)
// };

class App extends Component {
  state = {
    videos: videos,
    selectedVideo: videoDetails[0],
    chosenThumbnail:
      videoDetails[Math.floor(Math.random() * videoDetails.length)],
  };

  renderSelectedVideo = (id) => {
    const newSelectedVideo = videoDetails.filter((video) => video.id === id);

    this.setState({ selectedVideo: newSelectedVideo[0] });
    return newSelectedVideo;
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
