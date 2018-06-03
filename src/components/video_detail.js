import React from 'react';

const VideoDetail = ({video}) => {

  if(!video) {
    return <div>Loading...</div>;
  } else {
    const videoID = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoID}`; //string interpolation
    return(
      <div className="video-detail col-md-6">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe src={url} frameBorder="0" className="embed-responsive-item"></iframe>
        </div>
        <div className="details">
          <div>{video.snippet.title}</div>
          <div>{video.snippet.description}</div>
        </div>
      </div>
    );
  }
};

export default VideoDetail;