import React, { useState } from "react";

const Active = () => {
  const [active, setActive] = useState(null);
  const [dataTabs, setDataTabs] = useState([
    {
      id: 1,
      tabLinks: "NEW ARRIVALS",
      tabClass: "myCustomClass",
      tabClicked: false,
    },
    {
      id: 2,
      tabLinks: "FEATURED",
      tabClass: "myCustomClass",
      tabClicked: false,
    },
    {
      id: 3,
      tabLinks: "SPECIAL",
      tabClass: "myCustomClass",
      tabClicked: false,
    },
  ]);

  const NavLink = ({ id, tabLinks, isActive }) => {
    return (
      <a
        href="#"
        onClick={() => navigate(id)}
        className={isActive ? "active" : " "}
      >
        {tabLinks}
      </a>
    );
  };

  const navigate = (id) => {
    setActive(id);
  };
  return (
    <div className="link-tab flex justify-center gap-6 text-[14px] text-[#7d7b7b] font-normal">
      {dataTabs.map((item) => (
        <button key={item.id} className=" hover:text-black">
          <NavLink
            {...item}
            isActive={active === item.id}
            onClick={navigate}
          ></NavLink>
        </button>
      ))}
    </div>
  );
};
export default Active;
