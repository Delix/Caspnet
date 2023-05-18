import { useState, useRef, useEffect } from "react";
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
import "./landing.scss";
const icons: any = [
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

const Landing = () => {
  const [classNumber, setClassnumber] = useState<number>(0);
  const refa = useRef(new Array(10));
  const slider_animation = () => {
    if (classNumber > icons.length - 1) {
      setClassnumber((prev: number) => prev - prev);
    } else {
      console.log(classNumber);
      setClassnumber((prev: number) => prev + 1);
    }
  };
  useEffect(() => {
    /* const interval = setInterval(() => {
      setClassnumber((prev: number) => prev + 1);
    }, 2000);
  
    return () => clearInterval(interval);*/
    console.log(refa.current.length);
    refa.current[classNumber] = requestAnimationFrame(slider_animation);

    return () => cancelAnimationFrame(refa.current[classNumber]);
  }, []);
  /*  useEffect(() => {
    const time = 2000 * icons.length;
    const interval = setInterval(() => {
      setClassnumber((prev: number) => prev - prev);
    }, time);

    return () => clearInterval(interval);
  }, []);*/
  console.log(classNumber);
  return (
    <div className="landing">
      <h1 className="landing_heading">Variety of Foods</h1>

      <div>
        {icons.map((icon: any, index: number) => (
          <FontAwesomeIcon
            ref={(element) => refa.current.push(element)}
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
