import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <h1>
              <b>Opalin</b>
            </h1>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    <b class="text-muted">Home</b>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <b class="text-muted">Pricing</b>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <b class="text-muted">About</b>
                  </a>
                </li>
              </ul>
              <div class="d-flex">
                <button class="btn" type="submit">
                  Login
                </button>
                <div></div>
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
