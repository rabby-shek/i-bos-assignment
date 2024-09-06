import React, {useState} from 'react'
import AutImg from "../assets/images/auth-page.png";
import BrandLogo from "../assets/images/login-brand.png";
import { AppleIcon, GoogleIcon } from "../assets/icons";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
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
                            Signup for purchase your desire products
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <form action="#!">
                      <div className="row gy-3 overflow-hidden">
                      <div className="col-6">
                          <div className="form-floating mb-3">
                            <input
                              type="text"
                              className="form-control"
                              name="firstName"
                              id="firstName"
                              placeholder=""
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
                              placeholder=''
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
                        <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-center mt-5">
                          <a
                            href="#!"
                            className="link-secondary text-decoration-none"
                          >
                            Have an account? Sign In
                          </a>
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
                    collection of products. From fashion to electronics, we
                    bring quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default SignUp;
