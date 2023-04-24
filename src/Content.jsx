import * as React from "react";
import currentImage from "./images/testImage.png";
import ContinuousSlider from './ContinuousSlider'
import SearchBar from './SearchBar';

function Content() {

  return (
    <div className="contentWrapper">
      <img src={currentImage} className="currentImage"></img>
      <ContinuousSlider/>
      <SearchBar className="SearchBar"/>
    </div>
  );
}
export default Content;
