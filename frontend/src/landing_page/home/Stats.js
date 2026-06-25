import React from "react";

function Stats() {
  return (
    <div className="container p-5">
      <div className="row p-5">
        <div className="col-6 p-5 ">
          <h1 className="fs-2 mb-4">Trust with Confidence</h1>
          <div>
            <h3 className="fs-4">Customer-first always</h3>
            <p className="text-muted">
              Thats why 1.3+ crore customers trust zerodha with ₹3.5+ lakh
              crores worth of equity investments
            </p>
          </div>
          <div>
            <h3 className="fs-4">No spam or gimmiks</h3>
            <p className="text-muted">
              No gimmicks,spam,"gamification", or annoying push
              notifications.High quality apps that you see at your pace,the way
              you like.{" "}
            </p>
          </div>
          <div>
            <h3 className="fs-4">The zerodha Universe</h3>
            <p className="text-muted">
              Not just an app, but the whole ecosystem.Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
          </div>
          <div>
            <h3 className="fs-4">Do better with money</h3>
            <p className="text-muted">
              With initiatives like nudge and kill switch we don t just
              facilitiate transactions but actually help you to do better with
              your money
            </p>
          </div>
        </div>
        <div className="col-6 p-5 mt-5">
          <img
            src="\media\images\ecosystem.png"
            alt=""
            style={{ width: "90%" }}
          />
          <div className="mt-5">
            <a href="some" className="mx-5" style={{ textDecoration: "none" }}>
              Explore Our Products<i class="fa-solid fa-arrow-right-long"></i>
            </a>
            <a href="some" style={{ textDecoration: "none" }}>
              Try Kite<i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
