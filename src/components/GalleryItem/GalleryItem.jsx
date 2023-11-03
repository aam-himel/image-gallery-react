import React from "react";
import "./GalleryItem.css";
const GalleryItem = ({ item }) => {
  return (
    <div
      className="card"
      ref={item.ref}
      {...item.draggableProps}
      {...item.dragHandleProps}
    >
      {/* <img src={item.src} alt="" /> */}
      <h1>{item.title}</h1>
    </div>
  );
};

export default GalleryItem;
