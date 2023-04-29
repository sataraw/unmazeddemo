import * as React from "react";
import currentImage from "./images/testImage.png";
import ContinuousSlider from './ContinuousSlider';
import SearchBar from './SearchBar';
import Player from "./Player";

function Content() {

  return (
    <div className="contentWrapper">
      <SearchBar className="SearchBar"/>
      <ContinuousSlider/>
    </div>
  );
}
export default Content;
