import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "boxicons/css/boxicons.min.css";
import "./Product.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const featureProduct = [
  // first-part
  {
    productURL:
      "https://xstore.b-cdn.net/demos/wp-content/uploads/2015/12/12_1-555x739.jpg",
    Category: "Bomber jackets,jackets,New jackets",
    Cloth: "Padded Aviator Jacket",
    Price: "$560.00",
  },
  {
    productURL:
      "https://xstore.b-cdn.net/demos/wp-content/uploads/2015/12/10_1-2-555x739.jpg",
    Category: "Jackets",
    Cloth: "Contrasting Panel Blazer",
    Price: "$530.00",
  },
  // second-part
  {
    productURL:
      "https://xstore.b-cdn.net/demos/wp-content/uploads/2015/12/9_1-2-555x739.jpg",
    Category: "Jackets",
    Cloth: "faux Leather Jacket",
    Price: "$620.00",
  },
  // third-part
  {
    productURL:
      "https://xstore.b-cdn.net/demos/wp-content/uploads/2015/12/1_1-5-555x739.jpg",
    Category: "Jackets",
    Cloth: "Distressed Jacket",
    Price: "$360.00-$840.00",
  },
  // forth-part
  {
    productURL:
      "https://xstore.b-cdn.net/demos/wp-content/uploads/2015/12/2_1-555x739.jpg",
    Category: "Jackets,WOOL COAT",
    Cloth: "Jersey padded jacket",
    Price: "$980.00",
  },
];

const Featured = () => {
  return (
    <div className="parent gap-2">
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        draggable
        minimumTouchDrag={80}
        responsive={responsive}
        slidesToSlide={1}
      >
        {featureProduct.map((item, index) => (
          <div key={index}>
            <div className="">
              <div className="productCard">
                <img src={item.productURL} alt="products" />
                <div className="addCart px-[30px]">
                  <button className="rounded-md px-3 py-1 bg-white text-black w-full">
                    Add to Cart
                  </button>
                </div>
                <div className="text-center ">
                  <a className="text-[#888] text-[14px] font-sans" href="">
                    {item.Category}
                  </a>
                  <br />
                  <a className="text-[16px] w-full" href="">
                    {item.Cloth}
                  </a>
                  <p className="text-[#888] text-[14px] font-sans">
                    {item.Price}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Featured;
