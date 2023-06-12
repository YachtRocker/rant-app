import links from "./json/json-links";

const JsonList = () => {
  return (
    <>
      <div className="headliner">
        <img
          src="https://media.breitbart.com/media/2021/08/GettyImages-1332867180-640x480.png"
          alt="tucker crossing arms"
        />
        <a href="https://www.breitbart.com/politics/2023/06/12/report-tucker-carlson-served-with-cease-and-desist-letter-by-fox-news/">
          Report: Tucker Carlson Served with Cease-and-Desist Letter by Fox News
        </a>
      </div>

      <div className="links-container">
        <ul className="linksList">
          {links.map((link) => (
            <li>
              <a href={link.link} key={link.id} target="_blank">
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default JsonList;
