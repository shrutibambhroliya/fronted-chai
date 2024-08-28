import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className=" text-white ">
      <div className="grid grid-cols-3 gap-4 max-[1278px]:grid-cols-1 text-center">
        <div className=" ">
          <div className="logo flex items-left mb-5 max-[1278px]:items-center justify-center">
            <img
              src="https://cdn.pixabay.com/photo/2020/09/26/08/36/logo-5603463_960_720.png"
              alt=""
              width={100}
            />
            <span className="nav-logo text-[55px]  text-sky-600">Fashion</span>
          </div>
          <div className=" mb-3">
            <p>
              This is easy to update text from footer widget area.
              <br />
              Add here information about your store.
            </p>
            <p>
              48 Park Avenue,
              <br />
              New York NY 10016
              <p>
                Email:{" "}
                <span>
                  <a href="mailto:youremail@site.com">youremail@site.com</a>
                </span>
              </p>
            </p>
          </div>
        </div>
        <div className="">
          <h2 className="mb-[15px] pb-2 border-b-[1px] border-gray-600">
            USEFUL LINKS
          </h2>
          <div className="footers grid grid-cols-2 gap-10 max-[1278px]:grid-cols-1 gap-0">
            <div>
              <li>Home Page</li>
              <li>About Us</li>
              <li>Delivery Info</li>
              <li>Conditions</li>
              <li>Order Tracking</li>
              <li>My Account</li>
              <li>My Wishlist</li>
            </div>
            <div>
              <li>London</li>
              <li>San Francisco</li>
              <li>New Orlean</li>
              <li>Seattle</li>
              <li>Portland</li>
              <li>Stockholm</li>
              <li>Hoffenheim</li>
            </div>
          </div>
        </div>
        <div className="flex gap-4 m-auto max-[1279px]">
          <div>
            <img
              src="https://amantranjewels.in/uploads/products/373/1705487242.jpg"
              alt=""
              width={200}
              // className="max-w-full"
            />
          </div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaH2li5E9KaXmImUI7Wq_nmbEMbutepE36RrW3Bgi5rJVXNsPt_JVzTM62YCCGoh6zLcA&usqp=CAU"
              alt=""
              width={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
