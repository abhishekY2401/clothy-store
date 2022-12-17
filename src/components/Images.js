import white_tshirt from "../assets/white_tshirt.svg";
import mixed_tshirt from "../assets/mixed_tshirt.svg";
import grey_tshirt from "../assets/grey_tshirt.svg";
import black_tshirt from "../assets/black_tshirt.svg";
import "./Images.css";

const Images = () => {
  return (
    <div className="intro__images">
      <div className="images">
        <div className="classy_imgs">
          <div>
            <img src={white_tshirt} alt="white_tshirt" />
          </div>
          <div className="mixed_tee">
            <img src={mixed_tshirt} alt="mixed_tshirt" />
          </div>
        </div>

        <div className="classy_imgs">
          <div className="grey_tee">
            <img src={grey_tshirt} alt="grey_tshirt" />
          </div>
          <div className="black_tee">
            <img src={black_tshirt} alt="black_tshirt" />
          </div>
        </div>
      </div>
      <div className="info"></div>
    </div>
  );
};

export default Images;
