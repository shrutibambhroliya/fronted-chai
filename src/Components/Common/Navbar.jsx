import React, { useState } from "react";
import "./Navbar.css";
import "boxicons/css/boxicons.min.css";
import { Link } from "react-router-dom";
import useTheme from "../../Context/Theme";

const Navbar = () => {
  const { themeMode, darkMode, lightMode } = useTheme();
  const [toggle, setToggle] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  const toggleChange = (e) => {
    const themeChange = e.currentTarget.checked;
    if (themeChange) {
      darkMode();
    } else {
      lightMode();
    }
  };
  const toggleBtn = () => {
    setToggle(!toggle);
  };

  const handleLoginToggle = () => {
    setShowLogin(!showLogin);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  const switchToRegister = () => {
    setIsRegister(true);
  };

  const switchToLogin = () => {
    setIsRegister(false);
  };

  return (
    <div>
      <nav className="flex justify-between items-center max-[915px]:block">
        <div className="max-[915px]:w-full flex justify-between">
          <div className="logo flex items-center">
            <img
              src="https://cdn.pixabay.com/photo/2020/09/26/08/36/logo-5603463_960_720.png"
              alt="logo"
              width={60}
            />
            <span className="nav-logo text-[40px] text-sky-600">Fashion</span>
          </div>
          <div
            className="toggle-menu mt-3 mr-2 min-[915px]:hidden"
            onClick={toggleBtn}
          >
            {toggle ? (
              <i className="bx bx-window-close text-[30px]"></i>
            ) : (
              <i className="bx bx-menu text-[30px]"></i>
            )}
          </div>
        </div>

        <div
          className={`${toggle ? "navbar" : "hidden"}
        min-[915px]:flex justify-between items-center`}
        >
          <div className="flex">
            <div
              className={` ${
                toggle ? "block" : "hidden"
              } min-[915px]:flex justify-between items-center mx-auto `}
            >
              <ul className="words flex max-[915px]:block">
                <li>
                  <Link to="/">HOME</Link>
                </li>
                <li>
                  <Link to="/Shop">SHOP</Link>
                </li>
                <li>
                  <Link to="/Pages">PAGES</Link>
                </li>
                <li>
                  <Link to="/Blog">BLOG</Link>
                </li>
                <li>
                  <Link to="/Portfolio">PORTFOLIO</Link>
                </li>
              </ul>
            </div>
            <div className="group flex items-center max-[915px]:block">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
                <g className="max-[915px]:hidden">
                  <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                </g>
              </svg>
              <input
                className="input max-[915px]:hidden"
                type="search"
                placeholder="Search"
              />
            </div>
          </div>

          <div
            className={` ${
              toggle ? "flex" : "hidden"
            } justify-center  min-[915px]:flex gap-2 items-center `}
          >
            <div
              onClick={handleLoginToggle}
              className="hover:text-gray-700 cursor-pointer"
            >
              <i className="bx bx-user text-[27px]"></i>
            </div>
            <div className="hover:text-gray-700 ">
              <i className="bx bx-heart text-[27px]"></i>
            </div>
            <div className="hover:text-gray-700 ">
              <i className="bx bx-shopping-bag text-[27px]"></i>
            </div>
          </div>
        </div>
      </nav>

      {/* Login Sidebar */}
      <div className={`login-sidebar ${showLogin ? "active" : ""}`}>
        <div className="login-content">
          <i
            onClick={handleCloseLogin}
            className="bx bx-window-close text-[30px] text-[black]"
          ></i>

          <div className="mt-[15px]">
            <div className="w-full ">
              <div className="dark:bg-gray-950 dark:border-gray-700 bg-slate-100 max-w-md mx-auto rounded-lg shadow py-5 ">
                <div className="w-full max-w-sm text-right ">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      value=""
                      onChange={toggleChange}
                      className="sr-only peer"
                      checked={themeMode === "dark"}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                <div className="mx-auto flex justify-evenly items-center mt-5 mb-5">
                  <button
                    className=" bg-blue-600  text-white px-7 py-1 text-[18px] font-semibold rounded-md"
                    onClick={switchToLogin}
                  >
                    LogIn
                  </button>
                  <button
                    className="bg-blue-600 text-white px-6 py-1 text-[18px] font-semibold rounded-md"
                    onClick={switchToRegister}
                  >
                    Ragister
                  </button>
                </div>

                <div className="w-full mx-auto max-w-sm">
                  {isRegister ? (
                    <form action="#" className="space-y-4 mb-7">
                      <h2 className="text-[22px] font-semibold">
                        Create Account
                      </h2>
                      <div>
                        <label
                          htmlFor="username"
                          className="block text-base font-medium leading-6 dark:text-white"
                        >
                          Username
                        </label>
                        <div className="mt-2">
                          <input
                            name="username"
                            type="text"
                            required
                            className="block w-full rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm "
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-base font-medium leading-6 dark:text-white"
                        >
                          Email
                        </label>
                        <div className="mt-2">
                          <input
                            name="email"
                            type="email"
                            required
                            className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="password"
                          className="block text-base font-medium leading-6 dark:text-white"
                        >
                          Password
                        </label>
                        <div className="mt-2">
                          <input
                            name="password"
                            type="password"
                            required
                            className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                          />
                        </div>
                      </div>

                      <div className="px-12 ">
                        <button
                          type="submit"
                          className="w-full  px-4 bg-blue-600 text-white text-[18px] text-center font-semibold py-1 rounded-md"
                        >
                          Sign Up
                        </button>
                      </div>
                      <p className="text-center">
                        Already have an account ?{" "}
                        <span
                          onClick={switchToLogin}
                          className="text-blue-600 cursor-pointer"
                        >
                          Log In
                        </span>
                      </p>
                    </form>
                  ) : (
                    <form action="#" className="space-y-6">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-base font-medium leading-6 dark:text-white"
                        >
                          Email
                        </label>
                        <div className="mt-2">
                          <input
                            name="email"
                            type="email"
                            required
                            className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="password"
                          className="block text-base font-medium leading-6 dark:text-white"
                        >
                          Password
                        </label>
                        <div className="mt-2">
                          <input
                            name="password"
                            type="password"
                            required
                            className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 rounded-md"
                      >
                        Log In
                      </button>

                      <p className="text-center">
                        Not registered yet?{" "}
                        <span
                          onClick={switchToRegister}
                          className="text-blue-600 cursor-pointer"
                        >
                          Create an Account
                        </span>
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
