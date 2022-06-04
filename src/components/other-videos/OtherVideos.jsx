     import "./OtherVideos.scss";

export const OtherVideos = ({ videos, currentVideoID, selectedVideo }) => {
  const nonSelected = videos.filter((video) => video.id !== currentVideoID);
  return (
    <div className="otherVideos__section">
      <div className="otherVideos__heading-container">
        <p className="otherVideos__heading">Next videos</p>
      </div>
      {nonSelected.map((video) => {
        return (
          <div className="otherVideos__item-container"
          key={video.id}
          onClick={()=>selectedVideo(video.id)}>
            <div className="otherVideos__thumbnail-container">
              <img
                className="otherVideos__thumbnail"
                src={video.image}
                alt=""
              ></img>
            </div>
            <div className="otherVideos__text-container">
              <div className="otherVideos__title-container">
                <p className="otherVideos__title">
                  {video.title}
                </p>
                </div>
              <div className="otherVideos__channel-container">
              <p className="otherVideos__channel">
                  {video.channel}
                </p>
                </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
