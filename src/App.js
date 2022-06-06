import { Component } from "react";
import videos from "./data/videos.json";
import videoDetails from "./data/video-details.json";
import "./App.scss";
import SelectedVideoDetails from "./components/selected-video-details/SelectedVideoDetails";
import OtherVideos from "./components/other-videos/OtherVideos";
import Nav from "./components/nav/Nav";
import SelectedVideoHero from "./components/selected-video-hero/SelectedVideoHero";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SelectedVideoComments from "./components/selected-video-comments/SelectedVideoComments";
import Upload from "./components/upload/Upload";
import axios from "axios";

const api_key = '?api_key="2d876b55-e885-415f-8c94-d9c6445ce9e6"&url';
const url = "https://project-2-api.herokuapp.com/videos";

const getVids = () => {
  axios.get(`${url}${api_key}`).then((response) => {
    // var chosen = response.filter((item) => item.id === id);
    // console.log(chosen);
    console.log(response);
  });
};
var id = "25ce5d91-a262-4dcf-bb87-42b87546bcfa";

const getVidDetails = (id) => {
  axios.get(`${url}/${id}${api_key}`).then((response) => {
    console.log(response);
  });
};

const chosenVid = (id) => {
  axios.get(`${url}${api_key}`).then((response) => {
    var chosen = response.data.filter((item) => item.id === id);
    console.log(chosen);
    return chosen;
  });
};

getVids();
getVidDetails(id);
chosenVid(id);

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
            <Route
              exact
              path="/video/:videoID"
              component={[
                SelectedVideoHero,
                SelectedVideoDetails,
                SelectedVideoComments,
                OtherVideos,
              ]}
            />
            {/* SelectedVideoHero selectedVideo={this.state.selectedVideo} /> */}
            {/* <div className="main">
              <div className="selectedVid"> */}
            {/* <SelectedVideoDetails
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
                /> */}
            {/* </div>
            </div> */}
            <Route path="/upload" component={Upload} />
            {/* <Upload chosenThumbnail={this.state.chosenThumbnail} />
            </Route> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
