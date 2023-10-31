import "./App.css";

const App = () => {
  return (
    <div className="container app__section">
      <div className="card__section">
        <div className="header">
          <span className="title">
            <input type="checkbox" name="check" id="check" />
            <span className="title__txt">Gallery</span>
          </span>
          <div>
            <a href="#" className="delete">
              Delete file
            </a>
          </div>
        </div>
        <div className="card__grid">
          <div className="card">
            <img src="images/image-1.webp" alt="" />
          </div>
          <div className="card">
            <img src="images/image-2.webp" alt="" />
          </div>
          <div className="card">
            <img src="images/image-3.webp" alt="" />
          </div>
          <div className="card">
            <img src="images/image-4.webp" alt="" />
          </div>
          <div className="card">
            <img src="images/image-5.webp" alt="" />
          </div>
          <div className="card">
            <img src="images/image-6.webp" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
