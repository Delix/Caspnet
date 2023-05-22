import image1 from "/images/card-img-1.png";
import image2 from "/images/card-img-2.png";
import image3 from "/images/card-img-3.png";
import "./cards.scss";
const Cards = () => {
  return (
    <div className="section_2">
      <h1>Popular meals</h1>
      <div className="cards_Container">
        <div className="Card">
          <img src={image1} className="card_image" />
          <h3>Fish</h3>
          <button className="card_button">Order Now</button>
        </div>
        <div className="Card">
          <img src={image2} className="card_image" />
          <h3>Cake</h3>
          <button className="card_button">Order Now</button>
        </div>
        <div className="Card">
          <img src={image3} className="card_image" />
          <h3>Lobster</h3>
          <button className="card_button">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
