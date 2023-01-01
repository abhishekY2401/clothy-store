import Navbar from "./Navbar";
import "./Home.css";
import Intro from "./Intro";
import Images from "./Images";
import Trending from "./Trending";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="header__content">
        <Intro />
        <Images />
      </div>
      <Trending />
    </div>
  );
}

export default Home;
