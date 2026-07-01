import React from "react";

function Navbar() {
  return (
    <nav
      class="navbar navbar-expand-lg border-bottom "
      style={{ backgroundColor: "#fff" }}
    >
      <div class="container">
        <a class="navbar-brand" href="some">
          <img src="/media/images/logo.svg" alt="" style={{ width: "25%" }} />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex" role="search">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="some">
                  Signup
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="some">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="some">
                  Product
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="some">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="some">
                  Support
                </a>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
