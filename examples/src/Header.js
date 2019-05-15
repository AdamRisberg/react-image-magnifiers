import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="brand">
          <h1>react-image-magnifiers</h1>
        </div>
        <div className="logos">
          <a href="https://github.com/adamrisberg/react-image-magnifiers">
            <img src={require("./github-logo.png")} alt="Github Logo" />
          </a>
          <a href="https://www.npmjs.com/package/react-image-magnifiers">
            <img src={require("./npm-logo.png")} alt="NPM Logo" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
