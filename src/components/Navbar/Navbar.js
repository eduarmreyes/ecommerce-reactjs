import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <section aria-label="navbar">
      <section className="d-flex justify-content-between">
        <section className="signin__section">
          Hi!{" "}
          <a href="https://example" target="_blank" rel="noopener noreferrer">
            Sign in
          </a>{" "}
          or{" "}
          <a href="https://example" target="_blank" rel="noopener noreferrer">
            Register
          </a>
        </section>
        <section className="navigation__section">
          <nav>
            <ul className="d-flex list-reset-styles">
              <li>
                <a href="https://example.com">Daily deals</a>
              </li>
              <li>
                <a href="https://example.com">Sell</a>
              </li>
              <li>
                <a href="https://example.com">Help & Contact</a>
              </li>
            </ul>
          </nav>
        </section>
        <section className="bag__section">
          <span role="img" aria-label="bag icon">
            👜
          </span>{" "}
          Your bag: <a href="https://example.com">$0.00</a>
        </section>
      </section>
    </section>
  );
}

export default Navbar;
