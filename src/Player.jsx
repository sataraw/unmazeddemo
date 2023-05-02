import * as React from "react";
import ReactPlayer from "react-player";
import { SliderContext } from "./ContinuousSlider";
import {getStorage, ref, getDownloadURL} from "firebase/storage";
import { error } from "console";


function Player(props) {
    const playerRef = React.useRef(null);

    React.useEffect(() => {
        if (props.returnClicked) {
          const currentTime = playerRef.current.getCurrentTime();
          playerRef.current.seekTo(currentTime - 5);
          props.onReturnReset();
        }
      }, [props.returnClicked]);

    const [videoUrl, setVideoUrl] = React.useState(null);

    React.useEffect(() => {
        const storage = getStorage();
        getDownloadURL(ref(storage, '/TUIC_unmazed.mp4'))
          .then((url) => {
            setVideoUrl(url);
          })
          .catch((error) => {
            console.log('couldnt fetch video')
          })
      }, []);

    const speed = React.useContext(SliderContext); 
    const playbackRate = 0.25 + (speed * 0.015);

    const [playing, setPlaying] = React.useState(true);

    const handleTap = () => {
      setPlaying(!playing);
      console.log('TAP')
    };

    return (
    <div className="playerWrapper" onClick={handleTap}>
        <ReactPlayer 
        className="player" 
        url={videoUrl}
        width="100%"
        height="100%"
        ref={playerRef}
        muted={true}
        playing={playing}
        playbackRate={playbackRate}
        />
    </div>)
}
export default Player;