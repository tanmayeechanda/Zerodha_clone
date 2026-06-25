import React from "react";

function Education() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6  p-5">
          <img src="/media/images/largestBroker.svg" alt="" />
        </div>
        <div className="col-6 p-5 mt-3">
          <h1>Largest Stock Broker in India</h1>
          <p className="mb-5">
            2+ million zerodha clients contribute to over 15% of all volumes in
            India daily by trading and investing.
          </p>
          <div className="row">
            <div className="col-6 ">
              <ul>
                <li>Future and options</li>
                <li>Commodity Derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>
            <div className=" col-6 ">
              <ul>
                <li>Stocks and Ipo's</li>
                <li>Direct mutual funds</li>
                <li>Bonds and Govt. securities</li>
              </ul>
            </div>
          </div>
          <img
            src="/media/images/pressLogos.png"
            alt=""
            style={{ width: "90%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Education;
