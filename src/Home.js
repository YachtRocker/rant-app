import TopPage from "./TopPage";
import Headliner from "./headliner";
import LeftInfo from "./LeftInfo";
import MiddleInfo from "./MiddleInfo";
import RightInfo from "./RightInfo";

const Home = () => {
  return (
    <div className="container1">
      <div className="main-logo">
        <TopPage />
      </div>
      <div className="headliner">
        <Headliner />
      </div>
      <div className="impLinks">
        <MiddleInfo />
      </div>
      <div className="leftInfo">
        <LeftInfo />
      </div>
      <div className="rightInfo">
        <RightInfo />
      </div>
    </div>
  );
};

export default Home;
