// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { newArrival } from "../All/Product";
// const ProductsReveiw = () => {
//   const [product, setProduct] = useState(null);
//   const { id } = useParams();
//   useEffect(() => {
//     const featureData = newArrival.find((item) => item.id === parseInt(id));
//     console.log("feature", featureData);
//     setProduct(featureData);
//   }, [id]);

//   if (!product) {
//     console.log("product not found");
//   }

//   return <div>hello</div>;
// };

// export default ProductsReveiw;
