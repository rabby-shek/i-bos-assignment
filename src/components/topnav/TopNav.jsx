import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { PiHandbagSimple } from "react-icons/pi";
import { FaSignInAlt } from "react-icons/fa";
import BrandLogo from "../../assets/images/FurniFlex.png";
import { useCartContext } from "../../contexts/CartContext";
import { useAuth } from "../../contexts/AuthContext";
import Cookies from "js-cookie";

const TopNav = () => {
  const navigate = useNavigate();
  const { cartItems } = useCartContext(); // Access cartItems from context
  const { logout } = useAuth();

  // Check if the user is logged in using cookies and parse the stored data
  const userCookie = Cookies.get("user");
  const user = userCookie ? JSON.parse(userCookie) : null;

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
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/categories">
                  Categories
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/custom">
                  Custom
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/blog">
                  Blog
                </NavLink>
              </li>
            </ul>

            <div className="d-flex align-items-center">
              {/* Cart Icon */}
              <div
                className="position-relative me-3 cursor-pointer"
                onClick={() => navigate("/cart")}
              >
                <PiHandbagSimple size={30} />
                <span className="cart-badge text-white bg-dark position-absolute">
                  {cartItems.length}
                </span>
              </div>

              {/* Show login icon if not logged in */}
              {!user ? (
                <FaSignInAlt
                  size={30}
                  className="cursor-pointer me-3"
                  onClick={() => navigate("/auth/login")}
                  title="Login"
                />
              ) : (
                // Show user's last name and avatar with logout functionality if logged in
                <div className="d-flex align-items-center">
                  <span className="me-2">{user.lastName}</span> {/* Display last name */}
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Dh-hCRQx8d2VZzrmMMLcpUhAh53KlS1s5A&s40" // Replace with your avatar image URL
                    alt="Avatar"
                    className="rounded-circle cursor-pointer"
                    style={{ width: "40px", height: "40px" }}
                    onClick={logout}
                    title="Logout"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default TopNav;
