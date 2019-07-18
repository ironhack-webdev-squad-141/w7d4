import React from "react";

const BoilingCheck = props => {
  const boiling = props.temperature >= 100;

  return <p>{boiling ? "The water would boil" : "The water would not boil"}</p>;
};

export default BoilingCheck;
