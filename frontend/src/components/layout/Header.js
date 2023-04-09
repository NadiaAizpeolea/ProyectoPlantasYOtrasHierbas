import React from "react";

import "../../styles/components/layout/Header.css";

const Header = (props) => {
  return (
    <header>
      <div className="holder">
        <img src={process.env.PUBLIC_URL + "/img/logo.jpg"} />
        <h1>Plantas y Otras Hierbas</h1>
      </div>
    </header>
  );
};

export default Header;
