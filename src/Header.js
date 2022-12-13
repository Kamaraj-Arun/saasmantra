import React from "react";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <div class="row">
        <p class="h1 text-center" id="header">
          <b>Find the perfect plan of your business.</b>
        </p>
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title text-muted">Free Forever</h5>
              <h1 class="bold">Free</h1>
              <p class="card-text">
                Ut enim ad minima veniam, quis nostrum exerciatationnew.
              </p>
              <ul>
                <li>At vero eos et accusamus</li>
                <li>Odio dignissions ducimus</li>
                <li>Blanditiis praesetium</li>
              </ul>
              <a href="#" class="btn btn-secondary">
                Sign Up For Free
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title text-muted">For Teams</h5>
              <h1 class="bold">$20 /MO</h1>
              <p class="card-text">
                Ut enim ad minima veniam, quis nostrum exerciatationnew.
              </p>
              <ul>
                <li>At vero eos et accusamus</li>
                <li>Odio dignissions ducimus</li>
                <li>Blanditiis praesetium</li>
              </ul>
              <a href="#" class="btn btn-secondary">
                Start 14-Day Trial
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title text-muted">For Enterprises</h5>
              <h1 class="bold">$140 /MO</h1>
              <p class="card-text">
                Ut enim ad minima veniam, quis nostrum exerciatationnew.
              </p>
              <ul>
                <li>At vero eos et accusamus</li>
                <li>Odio dignissions ducimus</li>
                <li>Blanditiis praesetium</li>
              </ul>
              <a href="#" class="btn btn-secondary">
                Start 14-Day Trial
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
