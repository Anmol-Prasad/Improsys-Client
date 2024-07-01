import React from "react";
import LogoImg from "./Material/Logo.png";

const Logo = () => {
  return (
    <div className="logobox-mob">
      <img
        src={LogoImg}
        alt=""
        style={{
          height: "300px",
          display: "block",
          margin: "auto",
        }}
      />
    </div>
  );
};

export default Logo;
