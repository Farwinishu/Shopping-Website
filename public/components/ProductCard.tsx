import Image from 'next/image';
import React from 'react'
import { AiFillStar,AiOutlineStar } from "react-icons/ai";

interface propsType {
  img: string;
  title: string;
  desc: string;
  rating:number;
  price: string;
}

const ProductCard: React.FC<propsType> = ({ img, title, desc, rating, price }) => {

  const generateRating = (rating:number) => {
    switch (rating) {
      case 1:
        return (
          <div className="flex gap 1 text-[20px] text-[#FF9529]">
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 2:
        return (
          <div className="flex gap 1 text-[20px] text-[#FF9529]">
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 3:
        return (
          <div className="flex gap 1 text-[20px] text-[#FF9529]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 4:
        return (
          <div className="flex gap 1 text-[20px] text-[#FF9529]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
        );
      case 5:
        return (
          <div className="flex gap 1 text-[20px] text-[#FF9529]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        );
      default:
        return null;
    }
  }
  return (
    <div className="product-image-container  px-4 border border-gray-200 rounded-xl max-w-[400px]">
      <div>
        <Image
          className="product-image"
          src={img}
          width={300}
          height={150}
          alt={title}
        />
      </div>
      <div className="space-y-2 py-2">
        <h2 className="product-title text-accent font-medium uppercase">
          {title}
        </h2>
        <p className="product-desc text-gray-500 max-w-[150px]">{desc}</p>
        <div>{generateRating(rating)}</div>
        <div className="product-prices">
          <p className="product-price">
            <b>{price}</b>
          </p>
          <del className="product-original-price">
            ${parseInt(price) + 50}.00
          </del>
        </div>
      </div>
    </div>
  );
};

export default ProductCard
