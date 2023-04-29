import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Add from "./svg/Add.svg";
import Remove from "./svg/Remove.svg";
import Return from "./svg/returnButton.svg";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Player from "./Player";
import { Tooltip } from "@mui/material";

const PrettoSlider = styled(Slider)({
  color: "#ff8a3b",
  height: 250,
  width: 6,
  boxShadow: "0 0 0 10",
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible, &.Mui-disabled": {
      boxShadow: "0 0 0 10",
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 16,
    background: 'unset',
    padding: 4 ,
    fontWeight: 600,
    width: 40,
    height: 40,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#ff8a3b',
    transformOrigin: 'bottom left',
    transform: 'translate(100%, -100%) rotate(-90deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(75%, -100%) rotate(-90deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(90deg)',
    },
  },
});
const ReturnButton = styled(IconButton)({
  color: "#ff8a3b",
  height: 57,
  width: 58,
  boxShadow: "0 0 0 10",
  backgroundColor: "#ff8a3b",
  "&:focus, &:hover": {
    backgroundColor: "#ff8a3b",
  },
  "&:active": {
    backgroundColor: "#CB5200",
  },
});

export const SliderContext = React.createContext(50);

function ContinuousSlider() {
  const [value, setValue] = React.useState(33);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [returnClicked, setReturnClicked] = React.useState(false);

  const handleReturnClicked = () => {
    console.log("clicked Slider");
    setReturnClicked(true);
  };
  const handleReturnReset = () => {
    console.log("reset Slider");
    setReturnClicked(false);
  };

  return (
    <SliderContext.Provider value={value}>
      <Player
        returnClicked={returnClicked}
        onReturnClicked={handleReturnClicked}
        onReturnReset={handleReturnReset}
      />
      <div className="SliderContainer">
        <Box sx={{ height: 389, width: 36 }}>
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="flex-start"
            className="SliderBox"
          >
            <img src={Add} id="Add" className="SliderIcon" alt="Add" />
            <PrettoSlider
              orientation="vertical"
              onChange={handleChange}
              value={value}
              valueLabelDisplay="auto"
              valueLabelFormat={(0.5 + (value / 100) * 1.5).toFixed(1) + 'x'}
            />
            <img src={Remove} className="SliderIcon" alt="Remove" />
            <ReturnButton
              className="ReturnButton"
              onClick={handleReturnClicked}
              onReset={handleReturnReset}
            >
              <img src={Return} alt="return" />
            </ReturnButton>
          </Stack>
        </Box>
      </div>
    </SliderContext.Provider>
  );
}
export default ContinuousSlider;
