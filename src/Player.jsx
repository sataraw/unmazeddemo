import * as React from "react";
import ReactPlayer from "react-player";
import { SliderContext } from "./ContinuousSlider";

function Player(props) {
    const playerRef = React.useRef(null);
    React.useEffect(() => {
        console.log("effect");
        if (props.returnClicked) {
          console.log("clicked");
          const currentTime = playerRef.current.getCurrentTime();
          playerRef.current.seekTo(currentTime - 5);
          props.onReturnReset();
        }
      }, [props.returnClicked]);
    const speed = React.useContext(SliderContext); 
    const playbackRate = 0.25 + (speed * 0.015);
    return (
    <div className="playerWrapper">
        <ReactPlayer 
        className="player" 
        url={'https://www.youtube.com/watch/VixkA3P-ULE'}
        width="100%"
        height="100%"
        ref={playerRef}
        muted={true}
        playing={true}
        playbackRate={playbackRate}
        />
    </div>)
}
export default Player;