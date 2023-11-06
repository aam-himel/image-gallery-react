import React, { forwardRef, useEffect, useState } from "react";
import "./Photo.css";
export const Photo = forwardRef(
  (
    { url, index, faded, style, handleSelectId, checkedItems, ...props },
    ref
  ) => {
    const [selected, setSelected] = useState(false);
    const handleSelectedId = () => {
      setSelected(!selected); // Toggle the selected state
      handleSelectId(index);
    };

    const inlineStyles = {
      position: "relative",
      opacity: faded ? "0.2" : "1",
      transformOrigin: "0 0",
      height: index === 0 ? 323 : 150,
      gridRowStart: index === 0 ? "span 2" : null,
      gridColumnStart: index === 0 ? "span 2" : null,
      backgroundImage: `url("${url}")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundColor: "grey",
      border: selected ? "5px solid #a7f3d0" : "2px solid #ecfeff",
      boxShadow: "box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",

      ...style,
    };

    return (
      <div ref={ref} {...props} style={inlineStyles} className="photo">
        {selected ? <div className="selectedItem">{index + 1}</div> : null}

        <div className="checkOverlay">
          <div className="checkboxSec">
            <input
              type="checkbox"
              name="checkbox"
              id={index}
              onChange={handleSelectedId}
            />
          </div>
        </div>
      </div>
    );
  }
);
