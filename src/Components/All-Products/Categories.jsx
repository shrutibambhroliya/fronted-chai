import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Categories.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const CategoriesPart = [
  {
    CategoriesImg:
      "https://xstore.b-cdn.net/demos/wp-content/uploads/2016/06/11-Categories.jpg",
    CateName: "HANDBAGS",
    Products: "10 Products",
  },
  {
    CategoriesImg:
      "https://xstore.b-cdn.net/demos/wp-content/uploads/2016/06/11-Categories3.jpg",
    CateName: "Accessories",
    Products: "10 Products",
  },
  {
    CategoriesImg:
      "https://xstore.b-cdn.net/demos/wp-content/uploads/2016/06/11-Categories2.jpg",
    CateName: "WOMAN",
    Products: "10 Products",
  },
  {
    CategoriesImg:
      "https://xstore.b-cdn.net/demos/wp-content/uploads/2016/06/11-Categories1.jpg",
    CateName: "MAN",
    Products: "10 Products",
  },
  {
    CategoriesImg:
      "https://xstore.b-cdn.net/demos/wp-content/uploads/2016/06/11-Categories6.jpg",
    CateName: "BELTS",
    Products: "5 Products",
  },
  {
    CategoriesImg:
      "https://xstore.b-cdn.net/demos/wp-content/uploads/2016/06/11-Categories7.jpg",
    CateName: "SHOES",
    Products: "10 Products",
  },
];

const Categories = () => {
  return (
    <div className="parent relative">
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        draggable
        // minimumTouchDrag={80}
        responsive={responsive}
        slidesToSlide={1}
      >
        {CategoriesPart.map((item, index) => (
          <div key={index} className="mx-[15px] ">
            <div className="img-container ">
              <div className="img-wrapper  max-w-full  ">
                <img src={item.CategoriesImg} alt="CategoriesParts" />
              </div>
              <div className="absolute left-0 right-0 bottom-0 top-0 flex items-center justify-center text-center">
                <div>
                  <h2 className="text-white text-md  font-semibold">
                    {item.CateName}
                  </h2>
                  <p className="text-white ">{item.Products}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Categories;
