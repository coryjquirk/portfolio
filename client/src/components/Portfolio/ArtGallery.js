import React, { Component } from 'react';
import ArtData from './ArtData';

class ArtGallery extends Component {
  constructor() {
    super();
    this.state = ArtData.adata;
  }

  render() {
    return (
      <div>
          <p>test</p>
        {this.state.initialdata.map(function(item,index) {
            return (
                <li key={index}>
                 <img className="sliderImage" src="" role="presentation" alt="image"/>
                </li>       
            )
        },this)}
      </div>
    );
  }
}
export default ArtGallery;