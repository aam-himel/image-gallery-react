
import "./ImageGallery.css";
import { imageLinks } from '../../data/fakeData';
<ImageIte

const ImageGallery = () => {
  return (
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
         {imageLinks.forEach(item => <GalleryItem />)}
        </div>
      </div>
  )
}

export default ImageGallery;