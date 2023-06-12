const LinksList = (props) => {
  const links = props.links;
  return (
    <div className="links-list">
      {links.map((link) => (
        <div className="link-list" key={link.id}>
          <a href={link.link} target="_blank">
            {link.title}
          </a>
        </div>
      ))}
    </div>
  );
};

export default LinksList;
