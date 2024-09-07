import React, { useState } from "react";
import AutImg from "../assets/images/auth-page.png";
import BrandLogo from "../assets/images/login-brand.png";
import { AppleIcon, GoogleIcon } from "../assets/icons";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useAuth } from "../contexts/AuthContext";
import { NavLink, useNavigate } from "react-router-dom"; // For redirection after login

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn, error, setError, success, setSuccess } = useAuth(); // Import necessary hooks
  const navigate = useNavigate(); // Initialize navigation for redirection

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Clear previous errors
    try {
      const result = await signIn(email, password); // Call the signIn function
      if (result.success) {
        setSuccess("Login Successful");
        navigate("/"); // Redirect to dashboard after successful login
      } else {
        setError("Invalid credentials, please try again."); // Set error message
      }
    } catch (err) {
      setError("An error occurred during login. Please try again."); // Handle unexpected errors
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
                      <div className="row text-center">
                        <div className="col-12">
                          <div className="mb-5">
                            <div className="mb-4">
                              <div className="login-welcome-text">
                                Welcome back!
                              </div>
                              <p className="login-credential-text">
                                Enter your Credentials to access your account
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
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
                          <div className="col-12">
                            <div className="form-floating mb-3">
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="name@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
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
                          <div className="row">
                            <div className="col-12 text-end">
                              <a
                                href="#!"
                                className="link-secondary text-decoration-none"
                              >
                                Forgot password
                              </a>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
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
                                Sign in
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
                          <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-center mt-5">
                            <NavLink
                              to="/auth/sign-up"
                              className="link-secondary text-decoration-none"
                            >
                              Don't have an account? Sign Up
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 position-relative">
                  <img
                    className="img-fluid rounded-start w-100 h-100 object-fit-cover"
                    loading="lazy"
                    src={AutImg}
                    alt="Welcome back you've been missed!"
                  />
                  <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
                    <img src={BrandLogo} alt="brand logo" />
                    <p>
                      Discover a seamless shopping experience with our curated
                      collection of products. From fashion to electronics, find
                      everything you need in one place. Happy shopping!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
