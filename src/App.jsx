import { useState } from "react";
import UploadGallery from "./components/UploadGallery/UploadGallery";
import "./App.css";

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
