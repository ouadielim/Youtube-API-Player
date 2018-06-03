import React, { Component } from 'react';

class SearchBar extends Component {

  //constructor  (initialize state)

  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }


  render() {
    return (
      <div>
        <input
          type="text"
          onChange={ e => this.setState({term: e.target.value}) }
          value={this.state.term}
        />
        <div>{this.state.term}</div>
      </div>
    );
  }
}


export default SearchBar;
