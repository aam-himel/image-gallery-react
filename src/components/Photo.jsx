import React, { forwardRef } from "react";
import "./Photo.css"
export const Photo = forwardRef(
  ({ url, index, faded, style, ...props }, ref) => {
    const inlineStyles = {
      opacity: faded ? "0.2" : "1",
      transformOrigin: "0 0",
      height: index === 0 ?  420 : 200,
      gridRowStart: index === 0 ? "span 2" : null,
      gridColumnStart: index === 0 ? "span 2" : null,
      backgroundImage: `url("${url}")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundColor: "grey",
      ...style,
    };

    return <div ref={ref}  {...props} style={inlineStyles} className="photo">
      <div className="checkOverlay">
        <div className="checkboxSec">
          <input type="checkbox" name="checkbox" id={index} />
        </div>
      </div>
    </div>
  }
);