import React from "react";
import CardInfoProp from "../CardInfoProp";

const CardNumber = () => {
  return (
    <div>
      <div className="cardnumber-one">
        <CardInfoProp cardnumber="1234 5678 8765 4321" />
      </div>
      <div className="cardnumber-two">
        <CardInfoProp cardnumbertwo="1234" />
      </div>
    </div>
  );
};

export default CardNumber;
