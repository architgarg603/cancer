import React from "react";
import Story from "../Assets/Stories/yes.PNG";
import A from "../Assets/Stories/A.jpg";
const Stories = () => {
  return (
    <div>
      <img
        src={A}
        style={{ maxWidth: "100%", display: "block", minWidth: "100%" }}
      />
      <img
        src={Story}
        style={{ maxWidth: "100%", display: "block", minWidth: "100%" }}
      />
    </div>
  );
};

export default Stories;
