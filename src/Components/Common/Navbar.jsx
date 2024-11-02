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
      <nav className="flex justify-between items-center ">
        <div className="max-[915px]:w-full flex justify-between">
          <div className=" items-center">
            <h1 className="text-[35px] font-medium">
              FOREVER <span className="text-[#e880d3]">..</span>
            </h1>
          </div>
        </div>

        <div
          className={`${toggle ? "navbar" : "hidden"}
        min-[915px]:flex justify-between items-center`}
        >
          <div>
            <div
              className="  mt-3 mr-2 min-[915px]:hidden"
              onClick={closeToggle}
            >
              <i className="bx bx-window-close text-[30px] text-[black] text-right "></i>
            </div>
          </div>

          <div className="flex">
            <div
              className={` ${
                toggle ? "block" : "hidden"
              } min-[915px]:flex justify-between items-center mx-auto `}
            >
              <ul className="words flex font-serif max-[915px]:block ">
                <li>
                  <Link to="/">HOME</Link>
                </li>
                <li>
                  <Link to="/collection">COLLECTION</Link>
                </li>
                <li>ABOUT</li>
                <li>CONTACT</li>
              </ul>
              <a
                href="https://foreverbuy.in"
                className="admin border-2 border-solid rounded-full text-center text-[12px] py-2 px-2 font-serif font-semibold max-[915px]:border-none"
              >
                Admin Panel
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-evenly items-center gap-2 ">
          <Link to="/collection">
            <div className="hover:text-gray-700 ">
              <i class="bx bx-search text-[27px]"></i>
            </div>
          </Link>
          <Link to={"/login"}>
            <div>
              <i className="bx bx-user text-[27px] "></i>
            </div>
          </Link>
          <div className="hover:text-gray-700 ">
            <i className="bx bx-shopping-bag text-[27px]"></i>
          </div>
        </div>
        <div className="min-[915px]:hidden" onClick={toggleBtn}>
          <i className="bx bx-menu text-[30px]"></i>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
