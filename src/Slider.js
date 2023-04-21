import React, { useState } from 'react';

function Slider() {
    const [value, setValue] = useState(50);

    function handleChange(event) {
        setValue(event.target.value);
    }

    return (
        <div className='slider'>
            <input type="range" min="46" max ="86" value={value} onChange={handleChange} />
        </div>
    )
}

export default Slider;