import React from "react";

function Pricing() {
  return (
    <div className="container m-5">
      <div className="row ">
        <div className="col-4">
          <h1 className="mb-3 fs-2 ">Unbreatable Pricing</h1>
          <p>
            we pioneered the concept of discount broking and price transparency
            in India.Flat tees and no hidden charges.
          </p>
          <a href="some" style={{ textDecoration: "none" }}>
            See Pricing<i class="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6">
          <div className="row text-center mt-5">
            <div className="col border p-3">
              <h1 className="mb-3">₹0</h1>
              <p>Free equity delivery and direct mutual funds. </p>
            </div>
            <div className="col border p-3">
              <h1 className="mb-3">₹20</h1>
              <p>Intraday F&O. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
