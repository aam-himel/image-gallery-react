import { useState } from "react";
import "./App.css";
import UploadGallery from "./components/UploadGallery";
import ProductGallery from "./components/ProdudctGallery/ProductGallery";
const App = () => {
  return (
    <div className="container">
      <div className="gridContainer">
        <UploadGallery />
      </div>
      {/* <ProductGallery /> */}
    </div>
  );
};

export default App;
