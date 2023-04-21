import React from 'react' 
import goButton from './images/Go-Button.svg'
import settingButton from './images/Settings-Button.svg'
import supportButton from './images/Support-Button.svg'



function ToolBar() {
    return (
        <div className='toolbar'>
            <button id='GoButtonId'>
               <img src={goButton} className='GoButton'></img>
               <div>
                    <span>Go</span>
                </div>
            </button>
            <button id='SupportButtonId'>
                <img src={supportButton} className='SupportButton'></img>
                <div>
                    <span>Support</span>
                </div>
            </button>
            <button id='SettingButtonId'>
                <img src={settingButton} className='SettingButton'></img>
                <div>
                    <span>Settings</span>
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