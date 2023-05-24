import {
  faHome,
  faUtensils,
  faBurger,
  faPizzaSlice,
  faBlenderPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./nav.scss";
const icons = [faHome, faUtensils, faBurger, faPizzaSlice, faBlenderPhone];
const titles = ["Home", "Meals", "Burger", "Pizza", "Contact"];
const nav = () => {
  return (
    <nav className="Navbar">
      {icons.map((icon, index) => (
        <a className="navbar_link" key={index}>
          <FontAwesomeIcon icon={icon} className="navbar_link_icon" />
          <span className="navbar_link_text">{titles[index]}</span>
        </a>
      ))}
    </nav>
  );
};

export default nav;
