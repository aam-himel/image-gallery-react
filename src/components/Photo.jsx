import React, { forwardRef, useEffect, useState } from "react";
import "./Photo.css";
export const Photo = forwardRef(
  ({ url, index, faded, style, handleSelectId, checkedItems,...props }, ref) => {
    const [selected, setSelected] = useState(false);
    

    console.log("selected",selected)

    const handleSelectedId = () => {
      handleSelectId(index);
    };

    const inlineStyles = {
      position:'relative',
      opacity: faded ? "0.2" : "1",
      transformOrigin: "0 0",
      height: index === 0 ? 323 : 150,
      gridRowStart: index === 0 ? "span 2" : null,
      gridColumnStart: index === 0 ? "span 2" : null,
      backgroundImage: `url("${url}")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundColor: "grey",
      border: selected ? "5px solid blue" : "none",
      ...style,
    };

    return (
      <div ref={ref} {...props} style={inlineStyles} className="photo">
        <div className="selectedItem">{selected ? '02' : 'not selected'}</div>
        <div className="checkOverlay">
          <div className="checkboxSec">
            <input
              type="checkbox"
              name="checkbox"
              id={index}
              onMouseDown={() => handleSelectedId()}
            />
          </div>
        </div>
      </div>
    );
  }
);
