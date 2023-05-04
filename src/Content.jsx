import * as React from "react";
import ContinuousSlider from './ContinuousSlider';
import SearchBar from './SearchBar';

function Content() {
  const [tutorialStep, setTutorialStep] = React.useState(0);


  return (
    <div className="contentWrapper">
       {tutorialStep === 0 && (
        <div className="tutorialTextbox" id={"id" + tutorialStep} >
          <p>This is a video that can be started and stopped by tapping.</p>
          <button onClick={() => setTutorialStep(1)} className="textboxButton" id={tutorialStep}>Next</button>
          <button onClick={() => setTutorialStep(2)} className="textboxButton" id={tutorialStep}>Skip</button>
        </div>
      )}     
      <SearchBar className="SearchBar" disabled={tutorialStep < 2}/>
      <ContinuousSlider disabled={tutorialStep < 1}/>

      {tutorialStep === 1 && (
        <div className="tutorialTextbox" id={"id" + tutorialStep}>
          <p>This slider is responsible for changing the playback speed. You can rewind using the orange button.</p>
          <button onClick={() => setTutorialStep(2)  } className="textboxButton">Go</button>
        </div>
      )}
    </div>
  );
}
export default Content;
