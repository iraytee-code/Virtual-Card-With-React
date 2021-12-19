import React from "react";
import BankName from "./components/BankName";
import CardHolderName from "./components/CardHolderName";
import CardNumber from "./components/CardNumber";
import DateInfo from "./components/DateInfo";

function App() {
  return (
    <div className="App credit-card">
      <div className="bank-name">
        <BankName />
      </div>
      <div className="card-number">
        <CardNumber />
      </div>
      <div className="date-info">
        <div className="validtime">
          <p>Valid</p>
          <p>THRU</p>
        </div>
        <div className="date-valid">
          <DateInfo />
        </div>
      </div>
      <div className="Card-holder-name">
        <CardHolderName />
      </div>
    </div>
  );
}

export default App;
