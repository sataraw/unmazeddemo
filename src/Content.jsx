import { useState, useEffect } from 'react'; 
import Slider from './Slider';
import currentImage from './images/testImage.png'

function Content() {
  const [milliSeconds, setMilliSeconds] = useState(66);
  
  useEffect(() => {
       const handleContextmenu = e => {
           e.preventDefault()
       }
       document.addEventListener('contextmenu', handleContextmenu)
       return function cleanup() {
        document.removeEventListener('contextmenu', handleContextmenu)
       } 
  },[])

  function handleSizeChange(event) {
    setMilliSeconds(event.target.value);
  }
    return (
    <div className='contentWrapper'>
            <img src={currentImage} className='currentImage'></img>
            <Slider value={milliSeconds} onChange={handleSizeChange} />
    </div>
    );
}
export default Content;