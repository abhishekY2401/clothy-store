import Navbar from "./Navbar";
import "./Home.css";
import Intro from "./Intro";
import Images from "./Images";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="header__content">
        <Intro />
        <Images />
      </div>
    </div>
  );
}

export default Home;
