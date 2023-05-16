import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEgg,
  faStroopwafel,
  faCheese,
  faHotdog,
  faDrumstickBite,
  faAppleAlt,
  faIceCream,
  faFish,
  faCookie,
  faSeedling,
} from "@fortawesome/free-solid-svg-icons";
import "./landing.css";
const icons: any = [
  faEgg,
  faStroopwafel,
  faCheese,
  faHotdog,
  faDrumstickBite,
  faAppleAlt,
  faIceCream,
  faFish,
  faCookie,
  faSeedling,
];
const Landing = () => {
  return (
    <div className="landing">
      <h1 className="landing_heading">Variety of Foods</h1>

      <div className="landing_container_icons">
        {icons.map((icon: any, index: number) => (
          <FontAwesomeIcon className="landing_icon" key={index} icon={icon} />
        ))}
      </div>
    </div>
  );
};

export default Landing;
