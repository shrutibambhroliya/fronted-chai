import React from "react";
import "./HomePage.css";
import Navbar from "../Components/Common/Navbar";
import Button from "../Components/Common/Button";
import images from "../Components/Common/Images";
import Sliders from "../Components/Common/Sliders";
import Active from "../Components/Common/Active";
import Categories from "../Components/All/Categories";
import Blog from "../Components/All/Blog";
import PreFooter from "../Components/All/PreFooter";

const HomePage = () => {
  return (
    <div className="relative">
      {/* slider section  */}
      <section className="">
        <div className="">
          <div className="">
            <Sliders>
              {images.map((item, index) => (
                <div key={index} className="slider__content">
                  <div className=" w-full grid grid-cols-2 items-center py-[35px] px-[10px] rounded-md bg-[#555554] ease-in duration-300 hover:scale-95 max-[1152px]:grid-cols-1 gap-4">
                    <div>
                      <img
                        className="w-full h-auto rounded-lg max-[1152px]:max-w-[700px] m-auto"
                        src={item.imgURL}
                        alt={item.imgALT}
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-[50px] font-serif font-semibold tracking-[5px] max-[1152px]:text-[40px] tracking-[2px] max-[915px]:text-[30px] tracking-normal">
                        {item.title}
                      </p>
                      <p className="text-[#e2e2c0] text-[30px] font-semibold font-sans tracking-[5px] max-[1152px]:text-[25px] tracking-[2px] ">
                        {item.sell}
                      </p>
                      <p className="awesome text-[45px] font-serif font-semibold tracking-[5px] text-[#7de9ff] pb-3 max-[1152px]:text-[35px] tracking-[2px]">
                        {item.discount}
                      </p>
                      <Button btnText="Shop Now"></Button>
                    </div>
                  </div>
                </div>
              ))}
            </Sliders>
          </div>
        </div>
      </section>

      {/* grid section */}
      <section className="grid grid-cols-4 mb-5 max-[1313px]:grid-cols-2">
        <div className="banner-img bg-[#ecc923] transition-[0.3s] hover:bg-[#ccad12]">
          <img
            className="opacity-[0.4] max-w-[100%]"
            src="https://xstore.b-cdn.net/demos/wp-content/uploads/2015/10/hom3.jpg"
            alt=""
          />
          <div className="absolute left-0 top-[25%] w-full px-[20px] py-[15px] text-right">
            <h2 className="relative font-sans font-semibold mb-2  text-[1rem] text-white">
              NEW COLLECTIONS
            </h2>
            <h2 className="relative  font-medium font-serif text-[25px] mb-2  text-white">
              GET READY FOR SUMMER
            </h2>
            <div className="relative ">
              <a className="px-3 py-2 bg-[#fff] text-black text-[12px] font-semibold transition-[0.3s] hover:bg-[#fd3030]    ">
                READ MORE
              </a>
            </div>
          </div>
        </div>

        <div className="banner-img bg-[#1c9ec6] transition-[0.3s] hover:bg-[#0d8ab0]">
          <img
            className="opacity-[0.4] max-w-[100%]"
            src="https://xstore.b-cdn.net/demos/wp-content/uploads/2015/10/hom2.jpg"
            alt=""
          />
          <div className="absolute left-0 top-[25%] w-full px-[20px] py-[15px] text-center ">
            <h2 className="relative font-sans  font-semibold mb-2  text-[1rem] text-white">
              COMMUNITY
            </h2>
            <h2 className="relative font-medium font-serif text-[23px] mb-2  text-white">
              CHECK OVER NEW GIVEAWAY
            </h2>
            <div className="relative ">
              <a className="px-3 py-2 bg-[#fff] text-black text-[12px] font-semibold transition-[0.3s] hover:bg-[#fd3030]    ">
                READ MORE
              </a>
            </div>
          </div>
        </div>

        <div className="banner-img bg-[#6c9426] transition-[0.3s] hover:bg-[#5c8b0b]">
          <img
            className="opacity-[0.4] max-w-[100%]"
            src="https://xstore.b-cdn.net/demos/wp-content/uploads/2015/10/banner.jpg"
            alt=""
          />
          <div className="absolute left-0 top-[25%] w-full px-[20px] py-[15px] text-center ">
            <h2 className="relative font-sans font-semibold mb-2  text-[1rem] text-white">
              COMMUNITY
            </h2>
            <h2 className="relative  font-medium font-serif text-[23px] mb-2  text-white">
              CHECK OUR NEW GIVEAWAY
            </h2>
            <div className="relative ">
              <a className="px-3 py-2 bg-[#fff] text-black text-[12px] font-semibold transition-[0.3s] hover:bg-[#fd3030]    ">
                READ MORE
              </a>
            </div>
          </div>
        </div>

        <div className="banner-img bg-[#344d8c] transition-[0.3s] hover:bg-[#233c79]">
          <img
            className="opacity-[0.4] max-w-[100%]"
            src="https://xstore.b-cdn.net/demos/wp-content/uploads/2015/10/hom1.jpg"
            alt=""
          />
          <div className="absolute left-0 top-[25%] w-full px-[20px] py-[15px] text-left ">
            <h2 className="relative font-sans  font-semibold mb-2  text-[1rem] text-white">
              NEW COLLECTIONS
            </h2>
            <h2 className="relative font-medium font-serif text-[25px] mb-2  text-white tracking-[1px]">
              GET READY FOR SUMMER
            </h2>
            <div className="relative ">
              <a className="px-3 py-2 bg-[#fff] text-black text-[12px] font-semibold transition-[0.3s] hover:bg-[#fd3030]    ">
                READ MORE
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* payment process*/}
      <section className="relative w-[70%] m-auto mb-[15px]">
        <div className="grid grid-cols-3 gap-5 divide-x divide-[#c2bebe] max-[1281px]:grid-cols-1 divide-x-0 ">
          <div className="">
            <div className=" text-center">
              <h2 className="text-[4rem] font-sans font-bold text-[#e74948]">
                01.
              </h2>
              <h4 className="text-[1.25rem] text-black font-sans font-bold ">
                MAKE YOUR ORDER
              </h4>
            </div>
            <p className="text-center max-w-[100%] mb-[1.10rem] text-[#888] p-4">
              Browse the products from your favorite category, add to your
              basket and make an order in a few clicks.
            </p>
            <div className="text-center text-[.75rem] py-[7px] bg-black mx-[110px] rounded-sm transition-[0.3s] hover:opacity-[0.7] ">
              <button className="text-white">READ MORE</button>
            </div>
          </div>

          <div>
            <div className=" text-center">
              <h2 className="text-[4rem] font-sans font-bold text-[#e74948]">
                02.
              </h2>
              <h4 className="text-[1.25rem] text-black font-sans font-bold">
                PAYMENT PROCESS
              </h4>
            </div>
            <p className="text-center max-w-[100%] mb-[1.10rem] text-[#888] p-4">
              Choose the most appropriative payment method.Be sure to be
              incognito and secure with your details.
            </p>
            <div className="text-center text-[.75rem] py-[7px] bg-black mx-[110px] rounded-sm transition-[0.3s] hover:opacity-[0.7]">
              <button className="text-white">READ MORE</button>
            </div>
          </div>

          <div>
            <div className=" text-center ">
              <h2 className="text-[4rem] font-sans font-bold text-[#e74948]">
                03.
              </h2>
              <h4 className="text-[1.25rem] text-black font-sans font-bold">
                24H UK DELIVERY
              </h4>
            </div>
            <p className="text-center max-w-[100%] mb-[1.10rem] text-[#888] p-4">
              Take advantage of our faster three-five days shipping service with
              quick delivery throughout the world.
            </p>
            <div className="text-center text-[.75rem] py-[7px] bg-black mx-[110px] rounded-sm transition-[0.3s] hover:opacity-[0.7]">
              <button className="text-white">READ MORE</button>
            </div>
          </div>
        </div>
      </section>

      {/* All-produst:featured,new-arrivals,special */}
      <section className="w-[75%] relative mx-auto mt-[70px] ">
        <div className="">
          <div className="text-center">
            <div>
              <h2 className="text-[25px] mb-[9.8px]">TOP INTERESTING</h2>
            </div>
            <div className="mb-[35px]">
              <p>
                Browse the collection of our best selling and top interesting
                products.
                <br />
                You’ll definitely find what you are looking for.
              </p>
            </div>
          </div>

          <div className="mb-[30px] ">
            <div className="">
              <Active />
            </div>
          </div>
        </div>
      </section>

      {/* product categories */}
      <section className="w-[75%] relative mx-auto mt-[70px]">
        <div>
          <h1 className="text-[25px] font-normal mb-[11.2px] tracking-[1px] text-center font-sans">
            PRODUCT CATEGORIES
          </h1>
          <div className="mb-[35px]">
            <p className="text-center max-w-full text-gray-600">
              Variety of product categories, tens of products, only five-stars
              reviews.
              <br />
              Browse the collections right now.
            </p>
          </div>
        </div>
        <div>
          <Categories />
        </div>
      </section>

      {/* blog  */}
      <section className="w-[75%] relative mx-auto mt-[70px] mb-[15px]">
        <div>
          <div className="text-center">
            <h2 className="text-[25px] tracking-[1px] mb-[11.2px]">
              LATEST FROM OUR BLOG
            </h2>
            <p className="text-gray-600 mb-[30px]">
              Do you want to present posts in the best way to highlight
              interestingmoments of your blog?
              <br />
              Focus on the latest news!
            </p>
          </div>
          <div>
            <Blog />
          </div>
        </div>
      </section>

      {/* pre-footer  */}
      <section className="w-[75%] relative mx-auto mt-[70px] mb-[15px]">
        <PreFooter />
      </section>
    </div>
  );
};

export default HomePage;
