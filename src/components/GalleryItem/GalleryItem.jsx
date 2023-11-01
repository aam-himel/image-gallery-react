import React from "react";
import "./GalleryItem.css";
const GalleryItem = ({ item }) => {
  return (
    <div className="card">
      <img src={item.src} alt="" />
    </div>
  );
};

export default GalleryItem;
