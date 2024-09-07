import React, { useState, useEffect } from "react";
import AutImg from "../assets/images/auth-page.png";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useAuth } from "../contexts/AuthContext";
import { AppleIcon, GoogleIcon } from "../assets/icons";
import { NavLink } from "react-router-dom";
const SignUp = () => {
  const { signUp, error, success, setError, setSuccess } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (error || success) {
      // Automatically hide the alert after 5 seconds
      const timer = setTimeout(() => {
        setError("");
        setSuccess("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [error, success, setError, setSuccess]);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    if (!formData.firstName.trim()) {
      setError("First name is required");
      return false;
    }
    if (!formData.lastName.trim()) {
      setError("Last name is required");
      return false;
    }
    if (!formData.email) {
      setError("Email is required");
      return false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Email address is invalid");
      return false;
    }
    if (!formData.password) {
      setError("Password is required");
      return false;
    } else if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      // Call signUp from AuthContext with the form data
      await signUp(formData);
    }
  };

  return (
    <section className="bg-light p-3 p-md-4 p-xl-5">
      <div className="">
        <div className="row justify-content-center">
          <div className="col-12 col-xxl-11">
            <div className="card border-light-subtle shadow-sm">
              <div className="row g-0">
                <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                  <div className="col-12 col-lg-11 col-xl-10">
                    <div className="card-body p-3 p-md-4 p-xl-5">
                      <div className="row">
                        <div className="col-12 text-center">
                          <div className="mb-5">
                            <div className="mb-4">
                              <div className="login-welcome-text">
                                Welcome To!
                              </div>
                              <p className="login-credential-text">
                                Signup to purchase your desired products
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Bootstrap Alerts for Notifications */}
                      {error && (
                        <div
                          className="alert alert-danger alert-dismissible fade show"
                          role="alert"
                        >
                          {error}
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="alert"
                            aria-label="Close"
                            onClick={() => setError("")}
                          ></button>
                        </div>
                      )}
                      {success && (
                        <div
                          className="alert alert-success alert-dismissible fade show"
                          role="alert"
                        >
                          {success}
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="alert"
                            aria-label="Close"
                            onClick={() => setSuccess("")}
                          ></button>
                        </div>
                      )}

                      <form onSubmit={handleSubmit}>
                        <div className="row gy-3 overflow-hidden">
                          <div className="col-6">
                            <div className="form-floating mb-3">
                              <input
                                type="text"
                                className="form-control"
                                name="firstName"
                                id="firstName"
                                placeholder=""
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                              />
                              <label htmlFor="firstName" className="form-label">
                                First Name
                              </label>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="form-floating mb-3">
                              <input
                                type="text"
                                className="form-control"
                                name="lastName"
                                id="lastName"
                                placeholder=""
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                              />
                              <label htmlFor="lastName" className="form-label">
                                Last Name
                              </label>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-floating mb-3">
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="name@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                              />
                              <label htmlFor="email" className="form-label">
                                Email
                              </label>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-floating mb-3 position-relative">
                              <input
                                type={showPassword ? "text" : "password"}
                                className="form-control"
                                name="password"
                                id="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                              />
                              <label htmlFor="password" className="form-label">
                                Password
                              </label>
                              <span
                                className="position-absolute end-0 top-50 translate-middle-y me-3"
                                onClick={togglePassword}
                                style={{ cursor: "pointer" }}
                              >
                                {showPassword ? (
                                  <AiFillEyeInvisible size={20} />
                                ) : (
                                  <AiFillEye size={20} />
                                )}
                              </span>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue
                                name="remember_me"
                                id="remember_me"
                              />
                              <label
                                className="form-check-label text-secondary"
                                htmlFor="remember_me"
                              >
                                I Agree to the Term & Policy
                              </label>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="d-grid">
                              <button
                                className="btn btn-dark btn-lg"
                                type="submit"
                              >
                                Sign Up
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>

                      <div className="row pt-5">
                        <div className="col-12 text-center pb-5">
                          <div className="d-flex align-items-center justify-content-center">
                            <div className="flex-grow-1 border-top border-grey"></div>
                            <p className="mx-3 mb-0">Or</p>
                            <div className="flex-grow-1 border-top border-grey"></div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="d-flex gap-3 flex-column">
                            <a
                              href="#!"
                              className="btn btn-lg btn-outline-dark"
                            >
                              <GoogleIcon />
                              <span className="ms-2 fs-6">
                                Log in with Google
                              </span>
                            </a>
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="d-flex gap-3 flex-column">
                            <a
                              href="#!"
                              className="btn btn-lg btn-outline-dark"
                            >
                              <AppleIcon />
                              <span className="ms-2 fs-6">
                                Log in with Apple
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <div className="text-center">
                            Already have an account?{" "}
                            <NavLink
                              to="/auth/login"
                              className="link-primary text-decoration-none"
                            >
                              Log In
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 d-flex justify-content-center align-items-center bg-light-subtle">
                  <img
                    className="img-fluid auth-img"
                    src={AutImg}
                    alt="Sign Up"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
