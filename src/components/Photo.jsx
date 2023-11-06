import React, { forwardRef, useState } from "react";
import "./Photo.css";
export const Photo = forwardRef(
  ({ url, index, faded, style, handleSelectId, checkedItems,...props }, ref) => {

    const [selected, setSelected] = useState(false)


      const inlineStyles = {
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

    const hoverStyles = {
      backgroundColor: "rgba(0, 0, 21, 0.467)",
      border: "1px solid blue"
    };

  

    const itemSelected = () => {
      checkedItems.includes(index) ? setSelected(true) : setSelected(false);
    }

    const handleSelectedId = () => {
      handleSelectId(index);
    };

    return (
      <div ref={ref} {...props} style={inlineStyles} className="photo">
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
