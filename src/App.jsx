import { useState } from "react";
import "./App.css";
import UploadGallery from "./components/UploadGallery";
import ProductGallery from "./components/ProdudctGallery/ProductGallery";
const App = () => {
  const [checkedItems, setCheckedItems] = useState([]);

  return (
    <div className="container">
      <div className="grid__container">
        <UploadGallery
          setCheckdItem={setCheckedItems}
          checkedItems={checkedItems}
        />
      </div>
    </div>
  );
};

export default App;
