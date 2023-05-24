import "./footer.scss";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const footer = () => {
  return (
    <div className="Footer">
      <div className="footer_text_container">
        <h2 className="footer_heading">Sign Me up</h2>

        <p className="footer_text">Be the first to know about new products</p>
      </div>
      <div className="footer_input_Container">
        <input
          className="input_text"
          placeholder="Enter Your Email"
          type="text"
        />
        <FontAwesomeIcon icon={faArrowRight} className="input_icon" />
      </div>
      <p className="copyright">Delix&copy; All right Reserved</p>
    </div>
  );
};

export default footer;
