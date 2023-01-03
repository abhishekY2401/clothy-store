import "./trending.css";
import blue from "../assets/trending/blue_tee.svg";
import peach from "../assets/trending/peach_tee.svg";
import green from "../assets/trending/green_tee.svg";

const Trending = () => {
  return (
    <div className="trending">
      <div className="trending__section">
        <div>Trending Wears</div>
      </div>
      <div className="trending__clothes">
        <div>
          <img src={blue} alt="blue_tee" className="blue__tee"/>
          <div>
            <div>Khaki green</div>
            <div>Long T-shirt</div>
            <div>Rs. 1,559.00</div>
          </div>
        </div>
        <div>
          <img src={peach} alt="peach_tee" />
          <div>
            <div>Khaki green</div>
            <div>Long T-shirt</div>
            <div>Rs. 1,559.00</div>
          </div>
        </div>
        <div>
          <img src={green} alt="green_tee" />
          <div>
            <div>Khaki green</div>
            <div>Long T-shirt</div>
            <div>Rs. 1,559.00</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
