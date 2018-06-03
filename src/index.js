//import libraries we need
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import keys from '../api-keys';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

//create new component, this component should produce HTML
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('morocco');
  }

  videoSearch(term) {
    YTSearch({key: keys.youtubeKey, term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
       });
    });
  }


  render() {
    return (
      <div className="container">
        <div className="row">
          <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
        </div>
        <div className="row">
          <VideoDetail
            video={this.state.selectedVideo}
          />
          <VideoList
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
            videos={this.state.videos}
          />
        </div>
      </div>
    );
  }
};

//put this component on page
ReactDOM.render(<App/>, document.querySelector('.container'));
