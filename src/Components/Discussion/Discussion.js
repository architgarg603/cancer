import React from "react";

import imgg from "../Assets/Discussion/imgg.png";
import A from "../Assets/Discussion/imggg.png";
const Discussion = () => {
  return (
    <div>
      <img
        src={imgg}
        style={{ maxWidth: "100%", display: "block", minWidth: "100%" }}
      />
      <img
        src={A}
        style={{ maxWidth: "100%", display: "block", minWidth: "100%" }}
      />
    </div>
  );
};

export default Discussion;
