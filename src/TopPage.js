import NavBar from "./NavBar";

const TopPage = () => {
  return (
    <>
      <div className="navbar">
        <NavBar />
      </div>
      <div className="top-page">
        <img
          src="https://graphicdesignbylisa.com/wp-content/uploads/generic-logo.jpg"
          alt="Generic Logo"
        />
      </div>
    </>
  );
};

export default TopPage;
