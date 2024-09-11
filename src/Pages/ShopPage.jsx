import React from "react";
import { Link } from "react-router-dom";

const ShopPage = () => {
  const Shops = [
    {
      shopImg:
        "https://xstore.b-cdn.net/wp-content/uploads/2018/08/glasses.jpg",
      shopCategories: "ALL",
      shopProduct: "14 products",
      route: "/all",
    },
    {
      shopImg:
        "https://xstore.b-cdn.net/wp-content/uploads/2018/08/pullovers-category.jpg",
      shopCategories: "MEN",
      shopProduct: "5 products",
      route: "/men",
    },
    {
      shopImg:
        "https://xstore.b-cdn.net/wp-content/uploads/2018/08/women-category.jpg",
      shopCategories: "WOMEN",
      shopProduct: "8 products",
      route: "/women",
    },
    {
      shopImg:
        "https://xstore.b-cdn.net/wp-content/uploads/2018/08/shoes-category.jpg",
      shopCategories: "SHOES",
      shopProduct: "2 products",
      route: "/shoes",
    },
    {
      shopImg:
        "https://xstore.b-cdn.net/wp-content/uploads/2018/08/blouses-category.jpg ",
      shopCategories: "BLOUSES",
      shopProduct: "4 products",
      route: "/blouses",
    },
    {
      shopImg:
        "https://xstore.b-cdn.net/wp-content/uploads/2018/08/men-category.jpg",
      shopCategories: "PULLOVERS",
      shopProduct: "2 products",
      route: "/pulLovers",
    },
    {
      shopImg:
        "https://xstore.b-cdn.net/wp-content/uploads/2018/08/bags-category.jpg",
      shopCategories: "BAGS",
      shopProduct: "5 products",
      route: "/bags",
    },
  ];

  return (
    <div>
      <div className="mb-[25px] bg-[#fafafa] p-[.85em] text-center">
        <div className="container mx-auto">
          <div className="mx-[150px] ">
            <div className=" flex justify-between items-center text-[14px]">
              <nav className="flex mr-1 text-start items-center">
                <a
                  href=""
                  className="text-gray-500 transition-[0.3s] ease-in-out hover:text-gray-400"
                >
                  Home
                </a>
                <span>
                  <i class="bx bx-chevron-right mt-1 text-[18px] text-gray-400"></i>
                </span>
                <h1>Shop</h1>
              </nav>
              <a href="" className="items-center ">
                <Link to="/">
                  <p className="text-right transition-[0.3s] ease-in hover:text-gray-700">
                    <span className="items-center">
                      <i class="bx bx-chevron-left text-[18px] text-gray-400"></i>
                    </span>
                    Return to previous page
                  </p>
                </Link>
              </a>
            </div>
          </div>
        </div>
      </div>
      <section className="w-[75%] relative mx-auto mt-[70px] mb-[15px]">
        <div className="grid grid-cols-4 ">
          {Shops.map((item, index) => (
            <div key={index} className="relative mb-[30px] px-[15px] ">
              <Link to={item.route}>
                <div className="overflow-hidden">
                  <img
                    src={item.shopImg}
                    alt=""
                    className="transition-transform duration-500 ease-in-out transform hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-slate-100 opacity-0 hover:opacity-30 transition-opacity duration-500"></div>
                </div>
              </Link>
              <div className="absolute  bottom-5 left-0 right-0 ">
                <div className="relative text-center w-[75%] m-auto bg-[#fff] py-2 px-7 rounded-sm">
                  <h1>{item.shopCategories}</h1>
                  <p className="text-gray-400 text-[14px]">
                    {item.shopProduct}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-7">
          <div className="text-center border border-solid-1 py-[30px] px-[35px] bg-[#fff]">
            <div className="">
              <i class="bx bx-accessibility text-[28px] text-white p-2 bg-[#A4004F] rounded-full"></i>
            </div>
            <div className="pt-[15px]">
              <h2 className="mb-[.7em] text-[#222222]">
                FREE WORLDWIDE DELIVERY
              </h2>
              <h4 className="text-[14px] text-[#555555] mb-[.7em]">
                Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed
                eiusmod lorem tempor incididunt.
              </h4>
            </div>
          </div>
          <div className="text-center border border-solid-1 py-[30px] px-[35px] bg-[#fff]">
            <div>
              <i class="bx bx-accessibility text-[28px] text-white p-2 bg-[#A4004F] rounded-full"></i>
            </div>
            <div className="pt-[15px]">
              <h2 className="mb-[.7em] text-[#222222]">
                FREE WORLDWIDE DELIVERY
              </h2>
              <h4 className="text-[14px] text-[#555555] mb-[.7em]">
                Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed
                eiusmod lorem tempor incididunt.
              </h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopPage;
