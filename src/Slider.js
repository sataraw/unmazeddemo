import React, { useState } from 'react';
import returnButton from './images/returnButton.svg'

function Slider() {
    const [value, setValue] = useState(50);

    function handleChange(event) {
        setValue(event.target.value);
    }

    return (
        <div className='sliderWrapper'>
            <div className='sliderButtonWrapper'>
                <button id='sliderButton'>
                    <img src={returnButton} className='returnButtonImage' alt='Go Back'></img>
                </button>
            </div>
            <div className='slider'>
                <input type="range" min="46" max ="86" value={value} onChange={handleChange} />
            </div>
        </div>
    )
}

export default Slider;