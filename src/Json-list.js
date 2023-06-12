import links from "./json/json-links";

const JsonList = () => {
  return (
    <>
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
