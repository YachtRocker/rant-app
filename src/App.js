import TopPage from "./TopPage";
import NavBar from "./NavBar";
import Headliner from "./headliner";
import MiddleInfo from "./MiddleInfo";
import LeftInfo from "./LeftInfo";
import RightInfo from "./RightInfo";

function App() {
  return (
    <div className="App">
      <div className="container1">
        <div className="navBar">
          <NavBar />
        </div>
        <div className="main-logo">
          <TopPage />
        </div>
        <div className="headliner">
          <Headliner />
        </div>
        <div className="impLinks">
          {/* <TopImportantLinks /> */}
          <MiddleInfo />
        </div>
        <div className="leftInfo">
          <LeftInfo />
        </div>
        <div className="rightInfo">
          <RightInfo />
        </div>
      </div>
    </div>
  );
}

export default App;
