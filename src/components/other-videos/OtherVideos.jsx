import "./OtherVideos.scss";
import axios from "axios";
import React, { Component } from "react";
import { api_url, api_key} from "../../utils/api";

import { NavLink } from "react-router-dom";

export default class OtherVideos extends Component {
  state = {
    videos: [],
  };

  // api_key may not have imported
  componentDidMount(){
    axios.get(`${api_url}${api_key}`).then((response)=>{
      this.setState({videos : response.data.videos})  

      // check "videos" here after data - may not be correct
    })
  }


  
  render (){
    
    console.log(this.state.videos)
  // const nonSelected = this.state.videos.filter((video) => video.id !== currentVideoID);  

  return (
    <div className="otherVideos__section">
      <div className="otherVideos__heading-container">
        <p className="otherVideos__heading">Next videos</p>
      </div>
      {this.state.videos.map((video) => {
        return (
          <div
            className="otherVideos__item-container"
            key={video.id}
            // onClick={() => selectedVideo(video.id)}
          >
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
        );
      })}
    </div>
  );
};
}