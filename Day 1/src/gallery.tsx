import { useRef } from "react";
import image1 from "/images/gallery-img-1.jpg";
import image2 from "/images/gallery-img-2.jpg";
import image3 from "/images/gallery-img-3.jpg";
import image4 from "/images/gallery-img-4.jpg";
import image5 from "/images/gallery-img-5.jpg";
import image6 from "/images/gallery-img-6.jpg";
import "./gallery.scss";

const images: [] = [image1, image2, image3, image4, image5, image6];
const titles: [] = [
  "pancakes",
  "cupcakes",
  "Food",
  "burger",
  "Food",
  "vegatables",
];
const gallery = () => {
  const tooltip = useRef();
  const tooltipOnmove = (e) => {
    let x = e.clientX;
    let y = e.clientY / 3;
    console.log(x);

    tooltip.current.style.left = x + "px";
    tooltip.current.style.top = y + "px";
  };
  return (
    <div className="section_3">
      <h1>Gallery</h1>
      <div className="gallery_Container">
        <p ref={tooltip} className="tooltip">
          Order Now
        </p>
        {images.map((image, index) => (
          <div key={index} className="gallery_items">
            <a href="#" className="tooltip" title="Order now" />
            <img
              onMouseMove={(e) => tooltipOnmove(e)}
              className="gallery_img"
              src={image}
            />
            <div className="gallery_items_Hover">
              <h3>{titles[index]}</h3>
              <p>dsadasdasfdsadsadsadsafdfipdsjgsnfouisdnfndsofsdnfo</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default gallery;
