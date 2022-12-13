import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <>
        <footer class="text-center text-lg-start bg-light text-muted">
          <section class="d-flex justify-content-center justify-content-lg-between p-4"></section>
          <section class="">
            <div class="container text-center text-md-start mt-5">
              <div class="row mt-3">
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 class="text-uppercase fw-bold mb-4">
                    <i class="fas fa-gem me-3"></i>
                    <strong>Opalin</strong>
                  </h6>
                  <p>
                    We are completely remote company, working across twenty
                    countries with over 20,000 customers.
                  </p>
                </div>

                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 class="text-uppercase fw-bold mb-4">Info</h6>
                  <p>
                    <a href="#!" class="text-reset text-decoration-none">
                      Getting Started
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-reset text-decoration-none">
                      Resources
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-reset text-decoration-none">
                      Design
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-reset text-decoration-none">
                      Tutorials
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-reset text-decoration-none">
                      Pricing
                    </a>
                  </p>
                </div>

                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 class="text-uppercase fw-bold mb-4">Support</h6>
                  <p>
                    <a href="#!" class="text-reset text-decoration-none">
                      Documentation
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-reset text-decoration-none">
                      Requirements
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-reset text-decoration-none">
                      License
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-reset text-decoration-none">
                      Updates
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-reset text-decoration-none">
                      Contact
                    </a>
                  </p>
                </div>

                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 class="text-uppercase fw-bold mb-4">Connect</h6>
                  <p>
                    <a href="#!" class="text-reset text-decoration-none">
                      Twitter
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-reset text-decoration-none">
                      Facebook
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-reset text-decoration-none">
                      Instagram
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-reset text-decoration-none">
                      Medium
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </footer>
      </>
    );
  }
}
export default Footer;
