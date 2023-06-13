import links from "./json/LeftLinks";

const LeftInfo = () => {
  return (
    <>
      <div className="left-links-container">
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

export default LeftInfo;
