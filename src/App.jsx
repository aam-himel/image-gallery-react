import { useState } from "react";
import "./App.css";
import UploadGallery from "./components/UploadGallery";
import ProductGallery from "./components/ProdudctGallery/ProductGallery";
const App = () => {
  return (
    <div className="container">
      <div className="grid__container">
        <div className="gallery__top">
          <div className="header">
            <div className="header__left">
            <input type="checkbox" name="" id="" />
            <h4 className="">items selected</h4>
            </div>
            <button>Delete</button>
          </div>
        </div>
        <UploadGallery />
      </div>
    </div>
  );
};

export default App;
