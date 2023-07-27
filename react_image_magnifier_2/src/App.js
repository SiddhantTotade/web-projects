import { useRef, useState } from "react";
import "./App.css";
import i1 from "./images/AcerNitro-1.webp";
import i2 from "./images/AcerNitro-2.jpg";
import i3 from "./images/AcerNitro-3.jpg";
import i4 from "./images/AcerNitro-4.jpg";
import i5 from "./images/AcerNitro-5.jpg";

const images = [i1, i2, i3, i4, i5];

const App = () => {
  const [img, setImg] = useState(images[0]);

  const handleHover = (image, i) => {
    setImg(image);
    imgRef.current[i].classList.add("active");

    for (var j = 0; j < images.length; j++) {
      if (i !== j) {
        // imgRef.current[j].classList.remove("active");
      }
    }
  };

  const imgRef = useRef([]);
  imgRef.current = [];

  const addRef = (el) => {
    if (el && !imgRef.current.includes(el)) {
      imgRef.current.push(el);
    }
  };

  return (
    <div className="container">
      <div className="left">
        <div className="left_1">
          {images.map((image, i) => {
            return (
              <div
                ref={addRef}
                onMouseOver={() => handleHover(image, i)}
                className={i === 0 ? "img_wrap active" : "img_wrap"}
                key={i}
              >
                <img src={image} alt="img" />
              </div>
            );
          })}
        </div>
        <div className="left_2">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default App;
