import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({handleChangeColor, color}) {
    const handleClick=()=>{
      const newColor=getRandomColor();
      handleChangeColor(newColor);
    }


  return <div onClick={handleClick} className="child" style={{ backgroundColor: color }} />;
}

export default Child;
