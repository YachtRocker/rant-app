import links from "./json/RightLinks";

const MiddleInfo = () => {
  return (
    <>
      <div className="right-links-container">
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

export default MiddleInfo;
