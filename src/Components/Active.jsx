import React, { useState, useEffect } from "react";
import Product from "./All-Products/Product";
import Featured from "./All-Products/Featured";
import Special from "./All-Products/Special";

const NewArrivalsContent = () => {
  return (
    <div className="mt-10">
      <Product />
    </div>
  );
};
const FeaturedContent = () => {
  return (
    <div className="mt-10">
      <Featured />
    </div>
  );
};
const SpecialContent = () => {
  return (
    <div className="mt-10">
      <Special />
    </div>
  );
};

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
  useEffect(() => {
    setActive(dataTabs[0].id);
  }, [dataTabs]);

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

  const renderContent = () => {
    switch (active) {
      case 1:
        return <NewArrivalsContent />;
      case 2:
        return <FeaturedContent />;
      case 3:
        return <SpecialContent />;
      default:
        return null;
    }
  };

  const navigate = (id) => {
    setActive(id);
  };
  return (
    <div>
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

      <div className="tab-content mb-4">{renderContent()}</div>
    </div>
  );
};
export default Active;

// import React, { useState, useEffect } from "react";

// const Active = () => {
//   const [active, setActive] = useState(null);
//   const [dataTabs, setDataTabs] = useState([
//     {
//       id: 1,
//       tabLinks: "NEW ARRIVALS",
//       tabClass: "myCustomClass",
//       tabClicked: false,
//     },
//     {
//       id: 2,
//       tabLinks: "FEATURED",
//       tabClass: "myCustomClass",
//       tabClicked: false,
//     },
//     {
//       id: 3,
//       tabLinks: "SPECIAL",
//       tabClass: "myCustomClass",
//       tabClicked: false,
//     },
//   ]);
//   useEffect(() => {
//     setActive(dataTabs[0].id);
//   }, [dataTabs]);

//   const NavLink = ({ id, tabLinks, isActive }) => {
//     return (
//       <a
//         href="#"
//         onClick={() => navigate(id)}
//         className={isActive ? "active" : " "}
//       >
//         {tabLinks}
//       </a>
//     );
//   };

//   const navigate = (id) => {
//     setActive(id);
//   };
//   return (
//     <div className="link-tab flex justify-center gap-6 text-[14px] text-[#7d7b7b] font-normal">
//       {dataTabs.map((item) => (
//         <button key={item.id} className=" hover:text-black">
//           <NavLink
//             {...item}
//             isActive={active === item.id}
//             onClick={navigate}
//           ></NavLink>
//         </button>
//       ))}
//     </div>
//   );
// };
// export default Active;
