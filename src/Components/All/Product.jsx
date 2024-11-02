// import React from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import "boxicons/css/boxicons.min.css";
// import { Link } from "react-router-dom";
// import "./Product.css";

// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 4,
//     slidesToSlide: 4, // optional, default to 1.
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 768 },
//     items: 3,
//     slidesToSlide: 3, // optional, default to 1.
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//     slidesToSlide: 1, // optional, default to 1.
//   },
// };

// export const newArrival = [
//   {
//     id: 1,
//     productURL:
//       "https://xstore.b-cdn.net/demos/wp-content/uploads/2015/12/9_1-3.jpg",
//     Category: "Shirt",
//     Cloth: "Padded Aviator Jacket",
//     Price: "$840",
//   },
//   {
//     id: 2,
//     productURL:
//       "https://xstore.b-cdn.net/demos/wp-content/uploads/2015/12/4_1-10-720x960.jpg",
//     Category: "Cream Collar",
//     Cloth: "Contrasting Panel Blazer",
//     Price: "$780",
//   },

//   {
//     id: 3,
//     productURL:
//       "https://xstore.b-cdn.net/demos/wp-content/uploads/2015/12/2_1-7.jpg",
//     Category: "Cream Collar",
//     Cloth: "faux Leather Jacket",
//     Price: "$890",
//   },

//   {
//     id: 4,
//     productURL:
//       "https://xstore.b-cdn.net/demos/wp-content/uploads/2015/12/4_1-6-720x960.jpg",
//     Category: "Shirt",
//     Cloth: "Distressed Jacket",
//     Price: "$700",
//   },

//   {
//     id: 5,
//     productURL:
//       "https://xstore.b-cdn.net/demos/wp-content/uploads/2015/12/1_1-8.jpg",
//     Category: "Cream Collar",
//     Cloth: "Jersey padded jacket",
//     Price: "$580",
//   },
// ];

// const Product = () => {
//   return (
//     <div className="parent gap-2">
//       <Carousel
//         additionalTransfrom={0}
//         arrows
//         autoPlaySpeed={3000}
//         draggable
//         minimumTouchDrag={80}
//         responsive={responsive}
//         slidesToSlide={1}
//       >
//         {newArrival.map((item, index) => (
//           <div key={index}>
//             <div className="">
//               <div className="productCard">
//                 <img src={item.productURL} alt="products" />
//                 <div className="addCart px-[30px]">
//                   <Link to={`/product/${item.id}`}>
//                     <button className="rounded-md px-3 py-1 bg-black text-white w-full">
//                       Add to Cart
//                     </button>
//                   </Link>
//                 </div>
//                 <div className="text-center ">
//                   <a className="text-[#888] text-[14px] font-sans" href="">
//                     {item.Category}
//                   </a>
//                   <br />
//                   <a className="text-[16px] w-full" href="">
//                     {item.Cloth}
//                   </a>
//                   <p className="text-[#888] text-[14px] font-sans">
//                     {item.Price}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Carousel>
//     </div>
//   );
// };

// export default Product;

import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "boxicons/css/boxicons.min.css";
import "./Product.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Product = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "http://localhost:4000/api/a1/products/getAllProducts",
          {
            method: "GET",
          }
        );
        if (!response.ok) {
          console.log("data not fetched successfully!");
          return;
        }
        const data = await response.json();
        console.log("data", data.data);
        const filterData = data.data.slice(0, 5);
        setProductList(filterData);
      } catch (error) {
        console.log("product not fetching successfully!!", error);
      }
    };
    fetchProducts();
  }, []);

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
        {productList.map((item, index) => (
          <div key={index} className="flex justify-center">
            <div className="productCard">
              <div>
                <img src={item.images} alt="products" className="w-full" />
              </div>
              <div className="addCart px-[30px] ">
                <button className="rounded-md px-3 py-1 bg-black text-white w-full">
                  Quick view
                </button>
              </div>
              <div className="text-center ">
                <a className="text-[#888] text-[14px] font-sans" href="">
                  {item.category.parentCategory}
                </a>
                <br />
                <a className="text-[20px] w-full" href="">
                  {item.name}
                </a>
                <p className="text-[#888] text-[14px] font-sans font-medium">
                  ${item.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Product;
