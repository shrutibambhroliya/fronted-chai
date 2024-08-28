import React, { useState } from "react";
import "./Navbar.css";
import "boxicons/css/boxicons.min.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const toggleBtn = () => {
    setToggle(true);
  };

  return (
    <div>
      <nav className="flex justify-around items-center max-[915px]:block text-center">
        <div className="logo flex items-center ">
          <img
            src="https://cdn.pixabay.com/photo/2020/09/26/08/36/logo-5603463_960_720.png"
            alt=""
            width={60}
          />
          <span className="nav-logo text-[35px]  text-sky-600">Fashion</span>
        </div>
        <div className="flex min-[915px]:hidden">
          <i class="bx bx-menu text-[30px] " onClick={toggleBtn}></i>
        </div>

        <div className=" flex justify-evenly max-[915px]:">
          <div className="words flex max-[915px]:block">
            <li>
              <a href="">HOME</a>
            </li>
            <li>
              <a href="">SHOP</a>
            </li>
            <li>
              <a href="">PAGES</a>
            </li>
            <li>
              <a href="">BLOG</a>
            </li>
            <li>
              <a href="">PORTFOLIO</a>
            </li>
          </div>

          <div className="group max-[915px]:m-auto ">
            <svg viewBox="0 0 24 24" aria-hidden="true" class="icon">
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
              </g>
            </svg>
            <input class="input" type="search" placeholder="Search" />
          </div>
        </div>
        <div className="flex gap-3">
          <div className="hover:text-gray-700">
            <i class="bx bx-user text-[27px]"></i>
          </div>
          <div className="hover:text-gray-700">
            <i class="bx bx-heart  text-[27px]"></i>
          </div>
          <div className="hover:text-gray-700">
            <i class="bx bx-shopping-bag  text-[27px]"></i>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
