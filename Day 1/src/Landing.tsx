import { useState, useEffect } from "react";
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
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import "./landing.scss";
const icons: IconDefinition[] = [
  faEgg,
  faCheese,
  faHotdog,
  faDrumstickBite,
  faAppleAlt,
  faIceCream,
  faFish,
  faCookie,
  faStroopwafel,
  faSeedling,
];
// Need to learn more about requestAnimationFrame and useRef-array
const Landing = () => {
  const [classNumber, setClassnumber] = useState<number>(0);
  //const refa = useRef([]);
  /* const slider_animation = (time) => {
    if (classNumber > icons.length - 1) {

      setClassnumber((prev: number) => prev - prev);
    } else {
      console.log(classNumber);
      setClassnumber((prev: number) => prev + 1);
    }
  };*/
  useEffect(() => {
    const interval = setInterval(() => {
      setClassnumber((prev: number) => prev + 1);
    }, 2000);

    return () => clearInterval(interval);
    //  refa.current[classNumber] = requestAnimationFrame(slider_animation);
    // return () => cancelAnimationFrame(refa.current[classNumber]);
  }, []);

  useEffect(() => {
    const time = 2000 * icons.length;
    const interval = setInterval(() => {
      setClassnumber((prev: number) => prev - prev);
    }, time);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="landing">
      <h1>Variety of Foods</h1>

      <div>
        {icons.map((icon: IconDefinition, index: number) => (
          <FontAwesomeIcon
            className={
              "landing_icon " + (classNumber == index ? "active_icon" : "")
            }
            key={index}
            icon={icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Landing;
