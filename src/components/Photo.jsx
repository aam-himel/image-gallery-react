import React, { forwardRef } from "react";
import "./Photo.css";
export const Photo = forwardRef(
  ({ url, index, faded, style, handleSelectId, ...props }, ref) => {
    const inlineStyles = {
      opacity: faded ? "0.2" : "1",
      transformOrigin: "0 0",
      height: index === 0 ? 420 : 200,
      gridRowStart: index === 0 ? "span 2" : null,
      gridColumnStart: index === 0 ? "span 2" : null,
      backgroundImage: `url("${url}")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundColor: "grey",
      ...style,
    };
    console.log(props)
    const handleSelectedId = () => {
      handleSelectId(index);
      console.log(index);
    };

    return (
      <div
        ref={ref}
        {...props}
        onMouseDown={() => handleSelectedId()}
        style={inlineStyles}
        className="photo"
      >
        <div className="checkOverlay">
          <div className="checkboxSec">
            <input type="checkbox" name="checkbox" id={index}  />
          </div>
        </div>
      </div>
    );
  }
);
