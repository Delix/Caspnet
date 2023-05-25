import { useRef } from "react";
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
  const changeview = useRef();
  const anchor = useRef();
  const changeopacity = useRef([]);
  const changeStyle = () => {
    anchor.current.classList.toggle("change");
    changeview.current.classList.toggle("change");
    changeopacity.current.forEach((element) => {
      element.classList.toggle("change");
      console.log(element);
    });
  };
  console.log(changeopacity);
  return (
    <nav ref={changeview} className="Navbar">
      <div ref={anchor} className="menu">
        <div className="menu_tail" />
        <div onClick={changeStyle} className="menu_head" />
      </div>
      {icons.map((icon, index) => (
        <a
          ref={(e) => changeopacity.current.push(e)}
          className="navbar_link"
          key={index}
        >
          <FontAwesomeIcon icon={icon} className="navbar_link_icon" />
          <span className="navbar_link_text">{titles[index]}</span>
        </a>
      ))}
    </nav>
  );
};

export default nav;
