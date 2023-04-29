import React from "react";
import { Link } from "react-router-dom";
import ToolBar from './ToolBar.jsx';
import Content from './Content.jsx';
import Cross from './svg/Cross.svg';
import TUILogo from './svg/TUILogo.svg';
import UnmazedLogo from './svg/Unmazed_LandingPage.svg';
import UnmazedText from './svg/Unmazed_Text.svg';
import LandingPage_GoButton from './svg/LandingPage_GoButton.svg'
import { gsap } from 'gsap';



export default function LandingPage() {
return (
  <>
   <div className='OutsideWrapper'>
      <div className='AppWrapper'>
        <div className='LandingWrapper_Outside'>

          <div className='LandingWrapper_Logo'>

            <img src={UnmazedLogo} className="LandingPage_UnmazedLogo"></img>
            <img src={Cross} className="LandingPage_Cross"></img>
            <img src={TUILogo} className="LandingPage_TUI"></img>

          </div>

          <div className="LandingWrapper_Text">

            <img src={UnmazedText} className="LandingPage_UnmazedText"></img>
            <p className="LandingPage_Text">
              The definitive solution for indoor navigation
            </p>

          </div>

          <a href="/Navigation" className="LandingPage_Circle">
            <img src={LandingPage_GoButton} className="LandingPage_GoButton"></img>
          </a>

        </div>

      </div>
    </div> 
  </>
);
}

// gsap.from('.LandingPage_TUI', {duration: 1, y: '25%', x: '20%'});
