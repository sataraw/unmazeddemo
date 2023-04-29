import * as React from "react";
import ReactPlayer from "react-player";
import { SliderContext } from "./ContinuousSlider";

function Player() {
    const speed = React.useContext(SliderContext); 
    return (
    <div className="playerWrapper">
        <h1>{speed}</h1>
        <ReactPlayer 
        className="player" 
        url={'https://www.youtube.com/watch?v=GDzzttUR7mM'}
        width="100%"
        height="100%"
        muted={true}
        />
    </div>)
}
export default Player;