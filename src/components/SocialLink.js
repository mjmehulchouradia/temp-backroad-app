import React from "react";

const SocialLink = ({ href, icon, classname }) => {
  return (
    <li>
      <a href={href} target="_blank" rel="noreferrer" className={classname}>
        <i className={icon}></i>
      </a>
    </li>
  );
};

export default SocialLink;
