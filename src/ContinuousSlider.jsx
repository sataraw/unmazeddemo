import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Add from "./svg/Add.svg";
import Remove from "./svg/Remove.svg";
import Return from "./svg/returnButton.svg";
import Slider from "@mui/material/Slider";
import { styled } from '@mui/material/styles'; 
import IconButton from '@mui/material/IconButton';

const PrettoSlider = styled(Slider)({
  color: '#ff8a3b',
  height: 250,
  width: 6,
  boxShadow: '0 0 0 10',
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible, &.Mui-disabled': {
      boxShadow: '0 0 0 10',
    },
  },
});
const ReturnButton = styled(IconButton)({
    color: '#ff8a3b',
    height: 57,
    width: 58,
    boxShadow: '0 0 0 10',
     backgroundColor: '#ff8a3b',
    '&:focus, &:hover' : {
      backgroundColor: '#ff8a3b',
    },
    '&:active': {
      backgroundColor: '#CB5200',
    }
})

export default function ContinuousSlider() {
  const [value, setValue] = React.useState(50);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

    return (
      <div className="SliderContainer">
        <Box sx={{ height: 389, width: 36 }}>
        <Stack  direction="column"  alignItems="center" justifyContent="flex-start"  className="SliderBox"> 
          <img src={Add} id="Add" className="SliderIcon" alt='Add'/>
          <PrettoSlider orientation="vertical" onChange={handleChange} value={value}/>
          <img src={Remove} className="SliderIcon" alt='Remove'/>
          <ReturnButton className="ReturnButton">
            <img src={Return} alt='return'/>
          </ReturnButton>
        </Stack>
      </Box>
      </div>
    )
}