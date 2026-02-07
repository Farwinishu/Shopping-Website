import React from "react";
import ProductCard from "./ProductCard";


const productsData = [
  {
    img: "/jacket1.png",
    title: "Jackets",
    desc: "New yarn fleece full-zip jacket",
    rating: 5,
    price: "180.00",
  },
  {
    img: "/jacket2.png",
    title: "Jackets",
    desc: "Trending men's jacket", 
    rating: 2,
    price: "80.00",
  },
  {
    img: "/skirt.png",
    title: "Skirts",
    desc: "Modern women's Trending skirts", 
    rating: 4,
    price: "200.00",
  },
  {
    img: "/sandles.png",
    title: "Sandles",
    desc: "Womens party wear shoes",
    rating: 5,
    price: "300.00",
  },
  {
    img: "/shirt.png",
    title: "Shirt",
    desc: "Pure garment dyed cotton shirt",
    rating: 4,
    price: "45.00",
  },
  {
    img: "/shoe.png",
    title: "Sport shoes",
    desc: "Tracking & running shoes - black", 
    rating: 3,
    price: "58.00",
  },
  {
    img: "/watch1.png",
    title: "Watches",
    desc: "Smart watches vital plus",
    rating: 4,
    price: "100.00",
  },
  {
    img: "/watch2.png",
    title: "Watches",
    desc: "Pocket watches leather pouch",
    rating: 4,
    price: "120.00",
  },
];

const NewProducts = () => {
  return (
    <div>
      <div className="container pt-16">
        {" "}
       
        <h2 className="font-medium text-2xl pb-10">   New Products</h2>{" "}
        
        <div
          className="products-grid"
        >
          
          {productsData.map((item, index) => (
            <ProductCard
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
