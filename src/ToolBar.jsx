import React from 'react' 
import goButton from './svg/Go-Button.svg'
import settingButton from './svg/Settings-Button.svg'
import compass from './svg/compass.svg'



function ToolBar() {
    return (
        <div className='toolbar'>
            <button id='GoButtonId'>
               <img src={goButton} className='toolbarImage'></img>
               <div>
                    <span className='toolbarText'>Go</span>
                </div>
            </button>
            <button id='ExploreButton'>
                <img src={compass} className='toolbarImage'></img>
                <div>
                    <span className='toolbarText'>Explore</span>
                </div>
            </button>
            <button id='SettingButtonId'>
                <img src={settingButton} className='toolbarImage'></img>
                <div>
                    <span className='toolbarText'>Settings</span>
                </div>
            </button>
            
        </div>
    )
}

{/* function ToolBar() {
    return (
        <div className="toolbar">
            <button>
                <img src={goButton} className='GoButton'></img>
            </button>
            <button>
                <img src={settingButton} className='SettingButton'></img>
            </button>
            <button>
                <img src={supportButton} classname='SupportButton'></img>
            </button>
        </div>
    )
} */}
export default ToolBar;