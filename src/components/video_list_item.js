import React from 'react';


const VideoListItem = ({video}) => {

  const imageURL = video.snippet.thumbnails.default.url;
  const imageTitle = video.snippet.title;

  return (
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img src={imageURL} alt="" className="media-object" />
        </div>
        <div className="media-body">
          <div className="media-heading">{imageTitle}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
