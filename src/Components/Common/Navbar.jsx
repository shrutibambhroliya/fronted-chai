import React, { useState } from "react";
import "./Navbar.css";
import "boxicons/css/boxicons.min.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const toggleBtn = () => {
    setToggle(!toggle);
  };
  const closeToggle = () => {
    setToggle(false);
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
          <div className="mt-3 mr-2 min-[915px]:hidden" onClick={toggleBtn}>
            <i className="bx bx-menu text-[30px]"></i>
          </div>
        </div>

        <div
          className={`${toggle ? "navbar" : "hidden"}
        min-[915px]:flex justify-between items-center`}
        >
          <div className="  mt-3 mr-2 min-[915px]:hidden" onClick={closeToggle}>
            <i className="bx bx-window-close text-[30px] text-[black] text-right "></i>
          </div>
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
            <Link to={"/login"}>
              <div>
                <i className="bx bx-user text-[27px]"></i>
              </div>
            </Link>
            <div className="hover:text-gray-700 ">
              <i className="bx bx-heart text-[27px]"></i>
            </div>
            <div className="hover:text-gray-700 ">
              <i className="bx bx-shopping-bag text-[27px]"></i>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
