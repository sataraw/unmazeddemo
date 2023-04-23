import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Add from "@mui/icons-material/VolumeDown";
import Remove from "@mui/icons-material/VolumeUp";
import Slider from "@mui/material/Slider";
import currentImage from "./images/testImage.png";
import ContinuousSlider from './ContinuousSlider'

function Content() {

  return (
    <div className="contentWrapper">
      <img src={currentImage} className="currentImage"></img>
        <ContinuousSlider/>
    </div>
  );
}
export default Content;
