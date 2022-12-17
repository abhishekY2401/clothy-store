import sand from "../assets/white_sand.webp";
import "./Intro.css";

const Intro = () => {
  return (
    <div className="clothy__intro">
      <div className="matte_grey">
        <img src={sand} alt="matte" className="greyy" />
      </div>
      <div className="design__quote">
        <span id="style">Style</span> is a <span id="better">better</span>
        <br /> way to
        <span id="speak">speak</span>
      </div>
      <div className="about__clothy">
        <span>
          We at clothz provide
          <br /> you wide varieties of
          <br /> clothes which can be
          <br /> fully customized and
          <br /> are comfortable to wear.
        </span>
      </div>
    </div>
  );
};

export default Intro;
