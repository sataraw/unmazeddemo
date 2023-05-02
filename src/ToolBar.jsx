import React from 'react' 
import goButton from './svg/Go-Button.svg'
import settingButton from './svg/Settings-Button.svg'
import compass from './svg/compass.svg'



function ToolBar() {
    return (
        <div className='toolbar'>
            <button id='GoButtonId'>
               <img src={goButton} className='toolbarImage' alt='goButton'></img>
               <div>
                    <span className='toolbarText' id='GoText'>Go</span>
                </div>
            </button>
            <button id='ExploreButton'>
                <img src={compass} className='toolbarImage' alt='Compass'></img>
                <div>
                    <span className='toolbarText'>Explore</span>
                </div>
            </button>
            <button id='SettingButtonId'>
                <img src={settingButton} className='toolbarImage' alt='Settings'></img>
                <div>
                    <span className='toolbarText'>Settings</span>
                </div>
            </button>
            
        </div>
    )
}
export default ToolBar;