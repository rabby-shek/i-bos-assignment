import React from "react";
import { NavLink } from "react-router-dom";
import { PiHandbagSimple } from "react-icons/pi";
import BrandLogo from "../../assets/images/FurniFlex.png";
const TopNav = () => {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img src={BrandLogo} alt="Brand Logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarSupportedContent"
          >
            {/* Center the Nav Links */}
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Categories
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Custom
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Blog
                </NavLink>
              </li>
            </ul>

            <div className="d-flex align-items-center">
              <div className="position-relative me-3">
                <PiHandbagSimple size={30} />

                <span className="badge text-white bg-dark position-absolute">
                  3
                </span>
              </div>

              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Dh-hCRQx8d2VZzrmMMLcpUhAh53KlS1s5A&s40" // Replace with your avatar image URL
                alt="Avatar"
                className="rounded-circle"
                style={{ width: "40px", height: "40px" }}
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default TopNav;
