import TopImportantLinks from "./TopImportantLinks";
import TopPage from "./TopPage";
import NavBar from "./NavBar";
import Headliner from "./headliner";

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
          <TopImportantLinks />
        </div>
      </div>
    </div>
  );
}

export default App;
