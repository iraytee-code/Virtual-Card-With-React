import React from "react";

const CardInfoProp = (props) => {
  return (
    <div>
      {props.bankname}
      {props.cardnumber}
      {props.cardnumbertwo}
      {props.date}
      {props.holdername}
    </div>
  );
};

export default CardInfoProp;
