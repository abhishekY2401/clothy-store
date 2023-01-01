import sand from "../assets/white_sand.webp";
import "./Intro.css";

const Intro = () => {
  return (
    <>
      <div className="clothy__intro">
        <div className="clothy__info">
          <div className="design__quote">
            <div id="slant__line"></div>
            <span id="style">
              what you wear <br />
              speaks volumes
              <br /> about who you are
            </span>
            <div id="slant__line"></div>
          </div>

          <div className="about__clothy">
            <span id="about">
              We at clothz offer
              <br /> you wide varieties of
              <br /> clothes which can be
              <br /> fully customized and
              <br /> are comfortable to wear.
            </span>
          </div>
        </div>
        <div className="matte_grey">
          <img src={sand} alt="matte" className="greyy" />
        </div>
      </div>
    </>
  );
};

export default Intro;
