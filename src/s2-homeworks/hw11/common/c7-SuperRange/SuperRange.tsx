import React from "react";
import { Slider, SliderProps } from "@mui/material";

const SuperRange: React.FC<SliderProps> = (props) => {
  return (
    <Slider
      sx={{
        // стили для слайдера // пишет студент
        width: '150px',
        color: "#00CC22",
        "& .MuiSlider-thumb": {
            // backgroundColor: '#4800ff',
            background: 'radial-gradient(circle, #00CC22 20%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 63%, #00CC22 73%)',
        },
      }}
      {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
    />
  );
};

export default SuperRange;
