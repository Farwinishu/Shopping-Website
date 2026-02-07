import React from "react";
import Image from "next/image";

interface propsType {
  img: string;
  title: string;
  mainTitle: string;
  price: string;
}

const Slide: React.FC<propsType> = ({ img, title, mainTitle, price }) => {
  return (
    <div className="outline-none border-none relative">
      <div className="slide-content">
        <h3 className="slide-title">{title}</h3>
        <h2 className="slide-main-title">{mainTitle}</h2>
        <h3 className="slide-price">
          starting at <b>{price}</b>.00
        </h3>
        <div className="pt-2">
          <button className="shop-now-btn">Shop Now</button>
        </div>
      </div>

      <Image
        className="banner-image"
        src={img}
        alt="banner"
        width={2000}
        height={2000}
        priority
      />
    </div>
  );
};

export default Slide;
