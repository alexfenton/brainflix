import { Component } from "react";

import "./App.scss";
import Nav from "./components/nav/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Upload from "./components/upload/Upload";
import axios from "axios";
import Homepage from "./components/Homepage/Homepage";

const url = "http://localhost:8080/videos";

const getVids = () => {
  axios.get(`${url}`).then((response) => {});
};
var id = "25ce5d91-a262-4dcf-bb87-42b87546bcfa";

const getVidDetails = (id) => {
  axios.get(`${url}/${id}`).then((response) => {});
};

const chosenVid = (id) => {
  axios.get(`${url}`).then((response) => {
    var chosen = response.data.filter((item) => item.id === id);
    return chosen;
  });
};

getVids();
getVidDetails(id);
chosenVid(id);

class App extends Component {
  state = {
    videos: [],
    selectedVideo: [],
    chosenThumbnail: [],
  };

  renderSelectedVideo = (id) => {
    const newSelectedVideo = getVidDetails().response.data.filter(
      (video) => video.id === id
    );

    this.setState({ selectedVideo: newSelectedVideo[0] });
    return newSelectedVideo;
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/videos/:videoID" component={Homepage} />
            <Route path="/upload" component={Upload} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
