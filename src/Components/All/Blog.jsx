import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Blog.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const BlogData = [
  {
    blogImg:
      "https://xstore.b-cdn.net/demos/wp-content/uploads/2016/01/1-1.jpg",
    blogTitle: "Ullamcorper Vestibulum ",
    blogDate: "February 10,2016",
    blog: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed quo atque ad debitis incidunt eligendi qui aut, aliquam autem dolorum id. Enim excepturi libero perferendis!",
    btnLink: "Continue Reading",
    blogName: "General",
  },
  {
    blogImg:
      "https://xstore.b-cdn.net/demos/wp-content/uploads/2016/01/3-6.jpg",
    blogTitle: "Image Gallery post",
    blogDate: "January 16,2016",
    blog: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed quo atque ad debitis incidunt eligendi qui aut, aliquam autem dolorum id. Enim excepturi libero perferendis!",
    btnLink: "Continue Reading",
    blogName: "Architecture",
  },
  {
    blogImg:
      "https://xstore.b-cdn.net/demos/wp-content/uploads/2016/01/4-3.jpg",
    blogTitle: "Adipiscing duis",
    blogDate: "January 12,2016",
    blog: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed quo atque ad debitis incidunt eligendi qui aut, aliquam autem dolorum id. Enim excepturi libero perferendis!",
    btnLink: "Continue Reading",
    blogName: "Art",
  },
  {
    blogImg:
      "https://xstore.b-cdn.net/demos/wp-content/uploads/2016/01/4-2.jpg",
    blogTitle: "Full fashion editorial:the future is bring",
    blogDate: "January 12,2016",
    blog: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed quo atque ad debitis incidunt eligendi qui aut, aliquam autem dolorum id. Enim excepturi libero perferendis!",
    btnLink: "Continue Reading",
    blogName: "General",
  },
];

const Blog = () => {
  return (
    <div>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        draggable
        responsive={responsive}
        slidesToSlide={1}
      >
        {BlogData.map((item, index) => (
          <div key={index} className="mx-[15px] ">
            <div className="blogImg relative mb-[18px] w-full inline-block overflow-hidden ">
              <img src={item.blogImg} alt="blogs" />
            </div>
            <div className="absolute top-5">
              <p className="relative px-2 py-1 bg-red-600  text-white">
                {item.blogName}
              </p>
            </div>
            <div className="blog-info">
              <div className="mb-[10px]">
                <h2 className="mb-[3px] text-[18.2px] text-[#222222]">
                  {item.blogTitle}
                </h2>
                <p className="text-[gray]">{item.blogDate}</p>
              </div>
              <p className="text-[#464545]">{item.blog}</p>
              <a className="" href="">
                <span className="mt-[10px] text-[#cf2626] relative">
                  {item.btnLink}
                </span>
              </a>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Blog;
